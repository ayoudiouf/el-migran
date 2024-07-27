import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebaradminComponent } from '../sidebar/sidebaradmin/sidebaradmin.component';
import { MenusideComponent } from '../sidebar/menuside/menuside.component';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [RouterLink,SidebaradminComponent,MenusideComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.css'
})
export class DashboardsComponent {

}
