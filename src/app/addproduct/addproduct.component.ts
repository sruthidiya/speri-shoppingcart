import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  formData! : FormGroup; 
  
  submitted: boolean = false;
  productDetails? : Product[];
  customerDetail? : any ;
 ProductId? : number = 0; 
  ProductName? : string = ""; 
  ProductDescription? : string = ""; 
  ProductPrice? : number = 0; 
  Name:string="";
  isDisabled? : boolean = true;
  name? : string; 

  viewDisabled? : boolean = false;
  
  constructor(private productsService : ProductService) {
    this.GetProductDetail();
   }

  ngOnInit(): void {
   
  }

  

   onCustomerIdValueChanged(event : any){
   this.customerDetail.CustomerId = this.ProductId;
   
  }

   onCustomerNameValueChanged(event : any){
    this.customerDetail.CustomerName = this.ProductName;
   
   }

   onCityValueChanged(event : any){
     this.customerDetail.City = this.ProductDescription;
   
   }

   onGradeValueChanged(event : any){
    this.customerDetail.Grade = this.ProductPrice;
   
   }
   InsertCustomerData(){
    let product : Product = {
      ProductId : this.ProductId, 
     ProductName : this.ProductName, 
     ProductDescription : this.ProductDescription,
     ProductPrice : this.ProductPrice, 
      
    }; 
    this.productsService.InsertEmployee(product).subscribe(
      data => { 
     
        this.GetProductDetail();
        
      }
    );
  }
  
   
   
  GetProductDetail(){
   this.productsService .GetProductDetail().subscribe( 
     (data) => {
       this.productDetails = data;
       console.log(data);
      }
     );
   }
   onReset(){
    this.submitted = false; 
    this.formData.reset();
   }
   
  }
   
  