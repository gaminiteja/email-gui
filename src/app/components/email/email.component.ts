import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { EmailService } from '../../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule,JsonPipe,MatProgressSpinnerModule,NgIf],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  data = {
    to: "",
    subject: "",
    text: ""
  };
  flag:boolean=false
  constructor(private email:EmailService, private snack:MatSnackBar){

  }
  doSubmitForm(){
    this.flag =true
    console.log("try to submit");
    console.log("Data ",this.data);
    if(this.data.to=='' || this.data.subject=='' || this.data.text==''){
      this.snack.open("Fields can not be empty","OK");
      this.flag= false
      return;
    }
    this.email.sendEmail(this.data).subscribe(
      response =>{
        console.log(response);
        this.flag=false;
        this.snack.open("Email sent succesfully!!","OK");
      },
      error=>{
        console.log(error);
        this.flag=false;
        this.snack.open("Error","OK");
      }
    )
  } 

}
