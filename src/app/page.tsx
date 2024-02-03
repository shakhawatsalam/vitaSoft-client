import ProductCard from "@/components/ProductCard";

export default function Home() {
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
