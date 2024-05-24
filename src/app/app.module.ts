import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { PopularDealsComponent } from './popular-deals/popular-deals.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroAreaComponent,
    PopularDealsComponent,
    AllCategoryComponent,
    CallToActionComponent,
    FooterComponent,
 

  ],
  imports: [
    BrowserModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
