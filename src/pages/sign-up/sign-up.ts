import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-sign-up",
  templateUrl: "sign-up.html"
})
export class SignUpPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userServiceProvider: UserServiceProvider,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
  }

  userData = {
    phone: "",
    email: "",
    password: "",
    Password_confirmation: "",
    type_user_id: 5, // que es un usuario comun
    active: true,
    lock: false
  };

  signUp() {
    this.userServiceProvider.postData(this.userData, "users").subscribe(
      data => {
        this.showNotification(data);
        this.navCtrl.push(LoginPage);
      },
      err => {
        console.log(err);
        this.showError(err);
      }
    );
  }

  showError(err): any {
    console.log(err);
    this.alertCtrl.create({
      title: "Registro Fallido",
      subTitle: err,
      buttons: ["Ok"]
    })
    .present();
  }

  showNotification(data): any {
    console.log(data);
    this.alertCtrl.create({
      title: "Bienvenido " + data["phone"],
      subTitle: "Ahora vamos a salvar el planeta. Inicia sesión",
      buttons: ["Dismiss"]
    })
    .present();
  }
}
