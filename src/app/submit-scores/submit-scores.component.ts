import { Component, OnInit } from '@angular/core';
import { ScoreServiceService } from '../services/score-service.service';

@Component({
  selector: 'app-submit-scores',
  templateUrl: './submit-scores.component.html',
  styleUrls: ['./submit-scores.component.scss']
})
export class SubmitScoresComponent implements OnInit {
  team1Select:any;
  team2Select:any;
  teamList:any = [];
  teamTwoPlayers: any = [];
  teamOnePlayers: any = [];
  name:any="";
  teamOneScores:any = [];
  teamTwoScores:any=[];
  teamOneWickets:any=0;
  teamTwoWickets:any = 0;
  scoreId:any = null;
  constructor(private scoreService: ScoreServiceService) { }

  ngOnInit(): void {
    this.scoreService.getAllTeams().subscribe((response:any)=>{
      this.teamList = response.data;
    },(error:any)=>{
      console.log(error);
    });
  }
  listSelectedTeamPlayers(team){
    if( team == 1 ){
      this.scoreService.listTeamPlayers(this.team1Select).subscribe((response: any)=>{
        this.teamOnePlayers = response.data;
      },(error:any)=>{
        console.log(error);
      })
    } else {
      this.scoreService.listTeamPlayers(this.team2Select).subscribe((response: any)=>{
        this.teamTwoPlayers = response.data;
      },(error:any)=>{
        console.log(error);
      });
    }
  }
  getScore(event,type,player){
    var score = event.target.value;
    if( type == 1){
      // console.log(,type,player);
    } else {

    }
  }
  addScoresToPlayers(){
    var team1SelectID = this.team1Select;
    var team2SelectID = this.team2Select;
    var team1Det = this.teamList.filter(function(val){
        return val._id == team1SelectID;
    });
    var team2Det = this.teamList.filter(function(val){
        return val._id == team2SelectID;
    });
    // this.teamOnePlayers.map(function(val,i){
    //   this.teamOneScores[i]
    // });
    var team1Scores = this.teamOneScores.reduce((a, b) => a + b, 0);
    var team2Scores = this.teamTwoScores.reduce((a, b) => a + b, 0);
    var data = {match_name:this.name,team_1:[{name: team1Det[0].name, totalScores: team1Scores,totalWickets: this.teamOneWickets}], team_2:[{name: team2Det[0].name, totalScores: team2Scores, totalWickets: this.teamTwoWickets}]}    
    this.scoreService.submitScores(data).subscribe((response:any)=>{
      this.scoreId = response.id;
      window.scroll(0,0);
    },(error)=>{
      console.log(error);
    })
  }
}
