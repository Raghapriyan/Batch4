import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyComponentModule } from 'src/components/myComponent.module';
import { TemplateDrivenExampleComponent } from './components/template-driven-example/template-driven-example.component';

const Route: Routes = [{
  path: 'template-forms', component: TemplateDrivenExampleComponent  
}]

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyComponentModule,
    RouterModule.forRoot(Route)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
