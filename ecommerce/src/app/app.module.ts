import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './common/item-list/item-list.component';
import { ItemComponent } from './common/item/item.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ItemDetailComponent } from './common/item-detail/item-detail.component';
import { HeaderComponent } from './header/header.component';
import { ItemEditComponent } from './common/item-edit/item-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    RecipeBookComponent,
    ItemDetailComponent,
    HeaderComponent,
    ItemEditComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
