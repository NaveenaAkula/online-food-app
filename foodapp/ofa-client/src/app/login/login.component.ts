import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService, user } from './login.service';
import { jwtUser } from '../login/jwtUser.model'
import { RestHeadersService } from '../rest-headers.service';
import { CustomerDetailsService } from '../customer/customer-details/customer-details.service';
import { CustomerDetials } from '../customer/customer-details/customer-details.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
    private restHeaderService: RestHeadersService,
    private customerDetails: CustomerDetailsService) { }

  display: string = 'Login';
  customer: CustomerDetials;

  ngOnInit() {
  }

  hide= true;

  openLogin(){
    this.display = 'Login';
    this.loginFormGroup.updateValueAndValidity();
    this.loginFormGroup.reset();
    // this.loginFormGroup.validator.
  }

  openSignUp() {
    this.display = 'SignUp';
    this.signUpFormGroup.reset();
  }

  loginFormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  signUpFormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  createUser(user: CreateUser) {
    this.loginService.createUser(user.password, user.userName, user.firstName, user.lastName, user.email).subscribe(
      data => {
        console.log('user has been successfully added ', data);
        let userDetails: user[] = data.filter(data => { return (data.email && data.email == user.email)})
        let userId = userDetails.length > 0 ? userDetails[0].id : '';
        console.log('==============> userId ', userId);
        this.loginService.createCustomer(user.email, user.firstName, user.lastName, user.phone, userId).subscribe(
          data => {
            console.log('customer has been successfully added, ', data);
            this.openLogin();
          },
          error => {console.log('customer addition fialed, ', error)}
      )},
      error => {console.log('user login failed ',error)}
    )

    

    
  }

  Login() {
    this.loginService.login(this.loginFormGroup.get('userName').value, this.loginFormGroup.get('password').value).subscribe(
      (data) =>{
        console.log('data from the service ', data)
        if(data && data.token) {
          this.restHeaderService.setHttpHeaders(data.token);
          let jwtUser: jwtUser = JSON.parse(atob(data.token.split('.')[1]));
          let email = jwtUser.email;
          let user_id = jwtUser.user_id;
          console.log('------------------> ', jwtUser.username);
          console.log('------------------> ', data.token);
          if("instructor" == jwtUser.username) {
            this.loginService.getCustomerByUserId(user_id).subscribe(data => {
              console.log('--------------------><------------------, ', data);
              this.customer = data;
              this.display = 'SuperUser';
            },error => {
              this.display = 'SuperUser';
              console.log('Customer search failed');
            });
          } else {
            this.loginService.getCustomerByUserId(user_id).subscribe(data => {
              console.log('--------------------><------------------, ', data);
              this.customer = data;
              this.display = 'Customer';
            },error => {
              this.display = 'Customer';
              console.log('Customer search failed');
            });
          }
          console.log('dispaly, ', this.display)
        }
      }, error => {
        this.display = 'Login';
      }
    )
  }

}

export interface CreateUser {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
