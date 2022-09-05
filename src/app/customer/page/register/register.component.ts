import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData = new UntypedFormGroup({
    userName: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    password: new UntypedFormControl('')
  })

  constructor(private accService: AccountService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.accService.register(this.formData.value).subscribe((data) => {
      if (data) {
        this.route.navigate(['/login']);
      }
    })
    console.log(this.formData.value)
  }
}
