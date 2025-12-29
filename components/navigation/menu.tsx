import {motion} from 'framer-motion'

interface MenuProps {
    open: boolean,
    setOpen: (arg: boolean) => void
}


export default function Menu({ open, setOpen }: MenuProps) {
    return (
        <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl text-shadow-[3px_3px_0px_rgba(193,0,7,1)] bg-black relative w-16 h-16 cursor-pointer"
            aria-label="toggle-menu">
            <motion.i
                className="fa-solid fa-bars absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/4"
                animate={{
                    rotate: open ? 90 : 0,
                    opacity: open ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }} />
            
            <motion.i
                className="fa-solid fa-x absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/4"
                animate={{
                    rotate: open ? 0 : -90,
                    opacity: open ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }} />

        </button>
    )
}