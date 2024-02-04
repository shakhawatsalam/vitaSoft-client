// pages/index.js
"use client";
import UserCard from "@/components/UserCard";
import { useGetAllUserQuery } from "@/redux/user/userApi";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../components/styles/pagination.css";

export default function Home() {
  const { data } = useGetAllUserQuery({});
  const users = data?.data || [];
  const itemsPerPage = 4; // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
    console.log(currentPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEvents = users.slice(startIndex, endIndex);

  return (
    <main>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center mt-10'>
        {paginatedEvents.map((userData: any) => (
          <UserCard key={userData.id} userData={userData} />
        ))}
      </div>
      <div className='flex  justify-center mt-12'>
        <ReactPaginate
          pageCount={Math.ceil(users.length / itemsPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName='pagination'
          pageClassName='pagination-li'
          previousClassName='pagination-a'
          nextClassName='pagination-a'
          pageLinkClassName='pagination-a'
          activeClassName='pagination-active'
          breakLabel='...'
          nextLabel='>'
          previousLabel='<'
          renderOnZeroPageCount={null}
        />
      </div>
    </main>
  );
}
