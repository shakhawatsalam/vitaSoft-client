// components/ProductCard.js

import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className='max-w-xs mx-auto bg-white shadow-md rounded-md overflow-hidden'>
      <div className='relative aspect-w-3 aspect-h-4'>
        <Image
          src={
            "https://images.unsplash.com/photo-1697462248006-662f35b913ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1697462248006-662f35b913ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=''
          className='rounded-t-md'
          width={200}
          height={200}
        />
      </div>

      <div className='p-4'>
        <h2 className='text-gray-900 font-semibold text-lg'>name</h2>
        <p className='mt-2 text-gray-700'>$price</p>
      </div>

      <div className='flex justify-between space-x-2 p-4'>
        <Link  className='text-blue-500 hover:underline' href='/product/update-product'>
          Update
        </Link>
        <Link className='text-red-500 hover:underline' href='#'>
          Delete
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
