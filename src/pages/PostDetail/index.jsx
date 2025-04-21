import { Link, useParams } from "react-router-dom";

import { getIdPost } from "../../apis/posts";
import { useEffect, useState } from "react";
import "../../App.css";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getIdPost(id).then((res) => setPost(res));
  }, [id]);

  if (!post) return <div>...Loading</div>;

  return (
    <div className="postDetailDiv">
      <h1>Post id : {id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {/* <Link to={`/posts/${post.id}/edit`}> */}
      <button>Edit</button>
      {/* </Link> */}
      <button>즐겨찾기</button>
    </div>
  );
}
