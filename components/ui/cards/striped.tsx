
export default function StripedCard() {
    return (
        <article
            className="w-full md:w-75 rounded-lg shadow-md shadow-gray-800 overflow-hidden"
            style={{backgroundImage: 'repeating-linear-gradient(-45deg, black 0, black 10px, #691415 10px, #691415 20px'}}
        ><div className="w-full h-full bg-linear-to-tl from-transparent to-black/60 p-4">
            <h1 className="text-white font-medium text-shadow-sm text-shadow-black text-[24px]">Tarjeta rayada</h1>
            <h2 className="text-white text-shadow-xs text-shadow-black text-[18px]">Subtítulo de tarjeta rayada</h2>
        </div>
            
        </article>
    )
}