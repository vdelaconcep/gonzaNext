"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect} from "react";
import Menu from "@/components/navigation/menu";
import MobileList from "@/components/navigation/mobileList";
import { navigationItems } from '@/components/navigation/navigationItems';

export default function NavBar() {

    const [open, setOpen] = useState <boolean>(false);

    const navRef = useRef <HTMLElement | null>(null);

    useEffect(() => {
        const closeMenu = (event: MouseEvent): void => {
            if (!navRef.current?.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu)
    }, []);

    return (
        <nav
            ref={navRef}
            className={'bg-black px-2 text-white flex items-center shadow-sm shadow-gray-700 fixed top-0 left-0 right-0 z-100'}>
            <Menu open={open} setOpen={setOpen} />
            <AnimatePresence>
                {open ?
                    <motion.article
                        className="absolute top-16 left-0 z-100"
                        initial={{ x: '-100%'}}
                        animate={{ x: 0}}
                        exit={{ x: '-100%'}}
                        transition={{duration:0.3, ease:'easeInOut'}}>
                        <MobileList
                            navigationItems={navigationItems}
                            setOpen={setOpen} />
                    </motion.article>
                : null}
            </AnimatePresence>
        </nav>
    );
}