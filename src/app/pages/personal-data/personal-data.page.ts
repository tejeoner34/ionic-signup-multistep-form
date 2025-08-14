import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonFooter,
  IonButton,
  IonInput,
  IonDatetime,
  IonListHeader,
  IonNav,
} from '@ionic/angular/standalone';
import { RegisterDataService } from 'src/app/services/register-data';
import { AddressDataPage } from '../address-data/address-data.page';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.page.html',
  styleUrls: ['./personal-data.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonButton,
    IonFooter,
    IonList,
    IonLabel,
    IonItem,
    IonContent,
    IonToolbar,
    IonInput,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PersonalDataPage implements OnInit {
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

  constructor(
    private fb: FormBuilder,
    private registerDataService: RegisterDataService,
    private nav: IonNav
  ) {}

  ngOnInit() {}

  onClick() {
    this.registerDataService.setData(this.form.value);
    this.nav.push(AddressDataPage);
  }
}
