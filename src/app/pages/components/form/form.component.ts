import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  fields = [
    { name: 'pregnancies' },
    { name: 'glucose' },
    { name: 'bloodPressure' },
    { name: 'skinThickness' },
    { name: 'insulin' },
    { name: 'bmi' },
    { name: 'diabetesPedigreeFunction' },
    { name: 'age' }
  ];
  formGroup = new FormGroup({
    pregnancies: new FormControl('', [
      Validators.required,
    ]),
    glucose: new FormControl('', [
      Validators.required,
    ]),
    bloodPressure: new FormControl('', [
      Validators.required,
    ]),
    skinThickness: new FormControl('', [
      Validators.required,
    ]),
    insulin: new FormControl('', [
      Validators.required,
    ]),
    bmi: new FormControl('', [
      Validators.required,
    ]),
    diabetesPedigreeFunction: new FormControl('', [
      Validators.required,
    ]),
    age: new FormControl('', [
      Validators.required,
    ]),

  });
  get pregnancies() { return this.formGroup.get('pregnancies'); }
  get glucose() { return this.formGroup.get('glucose'); }
  get bloodPressure() { return this.formGroup.get('bloodPressure'); }
  get skinThickness() { return this.formGroup.get('skinThickness'); }
  get insulin() { return this.formGroup.get('insulin'); }
  get bmi() { return this.formGroup.get('bmi'); }
  get diabetesPedigreeFunction() { return this.formGroup.get('diabetesPedigreeFunction'); }
  get age() { return this.formGroup.get('age'); }
  constructor(
    public router: Router,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {

  }

  onSubmit(post: any) {
    this.post = post;
    console.log(post)
  }
  upperNameOfFields(name: string) {
    return name.toUpperCase();
  }
}

