'use client'
import Nav from '../Components/nav'
import Head from 'next/head'
import { createContext } from 'react';

const Context = createContext()

export default function Personal_Projects() {
    return (
        <div>
            <Nav/>
            <h1>
                Personal Projects
            </h1>
        </div>
    );
}