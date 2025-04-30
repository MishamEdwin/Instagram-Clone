import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="d-flex justify-content-end" style={{marginTop:"10px"}}>
      <div className="w-100" style={{ maxWidth: "500px" }}>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <div className="my-3" key={post.id}>
                <div className="d-flex">
                  <img
                    className="dp rounded-circle"
                    src={post.profilePic}
                    alt=""
                  />
                  <h5>{post.username}</h5>
                  <i
                    className="bi bi-three-dots ms-auto"
                    style={{ marginRight: "128px" }}
                  ></i>
                </div>
                <img className="image" src={post.imageUrl} alt="" />
                <div>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>

                  <i className="bi bi-bookmark"></i>
                </div>
                <div>
                  <b>{post.likes} Likes</b>
                  <p>{post.caption}</p>
                  <p>View all {post.comments} comments</p>
                  <p>Add a comment...</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading Posts</div>
        )}
      </div>
    </div>
  );
}

export default Posts;
