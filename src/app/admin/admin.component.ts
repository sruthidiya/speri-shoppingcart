import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productDetails? : Product[];
  productDetail? : any ;
 ProductId? : number = 0; 
  ProductName? : string = ""; 
  ProductDescription? : string = ""; 
  ProductPrice? : number = 0; 
  
  isDisabled? : boolean = true;
  name? : string; 
  viewDisabled? : boolean = false;
  @Input() valueChild: any;
  @Output() parentFunction: EventEmitter<any>=new EventEmitter();
 
  constructor(private ProductService :ProductService,private route: ActivatedRoute) {
    this.GetProductDetail();
    
   }

  ngOnInit(): void {
   
   
  }
  
  GetProductDetail(){
   this.ProductService .GetProductDetail().subscribe( 
     (data) => {
       this.productDetails = data;
       console.log(data);
      }
     );
   }
   UpdateProductDetails(product : any){
    let productData :Product= {
      ProductId : this.ProductId,
        ProductName : this.ProductName, 
        ProductPrice : this.ProductPrice, 
       
       
    }; 
    
    this.ProductService.UpdateProductId(productData).subscribe(
      data => {
        this.GetProductDetail();
      }
    );
    }
    DeleteProductDetails(productId : any){
      this.ProductService.DeleteProduct(productId).subscribe(
        data => {
          this.GetProductDetail();
        }
      );
    }
    GetProductDetailsById(productid : any){
      this.ProductService.GetProductById(productid).subscribe(
        data => {
          this.productDetail = data;
          this.ProductId = data.ProductId;
          this.ProductName = data.ProductName ; 
          this.ProductDescription = data.ProductDescription; 
          this.ProductPrice = data.ProductPrice;
          
        }
      );
      this.isDisabled = false;
    }
    
      
    }
  
  


