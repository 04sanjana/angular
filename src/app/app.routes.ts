import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StateComponent } from './pages/state/state.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './ui/cards/cards.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path:'',component:HomeComponent },
    
    {path:'state',component:StateComponent},
    {path: 'state/:id',component:SingleStateComponent},
    {path:'about',component:AboutComponent},
    {
        path:'**',component:NotFoundComponent
    }
    
    
];
