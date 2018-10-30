import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { DashBoardPage } from "../dash-board/dash-board";
import { CountryServiceProvider } from "../../providers/country-service/country-service";

@Component({
  selector: "page-country",
  templateUrl: "country.html"
})
export class CountryPage {
  items

  constructor(public navCtrl: NavController, public navParams: NavParams, public countryServiceProvider: CountryServiceProvider, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CountryPage");
    this.countryServiceProvider.getData("countries").subscribe(
      data => {
        console.log("listas " + data);
        for (let i in data) {
          this.items.push(data[i]);
        }
      },
      error => {
        this.showError(error);
      }
    );
  }

  showError(error) {
    console.log(error);
    this.alertCtrl.create({
      title: "Oppps",
      subTitle: "hubo un error con las listas",
      buttons: ["Dismiss"]
    })
    .present();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DashBoardPage, {
      item: item
    });
  }

  onEnterList(value) {
    this.countryServiceProvider.postData({ name: value }, "countries").subscribe(
      list => this.items.push({ id: list["id"], name: list["name"] }),
      err => this.showError(err)
    );
  }
}
