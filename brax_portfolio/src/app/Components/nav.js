import {Navbar, NavbarContent, NavbarItem, Link} from "@heroui/react";

export default function Nav() {
    return (
        <Navbar isBordered>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link aria-current="page" href="#">
                        Work Experience  
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Personal Projects 
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}