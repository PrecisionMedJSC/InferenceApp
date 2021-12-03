import { Component, createPlatform, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

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

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.fields as FormArray; }
  get fieldFormGroups() { return this.t.controls as FormGroup[]; }

  onChangeFields(e: any) {
    const numberOfFields = e || 0;
    if (this.t.length < numberOfFields) {
      for (let i = this.t.length; i < numberOfFields; i++) {
        this.t.push(this.formBuilder.group({
          name: ['', Validators.required],
          value: ['', [Validators.required]],
          modelName: ['', Validators.required]
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
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      numberOfFields: ['', Validators.required],
      fields: new FormArray([]),
      algoSelected: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.dynamicForm?.invalid) {
      return;
    }
    console.log(this.dynamicForm?.value);
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

  onChangeAlgo(e: any) {
    console.log(e);
  }
}

