import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { ProductlistComponent } from './Admin/productlist/productlist.component';
import { HomeComponent } from './Admin/home/home.component';
import { CatelistComponent } from './Admin/catelist/catelist.component';
import { CateAddComponent } from './Admin/cate-add/cate-add.component';
import { ProductAddComponent } from './Admin/product-add/product-add.component';
import { AcccoutlistComponent } from './Admin/acccoutlist/acccoutlist.component';
import { PagenotfoundComponent } from './Admin/pagenotfound/pagenotfound.component';
import { CateEditComponent } from './Admin/cate-edit/cate-edit.component';
import { ProductEditComponent } from './Admin/product-edit/product-edit.component';
>>>>>>> a8a9809a65c59729c6ddf6b0b9eb7f4934a209f0
=======
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

>>>>>>> 15de6e9f7140e391c3ad3db13f7fc86e8accf1cf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductlistComponent,
    HomeComponent,
    CatelistComponent,
    CateAddComponent,
    ProductAddComponent,
    AcccoutlistComponent,
    PagenotfoundComponent,
    CateEditComponent,
    ProductEditComponent,
=======
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    ProductlistComponent,
    ProductDetailComponent,

>>>>>>> 15de6e9f7140e391c3ad3db13f7fc86e8accf1cf
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
<<<<<<< HEAD

=======
  
>>>>>>> 15de6e9f7140e391c3ad3db13f7fc86e8accf1cf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
