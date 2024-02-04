"use client";
import ProductCard from "@/components/ProductCard";
import { useGetAllProductQuery } from "@/redux/product/productApi";

export default function Home() {
  const { data } = useGetAllProductQuery({});
  const product = data?.data;
  console.log(data);
  return (
    <main>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center mt-10'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </main>
  );
}
