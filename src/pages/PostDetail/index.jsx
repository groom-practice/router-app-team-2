import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../apis/posts";
import { useEffect, useState } from "react";
import "./index.css";
import { createPortal } from "react-dom";

function init() {
  return JSON.parse(localStorage.getItem("favorite")) || [];
}

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [favList, setFavList] = useState(init);
  const [favExist, setFavExist] = useState(false);

  useEffect(() => {
    getPostById(id).then((res) => setPost(res));
    for (let i = 0; i < favList.length; i++) {
      if (favList[i].id == id) {
        setFavExist(true);
        return;
      }
    }
  }, [id]);

  const handleAddFavorite = () => {
    setFavList([...favList, post]);
    localStorage.setItem("favorite", JSON.stringify([...favList, post]));
    setFavExist(true);
  };

  const handleDelFav = (delId) => {
    let newList = favList.filter((v) => v.id !== delId);
    setFavList(newList);
    localStorage.setItem("favorite", JSON.stringify(newList));
    if (id == delId) setFavExist(false);
  };

  if (!post) return <div>...Loading</div>;

  return (
    <div className="postDetailDiv">
      <h1>Post id : {id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => setShowModal(true)}>즐겨찾기</button>
      {showModal &&
        createPortal(
          <div className="modalWrap">
            <div className="modalContent">
              <div className="h1AndBtn">
                <h1>즐겨찾기 목록에 추가하시겠습니까?</h1>
                <button onClick={handleAddFavorite} disabled={favExist}>
                  YES
                </button>
              </div>
              <hr />
              <ul>
                {favList.length === 0 ? (
                  <li>목록이 비었습니다.</li>
                ) : (
                  favList.map((v) => (
                    <li>
                      <button
                        className="delBtn"
                        onClick={() => handleDelFav(v.id)}
                      >
                        X
                      </button>
                      <Link
                        to={`/posts/${v.id}`}
                        onClick={() => setShowModal(false)}
                      >
                        {v.id}. {v.title}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
              <hr />
              <button onClick={() => setShowModal(false)}>닫기</button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
