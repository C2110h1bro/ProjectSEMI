import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];
  item: any = {};
  totalCart = new Subject<number>();
  constructor() {

    // kiem  tra trong localStogre co data hay chua
    let listCart: any = localStorage.getItem('cart');
    this.items = listCart ? JSON.parse(listCart) : [];


  }
  checkProductE(product: any): number {
    let id = this.items.findIndex((item: any) => {
      return item.id == product.id;
    })
    return id;
  }

  // phuong thuc them moi san pham vao gio hang

  add(product: any): void {


    // kiem tra xem san pham da co trong gio hang chua

    let index = this.checkProductE(product);
    // co roi
    if (index > -1) {

      this.items[index].quantity += 1; // them so luong
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    // chua co
    else {

      product.quantity = 1;
      this.items.push(product);
      // console.log(this.item)
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    this.totalCart.next(this.items.length)
  }

  // phuong thuc cap nhat 
  update(product: any, quantity: any): void {
    // cap nhat so luong o day
    let index = this.checkProductE(product);
    if (index > -1) {

      this.items[index].quantity = quantity; // them so luong
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    this.totalCart.next(this.items.length)
  }

  // xoa
  delete(product: any,): void {

  }
}
