import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyComponentModule } from 'src/components/myComponent.module';
import { TemplateDrivenExampleComponent } from './components/template-driven-example/template-driven-example.component';
import { ReactiveFormsExampleComponent } from './components/reactive-forms-example/reactive-forms-example.component';
import { TestFrameworkExampleComponent } from './components/test-framework-example/test-framework-example.component';

const Route: Routes = [
  { path: 'template-forms', component: TemplateDrivenExampleComponent },
  { path: 'reactive-forms', component: ReactiveFormsExampleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenExampleComponent,
    ReactiveFormsExampleComponent,
    TestFrameworkExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyComponentModule,
    RouterModule.forRoot(Route)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
