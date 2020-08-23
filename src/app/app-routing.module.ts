import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule",
  },
  {
    path: "details/:id",
    loadChildren: "./details/details.module#DetailsPageModule",
  },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "new-task",
    loadChildren: "./new-task/new-task.module#NewTaskPageModule",
  },
  { path: "cart-modal", loadChildren: "./pages/cart-modal/cart-modal.module" },
  {
    path: "checkout",
    loadChildren:"./checkout/checkout.module#CheckoutModule",
  },
  {
    path: 'pedidos',
    loadChildren: "./pedidos/pedidos.module#PedidosPageModule"
  }

  
  // { path: 'new-task-modal', loadChildren: './new-task-modal/new-task-modal.module#NewTaskModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
