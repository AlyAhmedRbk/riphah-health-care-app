import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismPackagesComponent } from './tourism-packages.component';

describe('TourismPackagesComponent', () => {
  let component: TourismPackagesComponent;
  let fixture: ComponentFixture<TourismPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourismPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
