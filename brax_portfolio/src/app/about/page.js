'use client'
import Nav from '../Components/nav'
import Footer from '../Components/footer'
import Head from 'next/head'
import { createContext } from 'react';

const Context = createContext()

export default function About() {
    return (
        <div>
            <Nav/>
            <h1>
                About
            </h1>
            <Footer/>
        </div>
    );
}