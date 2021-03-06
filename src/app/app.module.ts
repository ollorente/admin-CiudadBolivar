import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersPage } from '../pages/users/users';
import { DashBoardPage } from '../pages/dash-board/dash-board';
import { SettingsPage } from '../pages/settings/settings';
import { ProductsPage } from '../pages/products/products';
import { CommentsPage } from '../pages/comments/comments';
import { TransactionsPage } from '../pages/transactions/transactions';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login';
import { CountryServiceProvider } from '../providers/country-service/country-service';
import { CountryPage } from '../pages/country/country';

@NgModule({
  declarations: [
    MyApp,
    DashBoardPage,
    UsersPage,
    SettingsPage,
    ProductsPage,
    CommentsPage,
    TransactionsPage,
    LoginPage,
    SignUpPage,
    CountryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashBoardPage,
    UsersPage,
    SettingsPage,
    ProductsPage,
    CommentsPage,
    TransactionsPage,
    LoginPage,
    SignUpPage,
    CountryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    CountryServiceProvider
  ]
})
export class AppModule {}
