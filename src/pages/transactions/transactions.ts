import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  items;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: UserServiceProvider
  ) {}

  ionViewDidLoad() {
    this.proveedor.getTransactions().subscribe(
      (data) => {this.items = data;},
      (error) => {console.log(error);}
    )
  }
}
