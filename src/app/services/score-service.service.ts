import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {
  baseAPIUrl:string = "http://localhost:8081/";
  constructor(private http: HttpClient) { }
  getAllTeams(){
    return this.http.get(this.baseAPIUrl+"teams");
  }
  listTeamPlayers(id){
    return this.http.get(this.baseAPIUrl+"team/"+id);
  }
  submitScores(data){
    return this.http.post(this.baseAPIUrl+"submit-scores",data);
  }
  getSubmittedScores(id){
    return this.http.get(this.baseAPIUrl+"match-scores/"+id);
  }
}
