import { Shield, Zap, Crosshair, Eye, PenTool, Cpu, Terminal, ChevronRight, Check, Disc, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FeatureCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
    <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-display italic font-bold tracking-wide uppercase text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
              <span className="text-primary/50 mt-1">›</span> {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-primary rotate-45 animate-pulse"></div>
            <span className="font-display font-black italic text-xl tracking-tighter text-white">
              GHP <span className="text-xs font-mono font-normal opacity-50 tracking-widest not-italic ml-2">PROTOCOL</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">FEATURES</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">PRICING</button>
            <button onClick={() => scrollToSection('executors')} className="hover:text-primary transition-colors">EXECUTORS</button>
            <a href="https://discord.gg/WphXNdgtPR" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <Disc className="h-4 w-4" /> DISCORD
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/5 font-mono px-4 py-1 text-xs tracking-[0.2em] animate-fade-in">
              RIVALS AUTOMATION PROTOCOL
            </Badge>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black italic tracking-tighter text-white mb-6 leading-[0.9]">
              GHP <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">FRAMEWORK</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Undetected. Stable. Comprehensive. <br/>
              <span className="text-white font-medium">Trusted by 12,000+ users.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-none h-14 px-8 font-mono font-bold text-sm tracking-wider bg-primary hover:bg-primary/90 text-black w-full text-black hover:text-black italic sm:w-auto" onClick={() => scrollToSection('pricing')}>
                GET STARTED
              </Button>
              <Button size="lg" variant="outline" className="rounded-none h-14 px-8 font-mono font-bold text-sm tracking-wider border-white/10 hover:bg-white/5 hover:text-white w-full italic sm:w-auto" onClick={() => scrollToSection('features')}>
                EXPLORE FEATURES <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 relative bg-black/20 border-y border-white/5">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-black italic text-white mb-4">CORE MODULES</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl">
              Engineered for stability and control. Featuring direct remote hooks and intelligent safety limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Crosshair} 
              title="Combat" 
              items={["Silent Aim (All Weapons)", "Rage Bot with Spin", "Aim Lock (Head)", "Auto Aim (Silent/Visible)", "Persistent Aim Logic", "Prediction & Team Check", "Target Behind Walls"]} 
            />
            <FeatureCard 
              icon={Shield} 
              title="Defensive" 
              items={["Full Auto (Safe Heights)", "Auto Retreat", "No Cooldowns", "No Recoil / Spread", "Height Limits (Y=300)", "Anti-Out of Bounds"]} 
            />
            <FeatureCard 
              icon={Eye} 
              title="Visuals" 
              items={["Player Chams (Custom Color)", "Glow Chams & Lights", "ESP Boxes & Health Bars", "Enemy Weapon Display", "Sixth Sense (Tripmines)", "Katana Warning"]} 
            />
            <FeatureCard 
              icon={PenTool} 
              title="Customization" 
              items={["Skin Changer (Unlock All)", "Finishers & Charms", "Wraps & Emotes", "Model Color Override", "Mesh Wrapping", "Device Spoofing"]} 
            />
            <FeatureCard 
              icon={Zap} 
              title="Movement" 
              items={["Fly with Speed Control", "Noclip (Toggle)", "Stick to Target", "Third Person Mode", "Infinite Stamina"]} 
            />
            <FeatureCard 
              icon={Terminal} 
              title="Utility" 
              items={["Auto Match Queue", "System Info Overlay", "Keybind Display", "Auto Config Save/Load", "Hit/Kill Notifications", "Auto Reload"]} 
            />
          </div>
        </div>
      </section>

      {/* Tech Specifications */}
      <section className="py-12 border-b border-white/5 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-mono text-muted-foreground">
             <div className="flex items-center gap-2 text-primary whitespace-nowrap">
               <Cpu className="h-4 w-4" /> SYSTEM STATUS
             </div>
             <div className="h-px md:h-4 w-full md:w-px bg-white/10"></div>
             <div className="flex-1 overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
               <p className="whitespace-nowrap animate-marquee text-white/50">
                 silent aim · rage bot · full auto · no cooldowns · no recoil · third person · fly · noclip · stick to target · ESP · chams · glow · enemy weapons · sixth sense · skin changer · device spoof · auto match · system overlay · direct remote hooks · height-limited safety · persistent config
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Executors */}
      <section id="executors" className="py-16 px-6 text-center">
        <div className="container mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">Supported Environments</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Seliware", "Volt", "Cryptic", "Potassium", "Wave", "Script-Ware"].map((ex) => (
              <Badge key={ex} variant="outline" className="px-6 py-2 border-white/10 text-white font-mono uppercase tracking-widest hover:border-primary/50 hover:bg-primary/5 cursor-default transition-all">
                {ex}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-display font-black italic text-white mb-4">ACCESS TIERS</h2>
             <p className="text-muted-foreground">Choose your level of control.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Skin Changer */}
            <Card className="bg-black border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
              <CardHeader className="pb-4">
                <CardTitle className="font-display italic text-2xl text-white">SKIN CHANGER</CardTitle>
                <CardDescription className="font-mono text-xs uppercase tracking-wider">Visual Dominance Only</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-bold text-white">€4.00</span>
                  <span className="text-sm font-mono text-muted-foreground">/ 1,200 RBX</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-muted-foreground font-mono">
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> Unlock All Skins</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> Wraps & Finishers</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> Emotes & Charms</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> No Game Freezes</li>
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white text-white hover:text-black rounded-none h-12 font-bold tracking-wider transition-all" onClick={() => toast({ title: "Coming Soon", description: "Payment gateway integration in progress." })}>
                  SELECT PLAN
                </Button>
              </CardContent>
            </Card>

            {/* Full Package */}
            <Card className="bg-black border-primary shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] relative overflow-hidden scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-black text-[10px] font-bold px-3 py-1 font-mono uppercase">
                Recommended
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="font-display italic text-3xl text-primary">FULL PROTOCOL</CardTitle>
                <CardDescription className="font-mono text-xs uppercase tracking-wider">Total Server Control</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-white">€7.00</span>
                  <span className="text-sm font-mono text-muted-foreground">/ 2,100 RBX</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-white/80 font-mono">
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> <span className="text-white font-bold">Everything in Skin Changer</span></li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> Silent Aim & Rage Bot</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> ESP & Visuals Suite</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> Flight & Movement Mods</li>
                  <li className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> Config Persistence</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black rounded-none h-12 font-bold tracking-wider transition-all shadow-lg shadow-primary/20" onClick={() => toast({ title: "Coming Soon", description: "Payment gateway integration in progress." })}>
                  GET FULL ACCESS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Text */}
      <section className="py-24 px-6 border-t border-white/5 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <Info className="h-8 w-8 text-muted-foreground mx-auto mb-6 opacity-50" />
          <p className="text-muted-foreground leading-relaxed font-light">
            The GHP framework is maintained by a collective of security engineers and game researchers. 
            We do not promote unfair advantage in competitive play—this toolkit is intended for 
            educational experimentation and private servers. All purchases support ongoing reverse‑engineering research.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-primary rotate-45"></div>
            <span className="font-display font-bold italic text-white/50">GHP</span>
          </div>
          
          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
             <a href="#" className="hover:text-white transition-colors">STATUS</a>
             <a href="#" className="hover:text-white transition-colors">CONTACT</a>
             <a href="#" className="hover:text-white transition-colors">WHITEPAPER</a>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground font-mono">© 2025 GHP · OPERATED BY TEAM GHP</p>
            <p className="text-[10px] text-white/10 mt-1 font-mono">INSPIRED BY YABUJIN.CC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
