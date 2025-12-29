import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

interface DirectNavigationItem {
    title: string,
    link: string,
    subItems?: never;
}

interface NavigationItemWithSubmenu {
    title: string,
    link?: never,
    subItems?: {
        title: string,
        link: string
    } []
}

type NavigationItem = DirectNavigationItem | NavigationItemWithSubmenu;

interface MobileListProps {
    navigationItems: NavigationItem[],
    setOpen: (arg: boolean) => void
}

export default function MobileList({ navigationItems, setOpen } : MobileListProps) {
    
    const [display, setDisplay] = useState("") 

    return (
        <ul className="bg-black text-white font-mono font-medium w-[80vw] flex flex-col items-center rounded-br-xl border-b-2 border-r-2 border-black shadow-md shadow-gray-700 overflow-hidden">
            {navigationItems.map((item, index) =>
                <li
                    key={`ItemNav-${index}`}
                    className="w-full text-center">
                    <button
                        className="py-5 cursor-pointer w-full h-full"
                        onClick={() => {
                            item.subItems &&
                            setDisplay(prev => prev === item.title ? "" : item.title);
                        }}>
                        {item.link ?
                            <Link
                                className="block w-full h-full"
                                href={item.link}
                                onClick={()=>setOpen(false)}>{item.title}</Link> :
                            item.title}
                    </button>
                    <AnimatePresence>
                        {display === item.title &&
                            item.subItems &&
                            <motion.ul
                                className="bg-white text-black w-full"
                                initial={{ height: 0, opacity: 0}}
                                animate={{ height: 'auto', opacity: 1}}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                                {item.subItems.map((subItem, index) =>
                                    <li
                                        key={`SubitemNav-${index}`}
                                        className="py-4 active:bg-red-700 hover:bg-red-700 w-full text-center flex justify-center cursor-pointer"
                                    >
                                        <Link
                                            className="w-full h-full"
                                            href={subItem.link}
                                            onClick={()=> setOpen(false)}>{subItem.title}</Link>
                                    </li>
                                )}
                            </motion.ul>
                        }
                    </AnimatePresence>
                    
                </li>
            )}
        </ul>
        
    )
}