import {Navbar, NavbarContent, NavbarItem, Link, NavbarMenuToggle, Button, NavbarMenu, NavbarMenuItem} from "@heroui/react";
import styles from '../../styles/Nav.module.css'

export default function Nav() {
    return (
        <Navbar className={styles.container}>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
               <NavbarItem>
                   <Link className={styles.text} color="foreground" href="/">
                        Home
                    </Link>
               </NavbarItem>
                <NavbarItem>
                   <Link className={styles.text} color="foreground" href="/about">
                       About
                   </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={styles.text} aria-current="page" href="/work_experience">
                       Work Experience  
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={styles.text} color="foreground" href="/personal_projects">
                        Personal Projects 
                    </Link>
                 </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}