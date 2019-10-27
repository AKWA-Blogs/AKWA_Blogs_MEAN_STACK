import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { ReadListComponent } from './readList.component';
import { ReadListRoutes } from './readList.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

@NgModule({
    imports: [
        RouterModule.forChild(ReadListRoutes),
        CommonModule,
        FormsModule,
        MaterialModule,
        TagInputModule,
        // BrowserAnimationsModule,
        NouisliderModule,
        SelectModule,
        ReactiveFormsModule


    ],
    declarations: [ReadListComponent]
})

export class ReadListModule {}
