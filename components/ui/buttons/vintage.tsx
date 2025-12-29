export default function VintageButton() {
    return (
        <div className={`relative w-[150px] h-[50px] bg-black rounded-xs`}>
            <button className={`absolute top-[3px] left-[3px] bg-red-600 text-white font-mono w-[145px] h-[45px] rounded-sm border-t-red-400 border-t-3 border-l-red-400 border-l-3 shadow-lg shadow-gray-800 active:scale-99 active:shadow-none active:border-t active:border-l`}>
            Vintage
            </button>
        </div>
    )
}