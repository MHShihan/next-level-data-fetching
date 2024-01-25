import Link from "next/link";

const PostDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  console.log(post);
  return (
    <div>
      <div key={post.id} className="card bg-amber-500 shadow-xl mt-10 ">
        <div className="card-body">
          <h2 className="card-title text-2xl">{post.title}</h2>
          <p>{post.description}</p>
          <p className="text-xl font-semibold">Likes: {post.likeCount}</p>
          <div className="card-actions justify-end">
            <Link href="/posts">
              <button className="btn btn-primary">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
