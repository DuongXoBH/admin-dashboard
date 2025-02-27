import Banner from "@/components/page/products/banner/banner";
import ProductList from "@/components/page/products/product-list/product-list";
import { Typography } from "@mui/material";

export default function Product() {
  return (
    <div className="w-full pb-2">
      <Typography
          sx={{ mb: 1, fontSize: 32, lineHeight: "43.5px", textAlign: "start", fontWeight: 500 }}
        >
          Products
        </Typography>
      <Banner />
      <ProductList />
    </div>
  );
}
