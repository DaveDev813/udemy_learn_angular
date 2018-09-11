import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './common/item-list/item-list.component';
import { ItemComponent } from './common/item/item.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ItemDetailComponent } from './common/item-detail/item-detail.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    RecipeBookComponent,
    ItemDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
