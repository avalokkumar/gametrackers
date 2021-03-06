class Review{
  reviewer: string;
  review_date: string;
  reviewer_score: number;
  comment: string;
}

export class Reviews{
  name: string;
  summary: string;
  metascore: number;
  user_score: number;
  img_url: string;
  critic_reviews: Review[];
  user_reviews: Review[];
}
