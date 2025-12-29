interface ClassicButtonProps {
    text?: string,
    action?: () => void,
    color?: 'red' | 'black' | 'white'
}

export default function ClassicButton({ text, action, color }: ClassicButtonProps) {
    
    const colorClassName = color === 'white' ?
        'bg-white text-black' :
        color === 'black' ? 'bg-black text-white' : 'bg-red-700 text-white';
    // Default color: red
    
    return (
        <button
            className={`${colorClassName} font-mono font-semibold px-5 py-2 rounded-full shadow-[5px_5px_0px_rgba(0,0,0,1)] border-2 border-black`}
            onClick={action}>
            {text ? text : 'Clásico'}
        </button>
    )
}