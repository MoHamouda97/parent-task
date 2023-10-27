import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenSizeSignals } from './shared/signals/screen-size.signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'parent-task';

  constructor(private screen: ScreenSizeSignals) {}

  ngOnInit(): void {
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screen.screen.set(window.innerWidth)
  }  
}
