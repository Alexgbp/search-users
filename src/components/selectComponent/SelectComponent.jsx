import React from "react";
import styles from "./SelectComponent.module.css";

export function SelectComponent({users, setUsers}) {

  const sortListOfUsers = (e) => {
    const value = e.target.value;
    let sortedUsers;
    if(value === "asc"){
      sortedUsers = [...users].sort((a,b) =>  a.repoCount - b.repoCount)
    }else{
      sortedUsers = [...users].sort((a, b) => b.repoCount - a.repoCount)
    }
    setUsers(sortedUsers)
  }
  return (
    <div className={styles.select_container}>
    <span>Фильтровать по</span>
      <select onChange={sortListOfUsers} className={styles.select_container__select_block}>
        <option value="asc">Возрастанию</option>
        <option value="desc">Убыванию</option>
      </select>
    </div>
  );
}