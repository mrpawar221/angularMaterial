import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmanagerComponent } from './contactmanager.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
    { 
        path: '', component:ContactmanagerComponent, 
        children:[
            {path: ':id', component:MainContentComponent},
            {path:'', component:MainContentComponent}
        ]
    },
    {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactmanagerRoutingModule { }
