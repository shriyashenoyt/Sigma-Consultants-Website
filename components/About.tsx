import { ShieldCheck, Cpu, Users } from 'lucide-react';

export default function About() {
    const stats = [
        { icon: <ShieldCheck className="text-engineering-yellow" />, label: "Safety Record", value: "100%" },
        { icon: <Cpu className="text-engineering-accent" />, label: "Smart Systems", value: "150+" },
        { icon: <Users className="text-engineering-accent" />, label: "Lead Engineers", value: "45" },
    ];

    return (
        <section id="about" className="py-24 bg-engineering-bg relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-engineering-yellow"></div>
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
                                alt="Construction Site"
                                className="shadow-2xl grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 border border-white/10"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-engineering-yellow p-8 text-engineering-bg shadow-xl">
                                <p className="text-4xl font-black">25+</p>
                                <p className="text-xs uppercase tracking-widest font-bold leading-tight text-center">Years of <br />Excellence</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 text-white">
                        <h2 className="text-engineering-yellow text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-engineering-yellow"></span> About Sigma Consultants
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                            Engineering solutions <br /> for a complex world.
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                            Sigma Consultants combines traditional civil expertise with modern data-driven
                            methodologies to prioritize structural integrity and safety.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    {stat.icon}
                                    <p className="text-3xl font-black">{stat.value}</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}