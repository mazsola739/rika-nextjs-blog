import React from 'react';
import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';

/**
 * Colored tag pill. The color comes from the `.tag-<slug>` class in
 * `Tag.module.scss`; unknown tags fall back to the grey default style.
 */
const Tag: React.FC<TagProps> = ({ tag }) => {
  // "Web Dev" -> "web-dev", "Next.js" -> "nextjs"
  const slug = tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  const tagClass = styles[`tag-${slug}`] || '';

  return <span className={`${styles.tag} ${tagClass}`}>{tag}</span>;
};

export default Tag;
