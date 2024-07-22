import { Component } from '@angular/core';
import { HeaderComponent } from '../header-footer/header/header.component';
import { FooterComponent } from '../header-footer/footer/footer.component';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {

}
