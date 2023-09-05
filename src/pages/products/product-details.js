import { useParams } from "react-router-dom";

function ProductDetails() {
  // read dynamic route parameter
  const params = useParams();
  return (
    <>
      <h1>Product details for {params?.prodId}</h1>
    </>
  );
}
export default ProductDetails;
