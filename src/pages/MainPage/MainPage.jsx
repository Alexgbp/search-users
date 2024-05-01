import React, { useEffect, useState } from 'react'
import styles from "../MainPage/MainPage.module.css"
import { InputComponent } from "../../components/inpuntComponent/InputComponent";
import { SelectComponent } from "../../components/selectComponent/SelectComponent";
import { ButtonComponent } from "../../components/buttonComponent/ButtonComponent";
import { ListUserComponent } from '../../components/ListUserComponent/ListUserComponent';
import { TitleComponent } from '../../components/TitleComponent/TitleComponent';
import { getListOfUsers } from '../../api';

export function MainPage() {
  const [users, setUsers] = useState([])
  const [userName, setUserName] = useState("");
  const [errorText, setErrorText] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUsers([]);
    setErrorText("")
  }, [userName]);
  
  const getUsers =  async () =>{
    if (!userName) {
      setErrorText("Вы не ввели данные");
      return;
    }
    setIsLoading(true)
    try {
      const getUser =  await getListOfUsers(userName)
      const usersWithRepos = await Promise.all(getUser.items.map(async user => {
        const reposResponse = await fetch(user.repos_url);
        const repos = await reposResponse.json();
        setUserName("")
        return {...user, repoCount: repos.length};
      }));
      setUsers([...users, ...usersWithRepos])
      setIsLoading(false)
      console.log(getUser.items);
    } catch (error) {
      setErrorText(error.message)
      console.log(error.message);
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <header>
      <TitleComponent /> 
      </header>
      <main className={styles.main_block}>
        <div className={styles.main_block__center_block}>
           
           {users.length > 0 && <SelectComponent />}
           {isLoading ? <span>Загружаю..</span> : <span className={styles.text_error}>{errorText}</span>}
           <ListUserComponent users={users}/>
        </div>
        <div className={styles.main_block__search_block}>
          <InputComponent userName={userName} setUserName={setUserName} />
          <ButtonComponent onClick={getUsers}>Поиск</ButtonComponent>
        </div>
      </main>
    </div>
  )
}