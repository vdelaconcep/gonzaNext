interface StripedOverlapCardProps {
    addClass?: string
    background?: 'black' | 'white'
}

export default function StripedOverlapCard({ addClass, background }: StripedOverlapCardProps) {
    return (
        <article className={`${addClass && addClass} w-full md:w-75 pr-4 relative`}>
            <div
                className="w-full rounded-lg p-4 shadow-sm shadow-gray-800"
                style={{ backgroundImage: 'repeating-linear-gradient(-45deg, black 0, black 10px, #691415 10px, #691415 20px' }}
            >
                <div className="invisible">
                    <h1 className="font-medium text-[24px] ">Rayada Overlap</h1>
                    <h2 className="text-[18px]">Subtítulo de rayada overlap</h2>
                </div>
            </div>
            <div className={`bg-${background || 'white'} rounded-lg inset-ring-2 inset-ring-black absolute -top-2 left-4 right-0 z-2 p-3 shadow-md shadow-gray-800`}>
                <h1 className={`text-${background === 'black' ? 'white' : 'black'} font-medium text-[24px]`}>Rayada Overlap</h1>
                <h2 className={`text-${background === 'black' ? 'white' : 'black'} text-[18px]`}>Subtítulo de rayada overlap</h2>
            </div>
            
        </article>
    )
}