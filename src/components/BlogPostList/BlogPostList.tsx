import BlogPost from '@/components/BlogPost/BlogPost';
import Pagination from '@/components/Pagination/Pagination';
import { getPageCount, POSTS_PER_PAGE } from '@/utils/pagination';
import { BlogPostListProps } from './BlogPostList.props';
import styles from './BlogPostList.module.scss';

/** Number of posts in the "Recent Blog Posts" section. */
const RECENT_POSTS_COUNT = 4;

/** Image `sizes` matching the grid columns, so the browser downloads the right image width. */
const RECENT_IMAGE_SIZES = '(min-width: 768px) 50vw, 100vw';
const ALL_IMAGE_SIZES = '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw';

/**
 * Home page content with two sections: "Recent Blog Posts" (the newest posts)
 * and "All Blog Posts" (paginated). Server component.
 */
const BlogPostList = ({ posts, currentPage }: BlogPostListProps) => {
  const recentPosts = posts.slice(0, RECENT_POSTS_COUNT);
  const pagePosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className={styles['blog-post-list']}>
      <section className={styles.section} aria-labelledby="recent-posts-title">
        <h2 id="recent-posts-title" className={styles['section-title']}>
          Recent Blog Posts
        </h2>
        <div className={styles['recent-posts']}>
          {recentPosts.map((post, index) => (
            // The first image is the largest one above the fold, so it is preloaded.
            <BlogPost key={post.id} post={post} imageSizes={RECENT_IMAGE_SIZES} preloadImage={index === 0} />
          ))}
        </div>
      </section>

      <section id="all-posts" className={styles.section} aria-labelledby="all-posts-title">
        <h2 id="all-posts-title" className={styles['section-title']}>
          All Blog Posts
        </h2>
        <div className={styles['all-posts']}>
          {pagePosts.map((post) => (
            <BlogPost key={post.id} post={post} imageSizes={ALL_IMAGE_SIZES} />
          ))}
        </div>
        <Pagination totalPages={getPageCount(posts.length)} currentPage={currentPage} />
      </section>
    </div>
  );
};

export default BlogPostList;
