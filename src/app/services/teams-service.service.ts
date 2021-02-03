import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {
  baseAPIUrl:string = "http://localhost:8081/";
  constructor(private http: HttpClient) { }
  getPlayersList(){
    return this.http.get(this.baseAPIUrl+"players");
  }
  createTeam(data){
    return this.http.post(this.baseAPIUrl+"create-team",data);
  }
  addPlayersToTeam(data){
    return this.http.post(this.baseAPIUrl+"add-players",data);
  }
}
