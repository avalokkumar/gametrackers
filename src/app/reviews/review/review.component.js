"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var review_service_1 = require("../shared/review.service");
var ReviewComponent = (function () {
    function ReviewComponent(route, reviewService) {
        this.route = route;
        this.reviewService = reviewService;
    }
    ReviewComponent.prototype.getSelectedGameReviews = function () {
        var _this = this;
        this.gameId = this.route.snapshot.params['id'];
        this.reviewService.getReviewById(this.gameId).subscribe(function (reviews) { return _this.selectedGameReview = reviews[0]; });
        console.log("selectedGameReview");
        console.log(this.selectedGameReview);
    };
    ReviewComponent.prototype.ngOnInit = function () {
        this.getSelectedGameReviews();
        console.log(this.gameId);
    };
    ReviewComponent = __decorate([
        core_1.Component({
            selector: 'app-review',
            templateUrl: './review.component.html',
            styleUrls: ['./review.component.css'],
            providers: [review_service_1.ReviewService]
        })
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;
