import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CountryServiceProvider {

  constructor(public http: HttpClient) {
    console.log("Hello ListServiceProvider Provider");
  }

  getData(uri) {
    let jwt = localStorage.getItem("jwt");
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt
    });

    const options = { headers: headers };

    let apiUrl = localStorage.getItem("apiUrl");
    return this.http.get(apiUrl + uri, options);
  }

  postData(data, type) {
    let jwt = localStorage.getItem("jwt");
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt
    });

    const options = { headers: headers };

    let json = JSON.stringify(data);
    console.log(json);
    let apiUrl = localStorage.getItem("apiUrl");
    return this.http.post(apiUrl + type, json, options);
  }
}
