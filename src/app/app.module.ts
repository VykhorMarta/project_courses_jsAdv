import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemService } from './services/item.service';
import { ItemComponent } from './list-items/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
