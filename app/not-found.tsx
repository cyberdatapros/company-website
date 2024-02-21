import React from "react";
import { permanentRedirect } from "next/navigation";

const NotFound = async () => {
  permanentRedirect("/");
};

export default NotFound;
