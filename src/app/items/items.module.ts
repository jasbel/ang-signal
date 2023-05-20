import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ItemsComponent } from './items.component';


@NgModule({
  declarations: [
    ItemsComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
