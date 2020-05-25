import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class AbstractHttp {
  private http: HttpClient;
  protected constructor(http: HttpClient) {
    this.http = http;
  }
  get(url: string): Observable<any> {
    return this.http.get(url);
  }
}
