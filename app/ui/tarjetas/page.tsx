import OverlapCard from "@/components/ui/cards/overlap"

export default function TarjetasPage() {
    const colors: ('white' | 'black' | 'red' | 'striped') [] = ['white', 'black', 'red', 'striped'];

    return (
        <main className="bg-white flex-1 p-4 pt-22 flex flex-col items-center">
            {colors.map(eachColor => {

                let cards: React.ReactElement[] = [];

                for (let i = 1; i <= 3; i++) {
                    for (let j = 1; j <= 4; j++) {

                        if ((i == 1 && j > 1) || (i == 2 && j > 3)) continue;

                        cards.push(
                            <OverlapCard
                                key={`${eachColor}-${i}-${j}`}
                                addClass="mt-12"
                                color={eachColor}
                                layers={i}
                                version={j}/>
                        )
                    }
                    
                };

                return cards
            })
            }
        </main>
    )
}