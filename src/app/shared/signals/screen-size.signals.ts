import { HostListener, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ScreenSizeSignals {
    screen = signal<number>(1024);
}