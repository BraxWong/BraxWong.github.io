'use client'
import Nav from '../Components/nav'
import Footer from '../Components/footer'
import React, {useState , createContext } from 'react';
import { Container, Typography, Box, Button, Avatar } from '@mui/material';
const Context = createContext()

export default function About() {
    const [loading,setLoading] = useState(false);

    function sendEmail() {
        setLoading(true);
        setTimeout(() => {
            window.location.href = "mailto:wongbrax@gmail.com";
            setLoading(false);
        }, 1000);
        
    }

    return (
        <div className='background'>
            <Nav/>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70vh'
                }}
            >
                <Container maxWidth="md">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Avatar
                            alt="Brax Wong"
                            src="About_Page_Picture.jpeg" 
                            sx={{ width: 100, height: 100, marginBottom: 2}}
                        />
                        <Typography variant="h3" component="h1" gutterBottom sx={{color: '#f9f9f9', fontWeight: 'bold'}}>
                            About Me
                        </Typography>
                        <Typography variant="body1" align="center" sx={{fontSize: 18, color: '#f9f9f9'}}>
                            Hello! My name is Brax Wong. I am a recent graduate from the University of Nottingham, where I earned a degree in Computer Science with a 
                            focus on Artificial Intelligence, complemented by a year of industry experience. During my time as a placement student,
                            I gained valuable hands-on experience as an embedded software engineer, working on innovative projects that honed  my technical skills 
                            and problem-solving abilities. Passionate about technology, I have also developed several personal projects that showcase my creativity and commitment
                            to continuous learning. My personal projects can be viewed on the personal projects page. I am excited to leverage my skills and experiences in a professional setting as I embark
                            on my career in software development.
                        </Typography>
                        <br/>
                        <Button id="contact_me" onClick={()=> sendEmail()} loading={loading} variant="contained" color="primary">
                            📧 Contact Me
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer/>
        </div>
    );
}