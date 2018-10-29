import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  items;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: UserServiceProvider
  ) {}

  ionViewDidLoad() {
    this.proveedor.getSettings().subscribe(
      (data) => {this.items = data;},
      (error) => {console.log(error);}
    )
  }
}
