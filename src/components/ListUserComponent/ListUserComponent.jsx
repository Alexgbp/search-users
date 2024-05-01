import React from "react";
import styles from "../ListUserComponent/ListUserComponent.module.css";

export function ListUserComponent({users, isShowLink, setIsShowLink}) {
  const showLinkOnUserPage =() => {
    setIsShowLink(!isShowLink)
    alert(1)
  }
  return (
    <ul className={styles.list_block}>
      {users?.map((user) => {
        return <li onClick={showLinkOnUserPage} className={styles.list_block__element} key={user.id}>Пользователь <span className={styles.user_name}>{user.login}</span> имеет {user.repoCount} репозиториев</li>
      })}
    </ul>
  );
}