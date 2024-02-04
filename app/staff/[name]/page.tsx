import React from "react";
import StaffProfilePage from "@/components/pages/staff/StaffProfilePage";
const page = ({ params }: { params: { name: string } }) => {
  return <StaffProfilePage name={params.name} />;
};

export default page;
