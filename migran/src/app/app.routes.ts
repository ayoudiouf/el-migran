import { Routes } from '@angular/router';
import path from 'path';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { ObjectifEtVisionComponent } from './objectif-et-vision/objectif-et-vision.component';
import { MissionComponent } from './mission/mission.component';
import { FaireUnDonComponent } from './faire-un-don/faire-un-don.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { MenusideComponent } from './sidebar/menuside/menuside.component';
import { SidebaradminComponent } from './sidebar/sidebaradmin/sidebaradmin.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';



export const routes: Routes = [
    {path : '' , redirectTo:'accueil', pathMatch:'full'},
    {path : 'accueil', component: AccueilComponent},
    {path : 'apropos', component: AproposComponent},
    {path : 'header', component: HeaderComponent},
    {path : 'footer', component: FooterComponent},
    {path : 'objectifvision', component: ObjectifEtVisionComponent},
    {path : 'mission', component: MissionComponent},
    {path : 'faireundon', component: FaireUnDonComponent},
    {path : 'dashboard', component: DashboardsComponent},
    {path : 'menuside', component: MenusideComponent},
    {path : 'sidebar', component: SidebaradminComponent},
    {path : 'connexion', component: ConnexionComponent},
    {path : 'inscription', component: InscriptionComponent},
];
