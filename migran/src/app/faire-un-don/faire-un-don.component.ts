import { Component } from '@angular/core';
import { HeaderComponent } from '../header-footer/header/header.component';
import { FooterComponent } from '../header-footer/footer/footer.component';

@Component({
  selector: 'app-faire-un-don',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './faire-un-don.component.html',
  styleUrl: './faire-un-don.component.css'
})
export class FaireUnDonComponent {

}
