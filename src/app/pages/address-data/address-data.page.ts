import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonFooter,
  IonButton,
  IonListHeader,
  IonInput,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.page.html',
  styleUrls: ['./address-data.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonListHeader,
    IonButton,
    IonFooter,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AddressDataPage implements OnInit {
  form: FormGroup = this.fb.group({
    fullNameKanji: [
      '',
      [Validators.required, Validators.pattern(/^[\u4E00-\u9FFF]+$/)],
    ],
    fullNameKana: [
      '',
      [Validators.required, Validators.pattern(/^[\u30A0-\u30FF]+$/)],
    ],
    birthDate: ['', Validators.required],
    phone: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onClick() {}
}
