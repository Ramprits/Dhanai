import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FruitPage } from './fruit';

@NgModule({
  declarations: [
    FruitPage,
  ],
  imports: [
    IonicPageModule.forChild(FruitPage),
  ],
})
export class FruitPageModule {}
