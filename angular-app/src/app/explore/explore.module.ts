import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { ExploreComponent } from './explore.component';
import { ExploreRoutes } from './explore.routing';

@NgModule({
    imports: [
        RouterModule.forChild(ExploreRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [ExploreComponent]
})

export class ExploreModule {}
