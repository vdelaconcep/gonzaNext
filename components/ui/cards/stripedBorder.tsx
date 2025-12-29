interface StripedBorderCardProps {
    addClass?: string
    title?: string
    subtitle?: string
    background?: 'black' | 'white'
}


export default function StripedBorderCard({ addClass, title, subtitle, background } : StripedBorderCardProps) {
    return (
        <article
            className={`w-full md:w-75 rounded-lg p-1 shadow-md shadow-gray-800 ${addClass && addClass}`}
            style={{backgroundImage: 'repeating-linear-gradient(-45deg, black 0, black 10px, #9F0712 10px, #9F0712 20px'}}
        >
            <div className={`w-full h-full bg-${background || 'black'} p-3 rounded-md inset-ring-1 inset-ring-gray-900`}>
                <h1 className={`${background === 'white' ? 'text-black' : 'text-white'}  font-medium text-[24px]`}>{title || 'Bordes rayados'}</h1>
                <h2 className={`${background === 'white' ? 'text-black' : 'text-white'} text-[18px]`}>{subtitle || 'Subtítulo de bordes rayados'}</h2>
            </div>
            
        </article>
    )
}