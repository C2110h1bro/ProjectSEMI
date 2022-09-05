import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  product: any = [];

  constructor(private productService: ProductService, private cartSevice: CartService, private route: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      if (data) {
        this.product = data;
      }
    })
  }

  addToCart(product: any) {
    // console.log(product);
    this.cartSevice.add(product);
    this.route.navigate(['/cart']);

  }
}
