import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  err: any;
  formData = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl('')
  })
  constructor(private accService: AccountService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // console.log(this.formData.value);
    // this.accService.getAll().subscribe(data => {
    //   console.log(data);
    // })
    this.checkLoginAdmin(this.formData.value)
    // console.log(this.checkAdmin);
  }
  checkLoginAdmin(data: any): void {
    // var check = false;

    this.accService.getAll().subscribe(datas => {
      // this.checkAdmin = datas.find((item: any) => {
      //   item.email == data.email && item.password == data.password && item.role == 'admin'
      // })
      var check = datas.find((item: any) => item.email == data.email && item.password == data.password && item.role === 'admin');
      if (check) {
        localStorage.setItem('adminLogin', JSON.stringify(check));
        this.route.navigate(['/admin'])
      } else {
        this.err = 'sai thong tin dang nhap'
      }
    })

  }
}
