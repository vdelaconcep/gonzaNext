
export default function StripedCard() {
    return (
        <article
            className="w-full md:w-75 rounded-lg p-4 shadow-sm shadow-gray-800"
            style={{backgroundImage: 'repeating-linear-gradient(-45deg, black 0, black 10px, #691415 10px, #691415 20px'}}
        >
            <h1 className="text-white font-medium text-shadow-sm text-shadow-black text-[24px]">Tarjeta rayada</h1>
            <h2 className="text-white text-shadow-xs text-shadow-black text-[18px]">Subtítulo de tarjeta rayada</h2>
        </article>
    )
}