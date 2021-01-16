import { Injectable } from '@angular/core';
import{ environment} from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataStudentService {
private apiUrl:string;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}
  constructor( private httpClient:HttpClient) {
    this.apiUrl=environment.apiUrl;

   }
   public getDataLogs(subject_matter:string){
     return this.httpClient.get(this.apiUrl+subject_matter,this.httpOptions);
   }
}
