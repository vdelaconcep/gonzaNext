import ClassicButton from "@/components/ui/buttons/classic";

export default function Home() {
  return (
    <main className="flex-1 bg-white text-black min-h-dvh pt-16">
      <div className='p-2'>
          <h1 className='text-5xl my-5 text-center'>
              Home
          </h1>
          <p className='font-mono'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt velit exercitationem explicabo eos facere cupiditate fugit laudantium cum voluptatibus cumque, fugiat nihil impedit ab, accusamus voluptas suscipit sed quam?
          </p>
          <article className='my-10 flex justify-end pr-5'>
              <ClassicButton text="Ingresar" />
          </article>
      </div>
      
    </main>
  );
}
