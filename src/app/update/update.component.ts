import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formData! : FormGroup; 
  data : any ;
  submitted: boolean = false;
  productDetails? : Product[];
  productDetail? : any ;
 ProductId? : number = 0; 
  ProductName? : string = ""; 
  ProductDescription? : string = ""; 
  ProductPrice? : number = 0; 
  Name:string="";
  isDisabled? : boolean = true;
  name? : string; 
  productid?:number;
  viewDisabled? : boolean = false;
  private routeSub: Subscription = new Subscription;
  constructor(private productsService : ProductService,private route: ActivatedRoute) {
    this.GetProductDetail();
   }

  ngOnInit(): void {
   
   
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  

   onCustomerIdValueChanged(event : any){
   this.productDetail.ProductId= this.ProductId;
   
  }

   onCustomerNameValueChanged(event : any){
    this.productDetail.ProductName = this.ProductName;
   
   }

   onCityValueChanged(event : any){
     this.productDetail.ProductDescription = this.ProductDescription;
   
   }

   onGradeValueChanged(event : any){
    this.productDetail.ProductPrice = this.ProductPrice;
   
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
   
   updatep(){
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      let product=Number(params['id'])
      console.log(product)
     
        this.productsService.GetProductById(product).subscribe(
          data => {
            this.data=data;
            console.log(data)
            this.productDetail = this.data[0].productDetail;
            this.ProductId = this.data[0].ProductId;
            this.ProductName = this.data[0].ProductName; 
            this.ProductDescription=this.data[0].ProductDescription;
            this.ProductPrice =this. data[0].ProductPrice;
           
          }
        );
        this.viewDisabled = true;
      
    
  });
   }
   UpdateProductDetails(product : any){
    let productData :Product= {
      ProductId : this.ProductId,
        ProductName : this.ProductName, 
        ProductPrice : this.ProductPrice, 
        ProductDescription:this.ProductDescription
       
    }; 
    
    this.productsService.UpdateProductId(productData).subscribe(
      data => {
        this.GetProductDetail();
      }
    );
    }

  
  }
  

   
  