import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";

import { DashBoardPage } from "../dash-board/dash-board";
import { SignUpPage } from "../sign-up/sign-up";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import { UserServiceProvider } from "../../providers/user-service/user-service";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  credentials: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fB: FormBuilder,
    public userServiceProvider: UserServiceProvider,
    public alertCtrl: AlertController
  ) {
    this.credentials = this.fB.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: ["", Validators.required]
    });
  }

  ionViewDidLoad() {}

  login() {
    let userData = {
      auth: {
        email: this.credentials.value.email,
        password: this.credentials.value.password
      }
    };
    //console.log(this.credentials);
    //console.log(userData);
    this.userServiceProvider.postData(userData, "user_token").subscribe(
      data => {
        localStorage.setItem("user", JSON.stringify(data["user"]));
        localStorage.setItem("jwt", data["jwt"]);
        this.showNotification(data);
        this.navCtrl.setRoot(DashBoardPage);
      },
      err => {
        console.log(err);
        this.showError(err);
      }
    );
  }

  showError(err): any {
    let errors = {
      404: "No encontramos coincidencias"
    };
    this.alertCtrl
      .create({
        title: "Oppps",
        subTitle: errors[err.status],
        buttons: ["Dismiss"]
      })
      .present();
  }

  showNotification(data): any {
    console.log(data);
    this.alertCtrl
      .create({
        title: "Bienvenido " + data.user.phone,
        subTitle: "Ya puedes ver tus listas\n",
        buttons: ["Ok"]
      })
      .present();
  }

  goSignUp() {
    this.navCtrl.push(SignUpPage);
  }

  ionViewWillEnter() {
    let user = localStorage.getItem("user");
    let jwt = localStorage.getItem("jwt");
    if (user && jwt) {
      this.navCtrl.setRoot(DashBoardPage);
    }
  }
}
