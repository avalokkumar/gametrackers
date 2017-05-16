"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var review_service_1 = require("./shared/review.service");
var ReviewsComponent = (function () {
    function ReviewsComponent(reviewService) {
        this.reviewService = reviewService;
        this.count = 0;
        console.log('Review Services Initialized');
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.getReviewDetails();
    };
    ReviewsComponent.prototype.getReviewDetails = function () {
        var _this = this;
        this.reviewService.getAllReviews()
            .subscribe(function (reviews) { return _this.allReviews = reviews; });
    };
    ReviewsComponent = __decorate([
        core_1.Component({
            selector: 'app-reviews',
            templateUrl: './reviews.component.html',
            styleUrls: ['./reviews.component.css'],
            providers: [review_service_1.ReviewService]
        })
    ], ReviewsComponent);
    return ReviewsComponent;
}());
exports.ReviewsComponent = ReviewsComponent;
