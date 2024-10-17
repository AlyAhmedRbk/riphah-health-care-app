import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import {FormsModule} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FooterComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  router = inject(Router);

  http  = inject(HttpClient);


  saveData(data : any){
    // console.log(data);
    this.http.post("http://localhost:3000/userData", data).subscribe((res)=>{
      console.log("User Registered Successfully");
      alert("User Registered Successfully");
      if(res){
        this.router.navigate([""])
      }
    });
  }
}
