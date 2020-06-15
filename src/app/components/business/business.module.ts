import { NgModule } from '@angular/core';
import { SupportModule } from './supports/support.module';
import { LandingModule } from './landing/landing.module';



@NgModule({
  declarations: [],
  imports: [
    LandingModule,
    SupportModule
  ]
})
export class BusinessModule { }
