import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../shared/review.service";
import {ActivatedRoute} from "@angular/router";
import {Reviews} from "../shared/reviews.model";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  providers: [ReviewService]
})
export class ReviewComponent implements OnInit {
  selectedGameReview: Reviews;
  gameId: any;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {}

  getSelectedGameReviews(){
    this.gameId = this.route.snapshot.params['id'];
    this.reviewService.getReviewById(this.gameId).subscribe(reviews => this.selectedGameReview = reviews[0]);
    console.log("selectedGameReview");
    console.log(this.selectedGameReview);
  }

  ngOnInit() {
    this.getSelectedGameReviews();
    console.log(this.gameId);
  }

}
