import { Routes } from '@angular/router';
import path from 'path';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { ObjectifEtVisionComponent } from './objectif-et-vision/objectif-et-vision.component';
import { MissionComponent } from './mission/mission.component';
import { FaireUnDonComponent } from './faire-un-don/faire-un-don.component';



export const routes: Routes = [
    {path : '' , redirectTo:'accueil', pathMatch:'full'},
    {path : 'accueil', component: AccueilComponent},
    {path : 'apropos', component: AproposComponent},
    {path : 'header', component: HeaderComponent},
    {path : 'footer', component: FooterComponent},
    {path : 'objectifvision', component: ObjectifEtVisionComponent},
    {path : 'mission', component: MissionComponent},
    {path : 'faireundon', component: FaireUnDonComponent},
];
