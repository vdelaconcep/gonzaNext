import ClassicButton from "@/components/ui/buttons/classic";
import VintageButton from "@/components/ui/buttons/vintage";

export default function BotonesPage() {
    return (
        <main className="bg-white flex-1 pt-16">
            
            <div className="flex justify-center p-10">
                <ClassicButton />
            </div>

            <div className="flex justify-center p-10">
                <VintageButton />
            </div>
            
        </main>
    )
}