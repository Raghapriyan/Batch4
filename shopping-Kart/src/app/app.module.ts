import { BrowserModule } from '@angular/platform-browser';
import { Routing } from './app.routing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './products/electronics/electronics.component';
import { ClothingComponent } from './products/clothing/clothing.component';
import { FurnitureComponent } from './products/furniture/furniture.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { OpticalsComponent } from './products/opticals/opticals.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ElectronicsComponent,
    ClothingComponent,
    FurnitureComponent,
    OpticalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
