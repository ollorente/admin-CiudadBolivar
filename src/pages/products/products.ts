import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { UserServiceProvider } from "../../providers/user-service/user-service";

@Component({
  selector: "page-products",
  templateUrl: "products.html"
})
export class ProductsPage {
  items;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: UserServiceProvider
  ) {}

  ionViewDidLoad() {
    this.proveedor.getProducts().subscribe(
      (data) => {this.items = data;},
      (error) => {console.log(error);}
    )
  }
}
