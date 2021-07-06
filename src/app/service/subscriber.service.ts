import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { Subscriber } from '../model/subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {


  baseURL:string="http://localhost:5000/";
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.baseURL+ "AllSubscribers");

  }
  saveSubscriber(subscriber:Subscriber):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
     return this.http.post(this.baseURL+"Subscribers", JSON.stringify(subscriber), {headers: headers});
  }

  deleteSubscribers(id_subscriber:number):Observable<any>{
    return this.http.delete(this.baseURL + "Subscribers/"+id_subscriber);
  }

  getServices(){
    return this.http.get(this.baseURL+"AllServices");
  }
  
  
}
