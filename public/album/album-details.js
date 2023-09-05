import { useLoaderData } from "react-router-dom";
export default function AlbumDetails() {
  // read loader passed by route
  const album = useLoaderData();
  return (
    <>
      <h1>Album details</h1>
      <h4>Album id: {album.id}</h4>
      <h3>Title: {album.title}</h3>
    </>
  );
}

// loader for route
// it will execute before component render
export async function albumDetailsLoader({ params }) {
  const { albumId } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  if (!res.ok) throw new Error("Album could not found.");
  return await res.json();
}
