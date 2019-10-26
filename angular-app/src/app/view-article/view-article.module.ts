import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { ViewArticleComponent } from './view-article.component';
import { ViewArticleRoutes } from './view-article.routing';

@NgModule({
    imports: [
        RouterModule.forChild(ViewArticleRoutes ),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [ViewArticleComponent]
})

export class ViewArticleModule {}
