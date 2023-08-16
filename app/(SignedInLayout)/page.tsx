import { getAllProducts } from "@/api/productApi";
import { HomeComponent } from "@/components/page/home/HomeComponent";

export default async function Home() {
  const products = await getAllProducts();

  return <HomeComponent productsData={products} />;
}
