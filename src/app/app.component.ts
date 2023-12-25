import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from "./components/home/home.component";
import { EmailComponent } from './components/email/email.component';
import { HttpClientModule} from '@angular/common/http';
import { EmailService } from './service/email.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers:[EmailService],
    imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, EmailComponent,HttpClientModule]
})
export class AppComponent {
  title = 'emailgui';
}
