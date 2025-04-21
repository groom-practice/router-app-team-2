import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, updatePost } from '../../apis/posts';
import './index.css';

export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id).then((res) => {
      setPost(res);
      setTitle(res.title);
      setText(res.body);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updatePost(id, { title, text });
    console.log(res);
    navigate(`/posts/${id}`);
  };

  if (!post) return <div>...Loading</div>;

  return (
    <div className='editPostWrapper'>
      <h1>Edit Post Id: {id}</h1>
      <h3>마지막으로 수정한 post id: {id}</h3>

      <form className='editPostForm' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='제목을 입력하세요'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='내용을 입력하세요'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>수정 완료</button>
      </form>
    </div>
  );
}
