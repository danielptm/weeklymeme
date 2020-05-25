import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractHttp} from "./abstract-http";

@Injectable({
  providedIn: 'root'
})
export class MemeHttpService extends AbstractHttp {

  constructor(http: HttpClient) {
    super(http);
  }
}
