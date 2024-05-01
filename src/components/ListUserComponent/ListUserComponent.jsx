import React from "react";
import styles from "../ListUserComponent/ListUserComponent.module.css";
import {ModalComponent} from "../ModalComponent/ModalComponent";

export function ListUserComponent({users, isVisible, setIsVisible,  isShowModal, setIsShowModal}) {
  const showLinkOnUserPage =() => {
    setIsShowModal(!isShowModal)
    setIsVisible(!isVisible)
  }

  const hideLinkOnUserPage =() => {
    setIsShowModal(!isShowModal)
    setIsVisible(!isVisible)
  }

  return (
    <ul className={styles.list_block}>
      <ModalComponent onClick={hideLinkOnUserPage} isVisible={isShowModal} />
      {users?.map((user) => {
        return <li onClick={showLinkOnUserPage} className={styles.list_block__element} key={user.id}>Пользователь <span className={styles.user_name}>{user.login}</span> имеет {user.repoCount} репозиториев</li>
      })}
    </ul>
  );
}