import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { UserServiceProvider } from "../../providers/user-service/user-service";

@Component({
  selector: "page-comments",
  templateUrl: "comments.html"
})
export class CommentsPage {
  items;
  authServiceProvider: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserServiceProvider: UserServiceProvider
  ) {}

  ionViewDidLoad() {
    this.getComments();
  }

  getComments() {
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
