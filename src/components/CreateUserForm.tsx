"use client";

import { useCreateUserMutation } from "@/redux/user/userApi";
import { useState } from "react";

const CreateUserForm = () => {
  const [createUser] = useCreateUserMutation();
  const [userData, setUserData] = useState({
    name: "",
    profile_picture: "",
    phone_number: "",
    description: "",
    birthdate: "",
    joining_date: "",
    active_status: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setUserData({
      ...userData,
      active_status: !userData.active_status,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("User Data:", userData);
    await createUser(userData);
  };

  return (
    <div className='max-w-md mx-auto bg-white p-8 shadow-md rounded-md'>
      <h2 className='text-2xl font-semibold mb-6'>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={userData.name}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='profile_picture'
            className='block text-sm font-medium text-gray-700'>
            Profile Picture URL
          </label>
          <input
            type='url'
            id='profile_picture'
            name='profile_picture'
            value={userData.profile_picture}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='phone_number'
            className='block text-sm font-medium text-gray-700'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phone_number'
            name='phone_number'
            value={userData.phone_number}
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
            value={userData.description}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            required></textarea>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='birthdate'
            className='block text-sm font-medium text-gray-700'>
            Birthdate
          </label>
          <input
            type='date'
            id='birthdate'
            name='birthdate'
            value={userData.birthdate}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='joining_date'
            className='block text-sm font-medium text-gray-700'>
            Joining Date
          </label>
          <input
            type='date'
            id='joining_date'
            name='joining_date'
            value={userData.joining_date}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='active_status' className='flex items-center'>
            <input
              type='checkbox'
              id='active_status'
              name='active_status'
              checked={userData.active_status}
              onChange={handleCheckboxChange}
              className='mr-2'
            />
            <span className='text-sm font-medium text-gray-700'>
              Active Status
            </span>
          </label>
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
