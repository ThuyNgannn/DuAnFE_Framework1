import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomeClientComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductlistClientComponent } from './productlist/productlist.component';
const routes: Routes = [
    {path:'',component:HomeClientComponent},
    {path:'home',component:HomeClientComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    // {path:'productlist',component:ProductlistClientComponent},
    {path:'products/:id', component:ProductDetailComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
