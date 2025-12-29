import StripedCard from "@/components/ui/cards/striped";
import StripedBorderCard from "@/components/ui/cards/stripedBorder";
import StripedOverlapCard from "@/components/ui/cards/stripedOverlap";
import ContrastOverlapCard from "@/components/ui/cards/contrastOverlap";

export default function TarjetasPage() {
    return (
        <main className="bg-white flex-1 p-4 pt-22 flex flex-col items-center">
            <StripedCard />
            <StripedBorderCard
                addClass='mt-10'
                background="white" />
            <StripedOverlapCard addClass="mt-12"/>
            <StripedOverlapCard
                addClass="mt-12"
                background="black" />
            <ContrastOverlapCard
                addClass="mt-12"
                version={1}/>
            <ContrastOverlapCard
                addClass="mt-12"
                version={2}/>
        </main>
    )
}