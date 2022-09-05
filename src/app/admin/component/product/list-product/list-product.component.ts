import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listPro: any = [];
  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.getAllFromServie();
  }

  getAllFromServie(): void {
    this.proService.getAll().subscribe((data) => {
      this.listPro = data;
    })
  }

}
