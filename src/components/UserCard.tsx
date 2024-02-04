/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const UserCard = ({ userData }: { userData: any }) => {
  const {
    id,
    name,
    profile_picture,
    phone_number,
    description,
    birthdate,
    joining_date,
    active_status,
  } = userData;

  return (
    <div className='max-w-md mx-auto bg-white p-8 shadow-md rounded-md'>
      <div className='flex items-center mb-4'>
        <img
          src={profile_picture}
          alt={name}
          className='w-12 h-12 object-cover rounded-full mr-4'
        />
        <div>
          <h2 className='text-xl font-semibold'>{name}</h2>
          {/* <p className='text-gray-600'>{phone_number}</p> */}
        </div>
      </div>

      <div className='mb-4'>
        <p className='text-gray-700'>{description}</p>
      </div>

      <div className='mb-4'>
        <p className='text-gray-700'>
          <span className='font-semibold'>Birthdate:</span> {birthdate}
        </p>
        <p className='text-gray-700'>
          <span className='font-semibold'>Joining Date:</span> {joining_date}
        </p>
      </div>

      <div className='mb-4'>
        <p className='text-gray-700'>
          <span className='font-semibold'>Active Status:</span>{" "}
          {active_status ? "Active" : "Inactive"}
        </p>
      </div>

      <div className='flex justify-end'>
        <Link
          className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          href={`/user/${id}`}>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
