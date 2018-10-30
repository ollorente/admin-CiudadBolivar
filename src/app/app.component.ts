import { Component, ViewChild } from "@angular/core";

import { Platform, MenuController, Nav } from "ionic-angular";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { DashBoardPage } from "../pages/dash-board/dash-board";
import { UsersPage } from "../pages/users/users";
import { SettingsPage } from "../pages/settings/settings";
import { ProductsPage } from "../pages/products/products";
import { CommentsPage } from "../pages/comments/comments";
import { TransactionsPage } from "../pages/transactions/transactions";
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: "DashBoard", component: DashBoardPage },
      { title: "Productos", component: ProductsPage },
      { title: "Usuarios", component: UsersPage },
      { title: "Comentarios", component: CommentsPage },
      { title: "Transacciones", component: TransactionsPage },
      { title: "Configuración", component: SettingsPage }
    ];

    // Conexión a rb-chapinero
    localStorage.setItem("apiUrl", "http://localhost:3000/");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    this.nav.setRoot(LoginPage);
  }

  public isThereASession(): boolean {
    return localStorage.getItem("jwt") != undefined;
  }
}
