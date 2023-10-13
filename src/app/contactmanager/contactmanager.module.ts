import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerComponent } from './contactmanager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

@NgModule({
  declarations: [
    ContactmanagerComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent,
    
  ],
  providers:[
    UserService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ContactmanagerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ContactmanagerModule { }
 