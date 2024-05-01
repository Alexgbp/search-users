import React, { useState } from "react";
import styles from "../ListUserComponent/ListUserComponent.module.css";
import {ModalComponent} from "../ModalComponent/ModalComponent";

export function ListUserComponent({users, isVisible, setIsVisible,  isShowModal, setIsShowModal }) {
  const [ login, setLogin] = useState(null)

  const showModal =(log) => {
    setIsShowModal(!isShowModal)
    setIsVisible(!isVisible)
    setLogin(log)
  }

  const hideModal =() => {
    setIsShowModal(!isShowModal)
    setIsVisible(!isVisible)
  }

  return (
    <ul className={styles.list_block}>
      <ModalComponent login={login} users={users} onClick={hideModal} isVisible={isShowModal} />
      {users?.map((user) => {
        return <li onClick={() => showModal(user.login)} className={styles.list_block__element} key={user.id}>Пользователь <span className={styles.user_name}>{user.login}</span> имеет {user.repoCount} репозиториев</li>
      })}
    </ul>
  );
}