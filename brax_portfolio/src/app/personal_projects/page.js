'use client'
import Nav from '../Components/nav'
import Footer from '../Components/footer'
import { createContext } from 'react';
import styles from "../../styles/PersonalProjects.module.css"
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

const Context = createContext()

export default function Personal_Projects() {
      const list = [
        {
            title: "BitskinsAPI-Web",
            img: "/FormPage.png",
            link: "https://github.com/BraxWong/BitskinsAPI-Web",
        },
        {
            title: "Bitskin-CLI",
            img: "/Starting_Screen.png",
            link: "https://github.com/BraxWong/Bitskin-CLI",
        },
        {
            title: "Password-Manager",
            img: "/LoginDetailsStorageImage.png",
            link: "https://github.com/BraxWong/Password-Manager",
        },
        {
            title: "Quotation Editor",
            img: "/QuotationEditor.jpeg",
            link: "https://github.com/BraxWong/QuotationEditor",
        },
        {
            title: "Obsidian-Vault Generator",
            img: "/MainScreen.png",
            link: "https://github.com/BraxWong/Obsidian-Vault-Generator",
        },
        {
            title: "Personal Portfolio",
            img: "/PersonalPortfolio.jpeg",
            link: "https://github.com/BraxWong/BraxWong.github.io",
        },
    ];
    return (
        <div className='background'>
            <Nav/>
            <h1 className={styles.text}>
                Personal Projects
            </h1>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
                {list.map((item, index) => (
                    <Card key={index} sx={{ width: '100%' }}>
                        <div>
                            <Typography level="title-lg">{item.title}</Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                            >
                            </IconButton>
                        </div>
                        <AspectRatio minHeight="120px" maxHeight="200px">
                            <img
                                src={item.img}
                                loading="lazy"
                                alt=""
                                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                            />
                        </AspectRatio>
                        <CardContent orientation="horizontal">
                            <Button
                                variant="solid"
                                size="md"
                                color="primary"
                                aria-label="Explore Bahamas Islands"
                                onClick={() => window.open(item.link, '__blank').focus()}
                                sx={{ margin: 'auto', fontWeight: 600 }} 
                            >
                                Go
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Footer/>
        </div>
    );
}