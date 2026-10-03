export type GoogleReview = {
  author: string;
  authorUrl?: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

export type GoogleReviewsData = {
  rating?: number;
  count?: number;
  url?: string;
  reviews: GoogleReview[];
};

type PlaceDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    authorAttribution?: { displayName?: string; uri?: string };
  }[];
};

/**
 * Live rating, review count and recent reviews for the business, straight from the
 * Google Places API. Returns null until GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are
 * set, so the site never shows a rating or review that did not come from Google.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const reviewsUrl = process.env.GOOGLE_REVIEWS_URL || undefined;

  if (!apiKey || !placeId) {
    return reviewsUrl ? { url: reviewsUrl, reviews: [] } : null;
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
        next: { revalidate: 86400 },
      },
    );
    if (!response.ok)
      return reviewsUrl ? { url: reviewsUrl, reviews: [] } : null;

    const place = (await response.json()) as PlaceDetailsResponse;
    return {
      rating: place.rating,
      count: place.userRatingCount,
      url: reviewsUrl ?? place.googleMapsUri,
      reviews: (place.reviews ?? [])
        .map((review) => ({
          author: review.authorAttribution?.displayName ?? "Google user",
          authorUrl: review.authorAttribution?.uri,
          rating: review.rating ?? 0,
          text: review.text?.text ?? review.originalText?.text ?? "",
          relativeTime: review.relativePublishTimeDescription,
        }))
        .filter((review) => review.text.length > 0)
        .slice(0, 3),
    };
  } catch {
    return reviewsUrl ? { url: reviewsUrl, reviews: [] } : null;
  }
}
