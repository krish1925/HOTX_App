import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { FormComponent } from 'src/form/form.component';
import { AppComponent } from './app.component';
import { SampleComponent } from 'src/sample/sample.component';
@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    FormComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
