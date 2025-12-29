import StripedCard from "@/components/ui/cards/striped";
import StripedBorderCard from "@/components/ui/cards/stripedBorder";
import StripedOverlapCard from "@/components/ui/cards/stripedOverlap";

export default function TarjetasPage() {
    return (
        <main className="bg-white flex-1 p-4 pt-22">
            <StripedCard />
            <StripedBorderCard
                addClass='mt-10'
                background="white" />
            <StripedOverlapCard addClass="mt-12"/>
            <StripedOverlapCard
                addClass="mt-12"
            background="black"/>
        </main>
    )
}