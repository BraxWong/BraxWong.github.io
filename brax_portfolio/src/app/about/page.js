'use client'
import Nav from '../Components/nav'
import Footer from '../Components/footer'
import Head from 'next/head'
import { createContext } from 'react';
import styles from "../../styles/About.module.css"

const Context = createContext()

export default function About() {
    return (
        <div>
            <Head>
                <title> About Me </title>
                <meta name="description" content="About Me"></meta>
            </Head>
            <Nav/>
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.picture}`}>
                </div>
                <div className={styles.column}>
                    <h1 className={styles.about}>
                        Hello! <br/> I am Brax.
                    </h1>
                    <h2 className={styles.paragraph}>
                        I am a recent graduate from the University of Nottingham, where I earned a degree in Computer Science with a 
                        focus on Artificial Intelligence, complemented by a year of industry experience. During my time as a placement student,
                        I gained valuable hands-on experience as an embedded software engineer, working on innovative projects that honed  my technical skills 
                        and problem-solving abilities. Passionate about technology, I have also developed several personal projects that showcase my creativity and commitment
                        to continuous learning. My personal projects can be viewed on the personal projects page. I am excited to leverage my skills and experiences in a professional setting as I embark
                        on my career in software development.
                    </h2>
                </div>
            </div>
            <Footer/>
        </div>
    );
}