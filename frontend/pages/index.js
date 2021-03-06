import Head from 'next/head'
import { useContext, useReducer, createContext, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home/Home.module.scss'
import logo from '../public/logo.png'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import {LoginForm, RegisterForm} from '../components/LoginSignup'
// import { useSelector, useDispatch, Provider } from 'react-redux';
// import { goLogin, goRegister } from '../redux/reduxUtils/actions';
import store from '../redux/store';
import { setLogin } from '../redux/reduxUtils/reducers'
import { Provider } from 'react-redux'




export const LoginContext = createContext();

export default function Home() {

  const [isLogin, setIsLogin] = useState('home')


  return (
    <Provider store={store}>

    <div className={styles.homeContainer}>
          <LoginContext.Provider value={{isLogin: isLogin, setIsLogin: setIsLogin}}>
      {
        isLogin === "login" ? <LoginForm /> : isLogin === "register" ? <RegisterForm /> : null 
      }
          </LoginContext.Provider>
      <Head>
      <title>Huntershare</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.logo}>Huntershare</h1>
        <div  className={styles.logoPic}>
        <Image 
          src={logo}
          alt="huntershare logo"
          />
        </div>
        <nav className={styles.nav}>
          <button onClick={() => setIsLogin('login')}>
            Login
          </button>
          <span> / </span>
          <button onClick={() => setIsLogin('register')}>
            Sign-up
          </button>
        </nav>
      </header>
      <main>
        <div className={styles.hero}>
            <h1 className={styles.mainText}>
            Share your tips, tricks, and findings with the community.
            </h1>
            <h2>Or</h2>
            <h2>Search for a specific hint or writeup</h2>
            <div className={styles.searchbar}>
               <input type="text" placeholder='Type...' />
            </div>
            <h2>Nothing in mind? ? See the latest posts here</h2>
            <Link href='#' passHref>
              <Icon className={styles.seeMore} icon="dashicons:arrow-down-alt2" width="96" />
            </Link>
        </div>
      </main>
      </div>
      </Provider>

  )
}
