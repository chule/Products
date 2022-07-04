import useSWR from "swr";
import fetcher from "./fetcher";

export const useProducts = () => {
  const { data, error } = useSWR("/products", fetcher);

  return {
    products: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useProduct = (id) => {
  const { data, error } = useSWR("/products", fetcher);

  const product = data?.find((d) => {
    return +d.id === +id;
  });

  return {
    product,
    isLoading: !data && !error,
    isError: error,
  };
};
