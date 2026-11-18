import Layout from '@/components/Layout/Layout';
import BlogService from '@/services/BlogService';
import { BlogPostType } from '@/types/blog';
import { GetServerSideProps } from 'next';

interface PostPageProps {
  post: BlogPostType;
}

/** Post detail page (`/post/[id]`), rendered on the server. */
const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <Layout>
      <article>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </article>
    </Layout>
  );
};

/** Loads the post for the requested id. Responds with a 404 page if the id is invalid or the post does not exist. */
export const getServerSideProps: GetServerSideProps<PostPageProps> = async ({ params }) => {
  const id = Number(params?.id);
  if (!Number.isInteger(id)) return { notFound: true };

  const post = await BlogService.fetchPost(id);
  if (!post) return { notFound: true };

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
