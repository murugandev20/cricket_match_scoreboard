import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreServiceService } from '../services/score-service.service';

@Component({
  selector: 'app-view-score-board',
  templateUrl: './view-score-board.component.html',
  styleUrls: ['./view-score-board.component.scss']
})
export class ViewScoreBoardComponent implements OnInit {
  matchId:any;
  matchDetails:any = [];
  constructor(private route: ActivatedRoute, private scoreService: ScoreServiceService) {
    this.route.paramMap.subscribe(params => {
      this.matchId = params.get("id");
      this.getMatchScore();
    })
   }

  ngOnInit(): void {
    
  }
  getMatchScore(){
    console.log(this.matchId, " this.matchId ");
    this.scoreService.getSubmittedScores(this.matchId).subscribe((response:any)=>{
      this.matchDetails = response.data;
      this.matchDetails = this.matchDetails[0];
    },(error)=>{
      console.log(error);
    })
  }
}
