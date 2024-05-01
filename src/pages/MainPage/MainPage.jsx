import React, { useEffect, useState } from 'react'
import styles from "../MainPage/MainPage.module.css"
import { InputComponent } from "../../components/inpuntComponent/InputComponent";
import { SelectComponent } from "../../components/selectComponent/SelectComponent";
import { ButtonComponent } from "../../components/buttonComponent/ButtonComponent";
import { ListUserComponent } from '../../components/ListUserComponent/ListUserComponent';
import { TitleComponent } from '../../components/TitleComponent/TitleComponent';
import { getListOfUsers } from '../../api';
import { PaginationComponent } from '../../components/PaginateComponnet/PaginateComponnet';

export function MainPage() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowLink, setIsShowLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const showUsersOnPage = 10;
  const indexOfLastUser = currentPage * showUsersOnPage;
  const indexOfFirstUser = indexOfLastUser - showUsersOnPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(() => {
    setUsers([]);
    setErrorText("");
    setIsShowLink(false)
  }, [userName]);

  const getUsers = async () => {
    if (!userName) {
      setErrorText("Вы не ввели данные");
      return;
    }
    setIsLoading(true);
    try {
      const getUser = await getListOfUsers(userName);
      if(getUser.items.length === 0){
        setErrorText("Ничего не найдено")
        setIsLoading(false);
        return;
      }
      console.log(getUser.items);
      const usersWithRepos = await Promise.all(
        getUser.items.map(async (user) => {
          const reposResponse = await fetch(user.repos_url);
          const repos = await reposResponse.json();
          setUserName("");
          return { ...user, repoCount: repos.length };
        })
      );
      setUsers([...users, ...usersWithRepos]);
      setIsLoading(false);
      console.log(getUser.items);
    } catch (error) {
      setErrorText(error.message);
      console.log(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <TitleComponent />
      </header>
      <main className={styles.main_block}>
        <div className={styles.main_block__center_block}>
          {users.length > 0 && <SelectComponent users={users} setUsers={setUsers} />}
          {isLoading ? (
            <span>Загружаю..</span>
          ) : (
            <span className={styles.text_error}>{errorText}</span>
          )}
          <ListUserComponent isVisible={isVisible} setIsVisible={setIsVisible} isShowLink={isShowLink} setIsShowLink={setIsShowLink} users={currentUsers} />
          {users.length > 0 && <PaginationComponent paginate={paginate} showUsersOnPage={showUsersOnPage} totalUsers={users.length} />}
        </div>
        <div className={styles.main_block__search_block}>
          <InputComponent userName={userName} setUserName={setUserName} />
          <ButtonComponent onClick={getUsers}>Поиск</ButtonComponent>
        </div>
      </main>
    </div>
  );
}