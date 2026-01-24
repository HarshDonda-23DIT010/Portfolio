import { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { Download, Github, Linkedin, Cpu, Globe, Code2, Sparkles, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resume from '@/assets/resume_harsh-donda.pdf';
import myProfile from '@/assets/profile.jpg';

const InteractiveHero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');

  const roles = ['AI / ML Enthusiast', 'Full Stack Developer', 'Data Science Learner'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - left) / width - 0.5,
        y: (e.clientY - top) / height - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let i = 0;
    const current = roles[roleIndex];
    const typing = setInterval(() => {
      setText(current.slice(0, i));
      i++;
      if (i > current.length) {
        clearInterval(typing);
        setTimeout(() => setRoleIndex((p) => (p + 1) % roles.length), 2000);
      }
    }, 70);
    return () => clearInterval(typing);
  }, [roleIndex]);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center py-10 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl md:ml-16 px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT CONTENT */}
        <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left md:ml-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-medium text-xs">
            <Sparkles className="w-3 h-3" />
            <span>CREATIVE DEVELOPER</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Harsh Donda
            </span>
          </h1>

          {/* SANSKRIT SHLOKA INTEGRATION */}
          <div className="relative py-2 group max-w-lg mx-auto lg:mx-0">
            <div className="pl-4 border-l-2 border-amber-500/40">
              <p className="text-lg md:text-xl font-serif tracking-wide leading-relaxed bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic drop-shadow-[0_0_8px_rgba(251,191,36,0.2)]">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br />
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-amber-500/50 font-bold">
                — Bhagavad Gita
              </p>
            </div>
          </div>

          <div className="h-8 text-xl md:text-2xl font-mono text-slate-400">
            &gt; {text}<span className="animate-pulse text-cyan-500">_</span>
          </div>

          <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed italic opacity-80">
            "Turning complex logic into elegant interactive experiences. Specialized in MERN and AI integration."
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
            <a href={resume} download target="_blank" rel="noopener noreferrer">
              <Button className="group relative h-14 px-8 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-2xl transition-all overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </a>

            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/HarshDonda-23DIT010" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/harsh-donda-b6a9612a7/" }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: CIRCULAR IMAGE PORTAL */}
        <div className="order-1 lg:order-2 flex items-center justify-center relative">

          {/* Rotating Orbits */}
          <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] border border-dashed border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-[380px] h-[380px] md:w-[520px] md:h-[520px] border border-dashed border-blue-500/10 rounded-full animate-[spin_35s_linear_infinite_reverse]" />

          {/* Main Visual Composition */}
          <div
            className="relative"
            style={{
              transform: `perspective(1000px) `,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Outer Neon Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-slate-900 overflow-hidden bg-slate-800 z-10 shadow-2xl shadow-cyan-500/20">
                <img
                  src={myProfile}
                  alt="Harsh Donda"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Floating Tech Badges around the Circle */}
              <div
                className="absolute -top-4 -right-4 z-20 w-12 h-12 bg-slate-900 border border-white/20 rounded-xl flex items-center justify-center text-cyan-400 shadow-xl"
                style={{ transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)` }}
              >
                <Cpu className="w-6 h-6" />
              </div>

              <div
                className="absolute bottom-4 -left-6 z-20 w-12 h-12 bg-slate-900 border border-white/20 rounded-xl flex items-center justify-center text-blue-400 shadow-xl"
                style={{ transform: `translate(${mouse.x * -40}px, ${mouse.y * -40}px)` }}
              >
                <Code2 className="w-6 h-6" />
              </div>

              <div
                className="absolute top-1/2 -right-12 z-20 w-10 h-10 bg-slate-900 border border-white/20 rounded-full flex items-center justify-center text-purple-400 shadow-xl"
                style={{ transform: `translate(${mouse.x * 50}px, ${mouse.y * -20}px)` }}
              >
                <Globe className="w-5 h-5" />
              </div>
            </div>

            {/* Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/20 blur-[120px] rounded-full -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveHero;