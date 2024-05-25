import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    HomeComponent,
    CatelistComponent,
    CateAddComponent,
    ProductAddComponent,
    AcccoutlistComponent,
    PagenotfoundComponent,
    CateEditComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
