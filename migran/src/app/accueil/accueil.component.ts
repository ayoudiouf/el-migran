import { Component } from '@angular/core';
import { AproposComponent } from '../apropos/apropos.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header-footer/header/header.component';
import { FooterComponent } from '../header-footer/footer/footer.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink,HeaderComponent,FooterComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
