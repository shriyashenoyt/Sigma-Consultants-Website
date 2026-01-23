import { Award, Trophy, Star, ShieldCheck, Milestone } from 'lucide-react';

export default function AwardsPage() {
  const achievements = [
    { title: "25 Years of Excellence", year: "2026", category: "Structural Consultancy", icon: <Trophy size={32} /> },
    { title: "10,000 Projects Milestone", year: "2024", category: "Project Delivery", icon: <Milestone size={32} /> },
    { title: "Industrial Design Lead", year: "2021", category: "Industrial Sector", icon: <Award size={32} /> },
    { title: "Safety Integrity Award", year: "2018", category: "On-site Excellence", icon: <ShieldCheck size={32} /> },
  ];

  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <p className="text-engineering-yellow text-xs font-black uppercase tracking-[0.5em] mb-4">Silver Jubilee Year</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-6">
            Awards & <span className="text-engineering-yellow">Honors.</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Our commitment to structural safety and mathematical precision has been 
            recognized by industry leaders for over a quarter-century.
          </p>
        </div>

        {/* Awards Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, i) => (
            <div key={i} className="group relative bg-white/5 border border-white/10 p-12 hover:border-engineering-yellow transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <div className="text-engineering-yellow group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <span className="text-4xl font-black text-white/10 group-hover:text-engineering-yellow/20 italic">0{i + 1}</span>
              </div>
              
              <div className="aspect-video bg-slate-900/50 mb-8 flex items-center justify-center italic text-white/10 border border-white/5">
                [Award Photo Placeholder]
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{item.title}</h3>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  <span>{item.category}</span>
                  <span className="text-engineering-yellow">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}