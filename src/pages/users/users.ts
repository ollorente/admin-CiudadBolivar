import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { UserServiceProvider } from "../../providers/user-service/user-service";

@Component({
  selector: "page-users",
  templateUrl: "users.html"
})
export class UsersPage {
  items;
  authServiceProvider: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserServiceProvider: UserServiceProvider
  ) {}

  ionViewDidLoad() {
    this.getUsers();
  }

  getUsers() {
    this.UserServiceProvider.getData(this.items, "users").subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
