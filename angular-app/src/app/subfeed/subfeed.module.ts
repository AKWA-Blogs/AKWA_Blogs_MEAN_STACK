import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { SubfeedComponent } from './subfeed.component';
import { SubfeedRoutes } from './subfeed.routing';

@NgModule({
    imports: [
        RouterModule.forChild(SubfeedRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [SubfeedComponent]
})

export class SubfeedModule {}
