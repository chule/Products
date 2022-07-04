import useSWR from "swr";
import fetcher from "./fetcher";

export const useProducts = () => {
  const { data, error } = useSWR("/products", fetcher);

    console.log(data)

  return {
    products: data,
    isLoading: !data && !error,
    isError: error,
  };
};
