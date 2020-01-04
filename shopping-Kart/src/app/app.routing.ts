import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback-template-driven/feedback.component';
import { FeedbackReactiveFormsComponent } from './feedback-reactive-forms/feedback-reactive-forms.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'feedbackTemplate', component: FeedbackComponent},
    { path: 'feedbackReactive', component: FeedbackReactiveFormsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class Routing{
    
}