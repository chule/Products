import products from "./Products.json";

export default function handler(req, res) {
  res.status(200).json(products);
}
