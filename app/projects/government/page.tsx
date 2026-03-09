'use client'
import PageTransition from '@/components/PageTransition';

export default function CategoryPage({ params }: { params: { category: string } }) {
  // In a real app, you'd fetch specific images based on the 'category' slug
  const projectPhotos = [1, 2, 3, 4, 5, 6]; 

  return (
    <PageTransition>
      <main className="min-h-screen bg-engineering-bg pt-32 pb-24 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-black uppercase italic mb-12">
            Government <span className="text-engineering-yellow">Projects</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectPhotos.map((id) => (
              <div key={id} className="aspect-video bg-slate-900 border border-white/10 group overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 uppercase italic font-bold">
                  Project Image {id}
                </div>
                {/* Overlay on hover for project details */}
                <div className="absolute inset-0 bg-engineering-yellow/90 text-black opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center p-8">
                  <h4 className="font-black uppercase text-xl">Factory Complex Alpha</h4>
                  <p className="text-sm font-bold">Structural Design & Site Inspection</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}