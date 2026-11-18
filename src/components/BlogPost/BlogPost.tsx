import Link from 'next/link';
import Tag from '../Tag/Tag';
import { capitalize, formatDate } from '@/utils/helpers';
import { BlogPostProps } from './BlogPost.props';
import styles from './BlogPost.module.scss';
import { ArrowUpRight } from '../Icons/Icons';

/**
 * Blog post card: cover image, date and stats, title, a short excerpt
 * (first 80 characters), tags and a "Read more" link to the post page.
 */
const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className={styles['blog-post']}>
      <img src={post.image} alt={post.title} className={styles['blog-post-image']} />

      <div className={styles['blog-post-content']}>
        <div className={styles['blog-post-date']}>
          {formatDate(post.date)} • {post.views} views • {post.readingTime}
        </div>

        <div className={styles['blog-post-title']}>
          <h3>{capitalize(post.title)}</h3>
          <ArrowUpRight />
        </div>

        <p className={styles['blog-post-description']}>{post.description.length > 80 ? `${post.description.substring(0, 80)}...` : post.description}</p>

        <div className={styles['blog-post-footer']}>
          <div className={styles['tags']}>
            {post.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>

          <div className={styles['blog-post-meta']}>
            <Link href={`/post/${post.id}`} className={styles['read-more']}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
