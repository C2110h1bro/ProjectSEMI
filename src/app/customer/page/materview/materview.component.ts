import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materview',
  templateUrl: './materview.component.html',
  styleUrls: ['./materview.component.css']
})
export class MaterviewComponent implements OnInit {

  inFor: any;
  constructor() { }

  ngOnInit(): void {
    let dataAcc: any = localStorage.getItem('acc');
    this.inFor = JSON.parse(dataAcc);
    // console.log('ok')
  }
  onActivate(e: any) {

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
