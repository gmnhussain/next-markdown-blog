import { getAllPosts } from "@/lib/actions";
import PostCard from "@/components/PostCard";

const getPosts = async () => {
  const posts = await getAllPosts();
  return posts;
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
