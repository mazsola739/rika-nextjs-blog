import Layout from '@/components/Layout/Layout';
import BlogPostList from '@/components/BlogPostList/BlogPostList';

/** Home page (`/`): the blog post listing. */
const HomePage = () => {
  return (
    <Layout>
      <BlogPostList />
    </Layout>
  );
};

export default HomePage;
