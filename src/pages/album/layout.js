import { Link, useLoaderData } from "react-router-dom";
export default function AlbumLayout() {
  // read loader passed by route
  const albums = useLoaderData();
  return (
    <>
      <h1>All albums</h1>
      <ul>
        {albums.map((a) => (
          <li key={a.id}>
            <Link to={a.id.toString()}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// loader for route
// it will execute before component render
export async function albumsLoader({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!res.ok) throw new Error("Recods does not found.");
  return await res.json();
}
