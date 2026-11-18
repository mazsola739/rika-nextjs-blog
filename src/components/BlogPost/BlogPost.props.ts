import { BlogPostType } from '@/types/blog';

export interface BlogPostProps {
  /** The post to render as a card. */
  post: BlogPostType;
  /** `sizes` attribute of the cover image, matching the width of the card in its grid. */
  imageSizes: string;
  /** Preloads the cover image; use it for the first image above the fold. */
  preloadImage?: boolean;
}
