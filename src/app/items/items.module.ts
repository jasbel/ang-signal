import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ItemsComponent } from './items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ItemsComponent, ProductPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
    SharedModule,
  ],
})
export class ItemsModule {}
