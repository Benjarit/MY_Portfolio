import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CareersComponent } from './careers/careers.component';
import { BackgroundComponent } from './background/background.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CareersComponent,
    BackgroundComponent,
    ContactsComponent,
    LandingPageComponent,
    InputUserDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
