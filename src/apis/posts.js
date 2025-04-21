const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getIdPost(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}
