import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {
  ModalComponent
} from '../layout/bs-component/components';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [SignupComponent,ModalComponent]
})
export class SignupModule { }
