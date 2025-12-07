import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] -z-10" />
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Design in <br />
            <span className="text-purple-500">Dimensions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-10">
            Transform text descriptions and 2D floorplans into immersive 3D models instantly using advanced AI.
          </p>
          
          <div className="flex gap-4">
            <Link href="/signup" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
              Start Creating
            </Link>
            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium">
              View Gallery
            </button>
          </div>
        </section>

        {/* Placeholder Content for Scroll Testing */}
        <section className="py-32 px-4 border-t border-white/10 bg-black/50">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Innovative Workflows</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="h-96 rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-bold mb-4">Text to 3D</h3>
                        <p className="text-white/60">Generate detailed 3D assets from simple text prompts.</p>
                    </div>
                    <div className="h-96 rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-bold mb-4">Floorplan to 3D</h3>
                        <p className="text-white/60">Convert architectural blueprints into walkable 3D spaces.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
