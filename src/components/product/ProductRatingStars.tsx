import { Star, StarHalf } from "lucide-react";

export default function ProductRatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="flex items-center gap-1 text-[#0856AA]">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={`full-${index}`} className="h-4 w-4 fill-current" />
      ))}
      {hasHalfStar ? <StarHalf className="h-4 w-4 fill-current" /> : null}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={`empty-${index}`} className="h-4 w-4" />
      ))}
    </div>
  );
}
