interface OverlapCardProps {
    addClass?: string
    title?: string
    subtitle?: string
    layers?: number
    color?: 'white' | 'red' | 'black' | 'striped'
    version?: number
}

export default function OverlapCard({ addClass, title, subtitle, layers, color, version }: OverlapCardProps) {

    const versionToUse = () => {
        let value
        if (!layers || layers == 1 || !version) {
            value = 1
        } else if (layers == 2) {
            if (version <= 3) value = version
            if (version > 3) {
                if (color === 'striped') {
                    value = 2
                } else value = 1
            }
        } else if (layers == 3) {
            if (version <= 4) value = version
        }
        return value
    }

    const layersToUse = layers && layers > 3 ? 3 : !layers ? 1 : layers

    const cardContent = <>
            <h1 className="font-medium text-[24px] ">{title || `${color? (color.charAt(0).toUpperCase() + color.slice(1)) : 'White'} overlap card v ${layersToUse}.${versionToUse() || 1}`}</h1>
            <h2 className="text-[18px]">{subtitle || `Card subtitle`}</h2>
    </>

    const classNameTopLayer = `rounded-sm col-start-1 row-start-1 shadow-sm shadow-gray-600 relative z-3
        ${!color || color === 'white' ? 'bg-linear-to-t from-white to-gray-100 inset-ring-2 inset-ring-black text-black' :
            color === 'black' ? 'bg-linear-to-t from-black to-gray-900 text-white' :
            color === 'red' ? 'bg-linear-to-t from-red-900 to-red-700 text-white' :
            'overflow-hidden text-white text-shadow-xs text-shadow-black'}
        ${(layersToUse == 1) ? 'top-0 left-0' : layersToUse == 2 ? '-top-2 left-2' : '-top-4 left-4'}`
    
    const classNameSecondLayer = `rounded-sm col-start-1 row-start-1 self-stretch justify-self-stretch shadow-sm shadow-gray-600 relative z-2
        ${versionToUse() == 1 ?
                !color || color !== 'black' ? 'bg-black' : 'bg-white inset-ring-2 inset-ring-black' :
            versionToUse() == 2 ?
                !color || (color !== 'red' && color !== 'striped') ? 'bg-red-800' : 'bg-white inset-ring-2 inset-ring-black' :
            versionToUse() == 3 ? 'bg-red-900' :
                !color || color === 'white' || color === 'red' ? 'bg-black' : 'bg-white inset-ring-2 inset-ring-black'}

        ${(layersToUse == 1) ? 'hidden' : layersToUse == 2 ? 'top-0 left-0' : '-top-2 left-2'} `
    
    const classNameThirdLayer = `rounded-sm col-start-1 row-start-1 self-stretch justify-self-stretch shadow-sm shadow-gray-600 relative z-1
        ${versionToUse() == 1 ?
            !color || (color !== 'red' && color !== 'striped') ? 'bg-red-800' : 'bg-white inset-ring-2 inset-ring-black' :
            versionToUse() == 2 || versionToUse() == 3 ?
                !color || color !== 'black' ? 'bg-black' : 'bg-white inset-ring-2 inset-ring-black' :color === 'striped' ? 'bg-black' : ''}

        ${(layersToUse == 1 || layersToUse == 2) ? 'hidden' : 'top-0 left-0'} `
    
    const stripedPatternStyle = 'repeating-linear-gradient(-45deg, black 0, black 10px, #691415 10px, #691415 20px'

    return (
        <article className={`${addClass && addClass} w-full md:w-80 grid ${(!layers || layers == 1) ? 'pr-0' : layers == 2 ? 'pr-2' : 'pr-4'}`}>
            <div
                className={classNameThirdLayer}
                style={{backgroundImage: color !== 'striped' && versionToUse() == 4 ? stripedPatternStyle : ''}}>
            </div>
            <div
                className={classNameSecondLayer}
                style={{backgroundImage: color !== 'striped' && versionToUse() == 3 ? stripedPatternStyle : ''}}>
            </div>
            <div
                className={classNameTopLayer}
                style={{backgroundImage: color === 'striped' ? stripedPatternStyle : ''}}
            ><div className={`w-full h-full p-3 ${color === 'striped' ? 'bg-linear-to-tl from-transparent to-black/60' : '' }`}>
                {cardContent}
            </div>
            </div>
        </article>
    )
}