import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProductComponent } from './medical-product.component';

describe('MedicalProductComponent', () => {
  let component: MedicalProductComponent;
  let fixture: ComponentFixture<MedicalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
