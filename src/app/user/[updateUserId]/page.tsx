"use client";
import Loader from "@/components/Loader";
import UpdateProductForm from "@/components/UpdateProductForm";
import UpdateUserForm from "@/components/UpdateUserForm";
import {
  useGetAllUserQuery,
  useGetSingleUserQuery,
} from "@/redux/user/userApi";

import React from "react";

const UpdateUserpage = ({ params }: { params: any }) => {
  const { updateUserId } = params;

  const { data } = useGetSingleUserQuery(updateUserId);
  console.log(data?.data);
  const initialUserData = data?.data;
  if (!initialUserData) {
    return <Loader />;
  }
  return (
    <div>
      <UpdateUserForm initialData={initialUserData}></UpdateUserForm>
    </div>
  );
};

export default UpdateUserpage;
