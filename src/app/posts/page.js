import React from "react";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "force-cache",
  });
  const posts = await res.json();

  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <h3 className="text-3xl mt-20 font-semibold mb-10">
        Total posts: {posts.length}
      </h3>
      <div className="grid grid-cols-2 gap-20">
        {posts.map((post) => (
          <div key={post.id} className="card bg-amber-500 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title text-2xl">{post.title}</h2>
              <p>{post.description}</p>
              <p className="text-xl font-semibold">Likes: {post.likeCount}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
