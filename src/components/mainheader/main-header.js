import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css"
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import Navlinks from "./navlinks";
export default function Mainheader(){
  return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href='/'><Image src={logoImg} alt="A plate with food on it" priority/>NextLevelFood</Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Navlinks href="/meals">Browse Meals</Navlinks>
                </li>
                <li>
                    <Navlinks href="/community">Foodies Community</Navlinks>
                </li>
        
            </ul>
        </nav>
    </header>
    </>

  );
}
