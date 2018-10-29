import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserServiceProvider {
  constructor(public http: HttpClient) {}

  // getUsers() {
  //   return this.http.get("https://jsonplaceholder.typicode.com/users");
  // }

  // getComments() {
  //   return this.http.get("https://jsonplaceholder.typicode.com/users");
  // }

  getProducts() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getTransactions() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getDashBoard() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getSettings() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getData(data, url) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    const options = { headers: headers };
    let json = JSON.stringify(data);
    let apiUrl = localStorage.getItem("apiUrl");
    let completeUrl = apiUrl + url;
    return this.newMethod(completeUrl, json, options);
  }

  private newMethod(completeUrl: string, json: string, options: { headers: HttpHeaders; }) {
    return this.http.get(completeUrl, json, options);
  }
}
