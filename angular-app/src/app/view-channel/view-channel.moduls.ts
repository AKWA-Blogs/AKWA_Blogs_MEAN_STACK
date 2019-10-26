import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { ViewChannelComponent } from './view-channel.component';
import { ViewChannelRoutes } from './view-channel.routing';

@NgModule({
    imports: [
        RouterModule.forChild(ViewChannelRoutes ),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [ViewChannelComponent]
})

export class ViewChannelModule {}
