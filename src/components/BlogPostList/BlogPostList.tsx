import { useEffect, useState, useMemo } from 'react';
import BlogPost from '@/components/BlogPost/BlogPost';
import Pagination from '@/components/Pagination/Pagination';
import { BlogPostType } from '@/types/blog';
import BlogService from '@/services/BlogService';
import styles from './BlogPostList.module.scss';

/** Number of posts on one page of the "All Blog Posts" section. */
const POSTS_PER_PAGE = 6;

/**
 * Home page content. Fetches all posts on the client and renders two sections:
 * "Recent Blog Posts" (4 random posts) and "All Blog Posts" (paginated).
 */
const BlogPostList = () => {
  const [allPosts, setAllPosts] = useState<BlogPostType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    BlogService.fetchPosts().then(setAllPosts);
  }, []);

  const recentPosts = useMemo(() => {
    if (allPosts.length < 4) return allPosts;
    return [...allPosts].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, [allPosts]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [allPosts, currentPage]);

  return (
    <div className={styles['blog-post-list']}>
      <section className={styles.section}>
        <h2 className={styles['section-title']}>Recent Blog Posts</h2>
        <div className={styles['recent-posts']}>
          {recentPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles['section-title']}>All Blog Posts</h2>
        <div className={styles['all-posts']}>
          {paginatedPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <Pagination totalItems={allPosts.length} itemsPerPage={POSTS_PER_PAGE} currentPage={currentPage} onPageChange={setCurrentPage} />
      </section>
    </div>
  );
};

export default BlogPostList;
