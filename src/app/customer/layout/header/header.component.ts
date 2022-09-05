import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inFor: any;
  cart: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let dataAcc: any = localStorage.getItem('acc');
    this.inFor = JSON.parse(dataAcc);
    this.cart = this.cartService.items.length;
    this.cartService.totalCart.subscribe((data) => {
      this.cart = data;
    })
  }

}
