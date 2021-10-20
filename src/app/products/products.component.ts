import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList : any ;
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
  constructor(private productService : ProductService,private cartservice:CartService) {
    this.GetProductDetail();
   }
   ngOnInit(): void {
     
  }

   GetProductDetail(){
    this.productService .GetProductDetail().subscribe( 
      (data) => {
        this.productDetails = data;
        console.log(data);
       }
      );
    }
    sendData()
  {
    let product : Product = {
     
     ProductName : this.ProductName, 
     ProductDescription : this.ProductDescription,
     ProductPrice : this.ProductPrice, }
    this.parentFunction.emit(product);
  }
  addtocart(item: any){
    this.cartservice.addtoCart(item);
  }
  
}



 

