import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeamsServiceService } from '../services/teams-service.service';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.scss']
})
export class CreateTeamsComponent implements OnInit {
  myForm:any;
  myForm2:any;
  players:any = [];
  teamOne:any = false;
  teamTwo:any = false;
  teamOneArr:any = [];
  teamTwoArr:any = [];
  teamOneCompleted: boolean = false;
  teamTwoCompleted: boolean = false;
  constructor(private teamService: TeamsServiceService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({          
      'name':new FormControl(null,Validators.required)
    });
    this.myForm2 = new FormGroup({          
      'name':new FormControl(null,Validators.required)
    });
    this.teamService.getPlayersList().subscribe((response:any)=>{
      this.players = response.data;
    },(error:any)=>{
      console.log(error);
    })
  }
  createAndAddPlayers(form: any,f_type: any){
    var data = {
      name: form.controls.name.value
    }
    this.teamService.createTeam(data).subscribe((response:any)=>{
      if( f_type == 1){
        this.teamOne = response.id;
      } else {
        this.teamTwo = response.id;
      }
    },(error:any)=>{
      console.log(error);
    })
  }
  addPlayers2Team(id, playerList, type){
    var data = [];
    playerList.map(function(val){
      data.push({
        teamId: id,
        playerId: val._id,
        playerName: val.name
      });
    });
    this.teamService.addPlayersToTeam(data).subscribe((response)=>{
      if( type == 1 ){
        this.teamOneCompleted = true;
      } else {
        this.teamTwoCompleted = true;
      }
      if( this.teamOneCompleted && this.teamTwoCompleted){
        window.location.reload();
      }
    },(error)=>{
      console.log(error);
    })
  }
  addTeamPlayer(player, tType){
    if( tType == 1 ){
      var existTeam2 = this.teamTwoArr.filter(function(val){
        return player._id == val._id;
      })
      if( existTeam2.length > 0 ){
        alert("This player already selected team 2");
        return;
      }
      var existTeam = this.teamOneArr.filter(function(val){
        return player._id == val._id;
      })
      if( existTeam.length > 0 ){
        this.findAndRemoveSelectionInArray(this.teamOneArr,player._id);
        return;
      }
      if( this.teamOneArr.length+1 > 11){
        alert("You have select only 11 players at the team")
      } else {
        this.teamOneArr.push(player);
      }
    } else {
      var existTeam1 = this.teamOneArr.filter(function(val){
        return player._id == val._id;
      })
      if( existTeam1.length > 0 ){
        alert("This player already selected team 1");
        return;
      }
      var existTeam = this.teamTwoArr.filter(function(val){
        return player._id == val._id;
      })
      if( existTeam.length > 0 ){
        this.findAndRemoveSelectionInArray(this.teamTwoArr,player._id);
        return;
      }
      if( this.teamTwoArr.length+1 > 11){
        alert("You have select only 11 players at the team")
      } else {
        this.teamTwoArr.push(player);
      }
      
    }
  }
  isSelectedPlayer(id, type){
    if(type == 1){
      var existPlayer = this.teamOneArr.filter(function(val){
        return val._id == id;
      });
      return existPlayer.length > 0 ? 'active' : '';
    } else {
      var existPlayer = this.teamTwoArr.filter(function(val){
        return val._id == id;
      });
      return existPlayer.length > 0 ? 'active' : '';
    }
  }
  findAndRemoveSelectionInArray(list, id){
    for (var i = list.length - 1; i >= 0; --i) {
        if (list[i]._id == id) {
          list.splice(i, 1);
        }
    }
  }
}
