import { BrowserModule } from '@angular/platform-browser';
import { Routing } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './products/electronics/electronics.component';
import { ClothingComponent } from './products/clothing/clothing.component';
import { FurnitureComponent } from './products/furniture/furniture.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { OpticalsComponent } from './products/opticals/opticals.component';
import { CartComponent } from './cart/cart.component';
import { ProductServiceService } from './product-service.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormatUserNamePipe } from './utility/userNamePipe';
import { HighlightDirective } from './highlight.directive';
import { FeedbackComponent } from './feedback-template-driven/feedback.component';
import { FeedbackReactiveFormsComponent } from './feedback-reactive-forms/feedback-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatUserNamePipe,
    LoginComponent,
    HomeComponent,
    ElectronicsComponent,
    ClothingComponent,
    FurnitureComponent,
    OpticalsComponent,
    CartComponent,
    HighlightDirective,
    FeedbackComponent,
    FeedbackReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    ButtonsModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
