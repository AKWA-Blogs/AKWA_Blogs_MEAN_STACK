import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { ProfileComponent } from './profile.component';
import { ProfileRoutes } from './profile.routing';

@NgModule({
    imports: [
        RouterModule.forChild(ProfileRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [ProfileComponent]
})

export class ProfileModule {}
