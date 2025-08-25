'use client'
import Image from "next/image";
import styles from '../styles/Home.module.css'
import { createContext } from "react";
import Nav from './Components/nav'
import Head from 'next/head'

const Context = createContext()

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Brax Portfolio </title>
          <meta name="description" content="Welcome to Brax's Portfolio">
          </meta>
      </Head>
      <Nav/> 
      <div className="Background">
        <div className={styles.background}>
        </div>
        <div className="Content">
          <h1 className={styles.title}>
            Brax Portfolio
          </h1>
          <a href="#about" className={styles.button}>
            Enter
          </a>
        </div>
      </div>
    </div>
  );
}