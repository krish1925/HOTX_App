import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { FormComponent } from 'src/form/form.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
