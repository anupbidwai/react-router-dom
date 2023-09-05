import { useRouteError } from "react-router-dom";

export default function ErrorBoundry() {
  // read error message, thrown by loader
  const error = useRouteError();
  return (
    <>
      <h4 style={{ color: "red" }}>{error.message}</h4>
    </>
  );
}
