import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage, 
    children: [
      {
        path: 'directionstab', 
        loadChildren: '../directions-tab/directions-tab.module#DirectionsTabPageModule'
      },
      {
        path: 'restroomstab', 
        loadChildren: '../restrooms-tab/restrooms-tab.module#RestroomsTabPageModule'
      }, 
      {
        path: 'directionstab/addrestroom',
        loadChildren: '../add-restroom/add-restroom.module#AddRestroomPageModule'
      }
    ]
  }, 
  {
	path: '', 
	redirectTo: 'directions/directionstab', 
    pathMatch: 'full'	
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
