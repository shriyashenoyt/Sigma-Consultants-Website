import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-engineering-bg text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-black uppercase italic mb-6">Let's <span className="text-engineering-yellow">Connect</span></h1>
          <p className="text-slate-400 text-xl mb-12">Discussing structural integrity, project feasibility, or inspections? Reach out to our lead engineers directly.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center text-engineering-yellow border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold">9844069706</p><p className="text-xl font-bold">9900199705</p>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center text-engineering-yellow border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-bold">sathish@sigmaconsultants.net asha@sigmaconsultants.net</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="text-engineering-yellow" size={20} /> Office Hours
              </h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>By Appointment</span></li>
                <li className="flex justify-between text-engineering-yellow"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}