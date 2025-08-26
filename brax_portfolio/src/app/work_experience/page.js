'use client'
import Nav from '../Components/nav'
import Head from 'next/head'
import { createContext } from 'react';

const Context = createContext()

export default function Work_Experience() {
    return (
        <div>
            <Nav/>
            <h1>
                Work Experience 
            </h1>
        </div>
    );
}