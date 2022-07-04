import { useRouter } from "next/router";
import { useProduct } from "../../lib/hooks";
import ProductListing from "../../components/product";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { product, isLoading, isError } = useProduct(id);

  return (
    <div>
      {!isLoading && !isError && product?.title && (
        <ProductListing product={product} />
      )}
    </div>
  );
}
