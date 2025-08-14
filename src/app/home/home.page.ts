import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonModal,
  IonButtons,
  IonNav,
  IonIcon,
} from '@ionic/angular/standalone';
import { PersonalDataPage } from '../pages/personal-data/personal-data.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonIcon,
    IonNav,
    IonButtons,
    IonModal,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  modalComponent = PersonalDataPage;
  constructor() {}
}
