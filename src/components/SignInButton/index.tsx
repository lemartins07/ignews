import { FaGithub } from 'react-icons/fa'
import {  FiX } from 'react-icons/fi'


import styles from './styles.module.scss';

export const SignInButton = () => {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361"/>
      lemartins07
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba407"/>
      Sign in whith Github
    </button>
  );  
}