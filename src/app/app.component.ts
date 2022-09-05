import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectBTL';
  onActivate(e: any) {

    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    })
  }
}
