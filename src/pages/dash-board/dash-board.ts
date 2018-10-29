import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-dash-board',
  templateUrl: 'dash-board.html',
})
export class DashBoardPage {
  items;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: UserServiceProvider
  ) {}

  ionViewDidLoad() {
    this.proveedor.getDashBoard().subscribe(
      (data) => {this.items = data;},
      (error) => {console.log(error);}
    )
  }
}
