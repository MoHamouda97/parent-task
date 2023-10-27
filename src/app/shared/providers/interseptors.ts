import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "src/app/core/auth/interceptors/error.interceptor";
import { LoadingInterceptor } from "src/app/core/auth/interceptors/loading.interceptor";

export const interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
    }
]