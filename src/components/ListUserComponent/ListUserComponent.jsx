import React from "react";
import styles from "../ListUserComponent/ListUserComponent.module.css";
import {ModalComponent} from "../ModalComponent/ModalComponent";

export function ListUserComponent({users, isVisible, setIsVisible,  isShowLink, setIsShowLink}) {
  const showLinkOnUserPage =() => {
    setIsShowLink(!isShowLink)
    setIsVisible(!isVisible)
  }
 

  return (
    <ul className={styles.list_block}>
      <ModalComponent isVisible={isShowLink} />
      {users?.map((user) => {
        return <li onClick={showLinkOnUserPage} className={styles.list_block__element} key={user.id}>Пользователь <span className={styles.user_name}>{user.login}</span> имеет {user.repoCount} репозиториев</li>
      })}
    </ul>
  );
}