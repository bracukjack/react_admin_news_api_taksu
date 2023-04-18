import React from "react";
import { PaginationProps, Pagination as RA_Pagination } from "react-admin";

const Pagination = (props: JSX.IntrinsicAttributes & PaginationProps) => (
  <RA_Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);

export default Pagination;
