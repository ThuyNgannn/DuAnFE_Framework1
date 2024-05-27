import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
//Client
import { HomeClientComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
//Admin
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductlistComponent } from './admin-productlist/admin-productlist.component';
import { AuthGuard } from './auth.guard';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CatelistComponent } from './catelist/catelist.component';
import { CateAddComponent } from './cate-add/cate-add.component';
import { CateEditComponent } from './cate-edit/cate-edit.component';
import { AcccoutlistComponent } from './acccoutlist/acccoutlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
    {
        path: '',
        component: ClientLayoutComponent,
        children: [
          { path: '', redirectTo: '/home', pathMatch: 'full' },
          { path: 'home', component: HomeClientComponent },
          { path: 'about',component:AboutComponent},
          { path: 'contact',component:ContactComponent},
          { path: 'feedback',component:FeedbackComponent},
          { path: 'login',component:LoginComponent},
          { path: 'register',component:RegisterComponent},
          { path: 'products/:id',component:ProductDetailComponent},

        ]
      },
      {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard] },
          {
            path: 'products',
            children: [
              { path: '', component: AdminProductlistComponent },
              { path: 'add', component: ProductAddComponent },
              { path: 'edit', component: ProductEditComponent },
            ]
          },
          {
            path: 'category',
            children: [
              { path: '', component: CatelistComponent },
              { path: 'add', component: CateAddComponent },
              { path: 'edit', component: CateEditComponent },
            ]
          },
          {
            path: 'accout',
            children: [
              { path: '', component: AcccoutlistComponent },
            ]
          },
          { path: '**', component: PagenotfoundComponent }
        ]
      }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
