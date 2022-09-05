import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listCart: any = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCart = this.cartService.items;
  }

  updateCart(product: any, e: any): void {


    let qty = product.quantity;
    if (e.target.id === 'tang') {
      qty++;
    }
    if (e.target.id === 'giam') {
      qty--;
    }

    this.cartService.update(product, qty);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
