import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from '../about/about.component';
import { MedicalProductComponent } from "../medical-product/medical-product.component";
import { TourismPackagesComponent } from "../tourism-packages/tourism-packages.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, HeroComponent, AboutComponent, MedicalProductComponent, TourismPackagesComponent, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
