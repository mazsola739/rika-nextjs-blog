import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';

/** Turns a tag label into a CSS class suffix: "Web Dev" -> "web-dev", "Next.js" -> "nextjs". */
const toSlug = (tag: string) =>
  tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

/**
 * Colored tag pill. The color comes from the `.tag-<slug>` class in
 * `Tag.module.scss`; unknown tags fall back to the grey default style.
 */
const Tag = ({ tag }: TagProps) => {
  const tagClass = styles[`tag-${toSlug(tag)}`] ?? '';

  return <span className={`${styles.tag} ${tagClass}`}>{tag}</span>;
};

export default Tag;
