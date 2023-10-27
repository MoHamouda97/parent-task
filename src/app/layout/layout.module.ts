import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './common/footer/footer.component';
import { LogoutComponent } from './common/logout/logout.component';


@NgModule({
    declarations: [
        LayoutComponent,
        LogoutComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
    ],
    exports: []
})
export class LayoutModule {}
