import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressDataPage } from './address-data.page';

describe('AddressDataPage', () => {
  let component: AddressDataPage;
  let fixture: ComponentFixture<AddressDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
