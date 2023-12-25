import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private snackBar: MatSnackBar) {}
  btnClick(){
    console.log("btn click");
    this.snackBar.open("Hey welcome","cancel");
  }
}
