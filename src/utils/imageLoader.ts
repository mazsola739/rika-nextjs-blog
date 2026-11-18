import type { ImageLoaderProps } from 'next/image';

/** A Lorem Picsum image with a fixed size: `https://picsum.photos/seed/<seed>/<width>/<height>`. */
const PICSUM_IMAGE = /^(https:\/\/picsum\.photos\/seed\/[^/]+)\/(\d+)\/(\d+)$/;

/**
 * Image loader for `next/image`, set in `next.config.ts`.
 *
 * A static export has no Next.js image optimizer, so Lorem Picsum resizes the
 * cover images instead: for every width in the `srcset` it returns the image at
 * that width (with the same aspect ratio) in the WebP format.
 * Any other URL is returned unchanged.
 */
export default function imageLoader({ src, width }: ImageLoaderProps) {
  const match = PICSUM_IMAGE.exec(src);
  if (!match) return src;

  const [, base, originalWidth, originalHeight] = match;
  const height = Math.round((width * Number(originalHeight)) / Number(originalWidth));
  return `${base}/${width}/${height}.webp`;
}
