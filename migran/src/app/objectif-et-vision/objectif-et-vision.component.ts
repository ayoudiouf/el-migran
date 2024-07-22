import { Component } from '@angular/core';
import { HeaderComponent } from '../header-footer/header/header.component';
import { FooterComponent } from '../header-footer/footer/footer.component';


@Component({
  selector: 'app-objectif-et-vision',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './objectif-et-vision.component.html',
  styleUrl: './objectif-et-vision.component.css'
})
export class ObjectifEtVisionComponent {

}
