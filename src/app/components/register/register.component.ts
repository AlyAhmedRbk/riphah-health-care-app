import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import {FormsModule} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FooterComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  http  = inject(HttpClient);

  data :any [] =[];

  userData: any=
  {
    name : '',
    email : '',
    phone : '',
    hospitalName : '',
    clinicName : '',
    location : '',
  }

  saveData(){
    this.data = this.userData;
    console.log(this.data);

    this.http.post("", this.data).subscribe((res)=>{
      console.log("User Registered Successfully");
    });

    this.userData = "";
  }

  }
