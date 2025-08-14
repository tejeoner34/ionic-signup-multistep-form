import { Injectable } from '@angular/core';

export interface RegisterData {
  fullNameKanji?: string;
  fullNameKana?: string;
  birthDate?: string;
  phone?: string;
  email?: string;
  postalCode?: string;
  prefecture?: string;
  city?: string;
  street?: string;
  idType?: string;
  idNumber?: string;
  agreeTerms?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterDataService {
  private registerData: RegisterData = {};

  setData(partial: Partial<RegisterData>) {
    this.registerData = { ...this.registerData, ...partial };
  }

  clearData() {
    this.registerData = {};
  }

  getData(): RegisterData {
    return this.registerData;
  }
}
