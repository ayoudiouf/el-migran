import { Component } from '@angular/core';
import { HeaderComponent } from '../header-footer/header/header.component';
import { FooterComponent } from '../header-footer/footer/footer.component';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {

}
