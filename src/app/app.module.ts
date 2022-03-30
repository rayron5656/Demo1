import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Comp1Component } from './comp1/comp1.component';
import { MenuComponent } from './menu/menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Copyright2Component } from './copyright2/copyright2.component';

import { AuthModule } from './auth/auth.module';
import { ButtonComponent } from './button/button.component';
import { MultiEventsComponent } from './multi-events/multi-events.component';
import { CounterComponent } from './counter/counter.component';
import { ForComponent } from './for/for.component';
import { MyFirstFormComponent } from './my-first-form/my-first-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    MenuComponent,
    UserDetailsComponent,
    Copyright2Component,
    ButtonComponent,
    MultiEventsComponent,
    CounterComponent,
    ForComponent,
    MyFirstFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
