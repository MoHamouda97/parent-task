import { NgModule } from '@angular/core';
import { common } from './modules/common';
import { interceptors } from './providers/interseptors';
import { components } from './components/components';

@NgModule({
    imports: [
        ...common,
        ...components
    ],
    exports: [
        ...common,
        ...components
    ],
    providers: [
        ...interceptors
    ]
})

export class SharedModule {}
