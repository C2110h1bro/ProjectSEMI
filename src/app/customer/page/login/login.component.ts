import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(private accService: AccountService, private route: Router) { }
  formData = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl('')
  })
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.accService.login(this.formData.value).subscribe((data) => {
      // console.log(data);
      if (data[0]) {
        // console.log("đăng nhap thanh cong")
        // lưu vao localStoger
        localStorage.setItem('acc', JSON.stringify(data[0]));
        this.route.navigate(['/'])
      } else {
        // console.log("sai tt")
        this.error = 'Sai CMNR TTR'
      }
    })
  }

}
