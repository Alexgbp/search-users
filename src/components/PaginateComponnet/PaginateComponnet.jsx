import React from "react";
import styles from "../PaginateComponnet/PaginateComponnet.module.css"

export const PaginationComponent = ({ showUsersOnPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / showUsersOnPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div className={styles.pagination_block}>
        {pageNumbers.map((number) => (
            <button key={number} onClick={() => paginate(number)}>{number}</button>
        ))}
      </div>
  );
};
