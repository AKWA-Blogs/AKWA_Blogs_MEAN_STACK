import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { ChannelComponent } from './channel.component';
import { ChannelRoutes } from './channel.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ChannelRoutes),
        FormsModule
    ],
    declarations: [ChannelComponent]
})

export class ChannelModule {}
