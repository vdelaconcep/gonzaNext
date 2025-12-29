
interface ContrastOverlapCardProps {
    addClass?: string
    title?: string
    subtitle?: string
    version: number
}

export default function ContrastOverlapCard({ addClass, title, subtitle, version }: ContrastOverlapCardProps) {

    const cardTitleAndSubtitle = <>
            <h1 className="font-medium text-[24px] ">{title || `Contraste versión ${version}`}</h1>
            <h2 className="text-[18px]">{subtitle || `Subtítulo contraste versión ${version}`}</h2>
    </>
    
    return (
        <article className={`${addClass && addClass} w-full md:w-75 pr-4 relative`}>
            <div className={`bg-${version === 1 ? 'black' : 'red-700'} w-full rounded-lg p-4 shadow-md shadow-gray-800`}>
                <div className="invisible">
                    {cardTitleAndSubtitle}
                </div>
            </div>
            <div className={`bg-${version === 1 ? 'red-700' : 'white inset-ring-2 inset-ring-black'} rounded-lg  absolute -top-1 left-2 right-2 z-2 p-3 shadow-md shadow-gray-800`}>
                <div className="invisible h-1.25">
                </div>
                <div className="invisible">
                    {cardTitleAndSubtitle}
                </div>
            </div>
            <div className={`bg-${version === 1 ? 'white inset-ring-2 inset-ring-black text-black' : 'black text-white'} rounded-lg inset-ring-2 inset-ring-black absolute -top-2 left-4 right-0 z-3 p-3 shadow-md shadow-gray-800`}>
                {cardTitleAndSubtitle}
            </div>
            
        </article>
    )
}