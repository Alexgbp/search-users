import React from "react";
import styles from "../ListUserComponent/ListUserComponent.module.css";

export function ListUserComponent({users}) {
  return (
    <ul className={styles.list_block}>
      {users?.map((user) => {
        return <li className={styles.list_block__element} key={user.id}>Пользователь <span className={styles.user_name}>{user.login}</span> имеет {user.repoCount} репозиториев</li>
      })}
    </ul>
  );
}