import { Component, createPlatform, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { MlService } from 'src/app/services/ml.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  hide = true;
  userProfile = null;
  post: any = '';
  matcher = new MyErrorStateMatcher();
  submitted = false;
  public dynamicForm!: FormGroup;
  public modelName = [
    'model_15k_selected_fg',
  ];
  algos: Array<string> = [];
  specs: Array<any> = [];
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.fields as FormArray; }
  get fieldFormGroups() { return this.t.controls as FormGroup[]; }

  async onChangeFields(e: any) {
    let numberOfFields = e || 0;
    if (this.t.length < numberOfFields) {
      for (let i = this.t.length; i < numberOfFields; i++) {
        this.t.push(this.formBuilder.group({
          name: ['', Validators.required],
          value: ['', [Validators.required]],
          unit: ['', Validators.required]
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfFields; i--) {
        this.t.removeAt(i);
      }
    }
  }
  constructor(
    public router: Router,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private mlSerrvice: MlService
  ) { }


  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      numberOfFields: ['', Validators.required],
      fields: new FormArray([]),
      algoSelected: ['', Validators.required],
      modelSelected: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.dynamicForm?.invalid) {
      return;
    }
    console.log(this.getValueFromFields(this.dynamicForm.get('fields')?.value)[0]);
    let result = await this.mlSerrvice.inferenceInput(
      this.dynamicForm.get('modelSelected')?.value,
      this.dynamicForm.get('modelSelected')?.value,
      this.getValueFromFields(this.dynamicForm.get('fields')?.value)[0],
      // String().concat(this.dynamicForm.get('fields.0.value')?.value, this.dynamicForm.get('fields.1.value')?.value, this.dynamicForm.get('fields.2.value')?.value, this.dynamicForm.get('fields.3.value')?.value, this.dynamicForm.get('fields.4.value')?.value),
      false)
    // console.log(this.dynamicForm?.value);
    console.log(result);
  }
  upperNameOfFields(name: string) {
    return name.toUpperCase();
  }
  onReset() {
    this.submitted = false;
    this.dynamicForm?.reset();
    this.t.clear();
  }

  onClear() {
    this.submitted = false;
    this.t.reset();
  }

  async onChangeAlgo(e: string) {
    console.log(e);
  }
  async onChangeModel(e: string) {
    let temp = (await this.mlSerrvice.getModels(e) as any);
    let algoName = temp['models'];
    this.specs = temp['spec']['features']
    algoName.forEach((element: string) => {
      if (this.filterExtensionFile(element) != null) {
        // console.log(element);
        this.algos.push(element);
      }
    });

    this.specs.forEach((element: any) => {

    });
    console.log(this.algos);
    console.log(this.specs);
  }
  filterExtensionFile(fileName: string) {
    const regex = RegExp(/^.*\.(pkl|h5)$/g);
    return fileName.match(regex);
  }
  getValueFromFields(input: any) {
    let result = "";
    console.log(input);
    for (let i = 0; i < input.length; i++) {
      console.log(input[i]['value'])
      result += input[i]['value'] + ",";
    }
    return result.substring(0, result.length - 2);
  }
}

