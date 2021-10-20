import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username? : string; 
  password? : string; 
  formData! : FormGroup; 
  submitted: boolean = false;

  constructor( private authService : AuthService , private router : Router ,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      username : new FormControl("username"),
      password : new FormControl("password")
      
    });
    this.formData = this.formBuilder.group({
      username  : ['',Validators.required],
      password: ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      title : ['',Validators.required]
    })
  }

  onClickSubmit(data : any){
    this.username = data.username; 
    this.password = data.password; 
   
    
    
  
    this.authService.login(this.username,this.password).subscribe(
      data => {
        console.log("Is Login success " + data);
        if(data){
          this.router.navigate(['/Products']);
        }
      }
    );
   
  }
  get getForm(){
    return this.formData.controls;
  }
  onReset(){
    this.submitted = false; 
    this.formData.reset();
   }
   

}

