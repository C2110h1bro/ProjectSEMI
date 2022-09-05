import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  listCate: any = [];
  image: string = '';
  formData = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    price: new UntypedFormControl(''),
    category_id: new UntypedFormControl(''),
    image: new UntypedFormControl('')
  });
  constructor(private categoryService: CategoryService, private proService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.listCate = data;
    })
  }
  changeImage(event: any) {
    const reader = new FileReader();
    const file = event.target.files;
    // console.log(file);
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      // console.log(reader.result)
      this.image = reader.result as string;
    }
    // console.log(event)
  }
  onSubmit() {
    this.formData.patchValue({
      image: this.image
    });
    // console.log(this.formData.value)
    this.proService.addPro(this.formData.value).subscribe((data) => {
      if (data) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
        this.route.navigate(['admin/product']);
      }
    })
  }

}
