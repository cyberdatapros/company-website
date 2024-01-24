import React from "react";
import StaffProfilePage from "@/components/pages/StaffProfilePage";
const page = ({ params }: { params: { name: string } }) => {
  return <StaffProfilePage name={params.name} />;
};

export default page;
