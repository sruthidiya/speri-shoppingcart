import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductoperationGuard } from './productoperation.guard';
import { ProductsComponent } from './products/products.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'Login', component:LoginComponent },
  { path:'updateproduct/:id', component:UpdateComponent },
  { path:'Logout', component:LogoutComponent },
  { path:'Admin', component:AdminComponent },
  { path:'addproduct', component:AddproductComponent },
  { path:'Products', component:ProductsComponent , canActivate : [ProductoperationGuard]},
  { path : 'Cart',component : CartComponent  , canActivate : [ProductoperationGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
