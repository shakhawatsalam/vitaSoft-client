"use client";

import { useCreateProductMutation } from "@/redux/product/productApi";
import { useState } from "react";

const CreateProductForm = () => {
  const [createProduct] = useCreateProductMutation();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Implement your logic to handle form submission
    console.log("Product Data:", productData);

    await createProduct(productData);
  };

  return (
    <div className='max-w-md mx-auto bg-white p-8 shadow-md rounded-md'>
      <h2 className='text-2xl font-semibold mb-6'>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'>
            Product Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={productData.name}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            value={productData.description}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            // rows='3'
            required></textarea>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='imageUrl'
            className='block text-sm font-medium text-gray-700'>
            Image URL
          </label>
          <input
            type='url'
            id='imageUrl'
            name='imageUrl'
            value={productData.imageUrl}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='price'
            className='block text-sm font-medium text-gray-700'>
            Price
          </label>
          <input
            type='number'
            id='price'
            name='price'
            value={productData.price}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'>
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
