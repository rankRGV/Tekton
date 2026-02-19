export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string; // ISO date
  service?: string; // optional: which service the review relates to
}

export const reviews: Review[] = [
  {
    author: "Jessica Ortiz",
    rating: 5,
    text: "Really great service! Call them for any pool, additions, new build, or remodel work. The Tekton team were responsible with the areas and always on time.",
    date: "2026-01-22",
    service: "pools",
  },
  {
    author: "Laura Hernandez",
    rating: 5,
    text: "Amazing service! Attention to detail. Very happy with your outside patio! 100% Recommend!",
    date: "2026-01-22",
    service: "remodeling",
  },
  {
    author: "Gabriela Solis",
    rating: 5,
    text: "Very responsive and professional.",
    date: "2026-01-22",
  },
  {
    author: "Elyshia Loredo",
    rating: 5,
    text: "Great experience working with Tekton Home Solutions. Highly recommend their work.",
    date: "2025-04-15",
  },
];

export const reviewSummary = {
  averageRating: 4.5,
  totalReviews: 8,
};
