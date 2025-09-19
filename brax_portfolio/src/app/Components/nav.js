import React from 'react';
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "../../styles/Nav.module.css";

const pages = [
    'Home',
    'About',
    'Work Experience',
    'Personal Projects',
    'Resume'
];
const redirect = [
    '/',
    '/about',
    '/work_experience',
    '/personal_projects',
    'https://drive.google.com/file/d/14w9eRQT4ZG44Zl0jBnaPn4LUIuFoQaFU/view?usp=sharing'
];

const contactMeLink = [
    'mailto:wongbrax@gmail.com',
    'https://www.instagram.com/brax_wls/',
    'https://github.com/BraxWong',
    'https://www.linkedin.com/in/brax-wong-084076247/'
];

export default function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [showUserMenu, setShowUserMenu] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setShowUserMenu(false);
        setAnchorElUser(null);
    };

    const handleUserMenuHover = () => {
        setShowUserMenu(true);
    };

    const handleUserMenuLeave = () => {
        setShowUserMenu(false);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#d4c9c9cc', marginBottom: '40px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Brax Wong
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => {
                                        if (page === "Resume") {
                                            window.open(redirect[index], '_blank').focus();
                                        } else {
                                            window.location.href = redirect[index];
                                        }
                                        handleCloseNavMenu();
                                    }}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Brax Wong
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <MenuItem
                                key={page}
                                onClick={() => {
                                    if (page === "Resume") {
                                        window.open(redirect[index], '_blank').focus();
                                    } else {
                                        window.location.href = redirect[index];
                                    }
                                    handleCloseNavMenu();
                                }}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                                className={styles.text}
                            >
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }} onMouseEnter={handleUserMenuHover} onMouseLeave={handleUserMenuLeave}>
                        <IconButton>
                            <Avatar className={styles.icon} alt="Brax Wong" src="/favicon.ico" />
                        </IconButton>
                        <Menu
                            id="menu-user"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={showUserMenu}
                            onClose={handleCloseUserMenu}
                        >
                            {['Email', 'Instagram', 'Github', 'LinkedIn'].map((contact, index) => (
                                <MenuItem key={contact} onClick={() => window.open(contactMeLink[index], '_blank').focus()}>
                                    <Typography textAlign="center">{contact}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}