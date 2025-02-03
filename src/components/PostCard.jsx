import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <>
      <div className="border bg-white rounded-lg overflow-hidden">
        <Image
          src={post?.featuredImage || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            <Link href={`/${post.slug}`} className="hover:text-indigo-600">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{post?.excerpt || ""}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {post?.date || new Date()}
            </span>
            <Link
              href={`/${post.slug}`}
              className="text-indigo-600 hover:text-indigo-800"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
