const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPostById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function updatePost(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
