export type RatingDistributionEntry = {
  label: string;
  count: number;
};

export function getRatingDistribution(
  rating: number,
  totalReviews: number,
): RatingDistributionEntry[] {
  const fifthStarShare = Math.min(0.65, rating / 5);
  const fourthStarShare = Math.min(0.22, Math.max(0.12, (5 - rating) / 8));
  const thirdStarShare = 0.09;
  const secondStarShare = 0.03;

  return [
    { label: "5 stars", count: Math.round(totalReviews * fifthStarShare) },
    { label: "4 stars", count: Math.round(totalReviews * fourthStarShare) },
    { label: "3 stars", count: Math.round(totalReviews * thirdStarShare) },
    { label: "2 stars", count: Math.round(totalReviews * secondStarShare) },
    {
      label: "1 star",
      count: Math.max(
        0,
        totalReviews -
          Math.round(totalReviews * fifthStarShare) -
          Math.round(totalReviews * fourthStarShare) -
          Math.round(totalReviews * thirdStarShare) -
          Math.round(totalReviews * secondStarShare),
      ),
    },
  ];
}
