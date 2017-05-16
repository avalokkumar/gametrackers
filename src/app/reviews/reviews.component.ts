import { Component, OnInit } from '@angular/core';
import {ReviewService} from "./shared/review.service";
import {Reviews} from "./shared/reviews.model";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [ReviewService]
})
export class ReviewsComponent implements OnInit {
  allReviews: Reviews[];
  count: number = 0;
  constructor(private reviewService: ReviewService) {
    console.log('Review Services Initialized');
  }

  ngOnInit() {
    this.getReviewDetails();
  }

  getReviewDetails(){
      this.reviewService.getAllReviews()
                            .subscribe(reviews => this.allReviews = reviews);
  }
}
