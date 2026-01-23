export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-engineering-yellow text-xs font-black uppercase tracking-[0.5em] mb-4">Silver Jubilee Milestone</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-6">10,000+ <span className="text-white not-italic">Projects</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">From industrial powerhouses in India to residential landmarks globally, Sigma Consultants has set the standard for structural safety for 25 years.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-video bg-slate-900 border border-white/10 flex items-center justify-center italic text-sm">
              Project Image Placeholder
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}