import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestroomsTabPage } from './restrooms-tab.page';

const routes: Routes = [
  {
    path: '',
    component: RestroomsTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RestroomsTabPage]
})
export class RestroomsTabPageModule {}
