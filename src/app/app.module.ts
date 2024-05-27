import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HomeClientComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductlistClientComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProductlistComponent } from './admin-productlist/admin-productlist.component';
import { AuthGuard } from './auth.guard';
import { AcccoutlistComponent } from './acccoutlist/acccoutlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CatelistComponent } from './catelist/catelist.component';
import { CateAddComponent } from './cate-add/cate-add.component';
import { CateEditComponent } from './cate-edit/cate-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    HomeClientComponent,
    ContactComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    ProductlistClientComponent,
    ProductDetailComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminHomeComponent,
    AdminProductlistComponent,
    AcccoutlistComponent,
    PagenotfoundComponent,
    ProductAddComponent,
    ProductEditComponent,
    CatelistComponent,
    CateAddComponent,
    CateEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
