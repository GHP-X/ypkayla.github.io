import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Clock, XCircle } from "lucide-react";

const services = [
  { name: "Combat Module", status: "undetected" },
  { name: "Visuals Engine", status: "undetected" },
  { name: "Skin Changer", status: "undetected" },
  { name: "Bypass System", status: "updating" },
  { name: "Auth Server", status: "online" }
];

const statusConfig = {
  undetected: { color: "text-green-500", label: "Undetected", icon: CheckCircle2, bg: "bg-green-500/10", border: "border-green-500/20" },
  updating: { color: "text-orange-500", label: "Maintenance", icon: Clock, bg: "bg-orange-500/10", border: "border-orange-500/20" },
  detected: { color: "text-red-500", label: "Detected", icon: AlertCircle, bg: "bg-red-500/10", border: "border-red-500/20" },
  down: { color: "text-gray-500", label: "Down", icon: XCircle, bg: "bg-black", border: "border-white/10" },
  online: { color: "text-green-500", label: "Online", icon: CheckCircle2, bg: "bg-green-500/10", border: "border-green-500/20" }
};

export default function Status() {
  return (
    <div className="pt-32 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-display font-bold text-white mb-2">SYSTEM <span className="text-primary">STATUS</span></h1>
        <p className="text-muted-foreground mb-12 font-mono">Live health monitoring of GHP infrastructure.</p>
        
        <div className="space-y-4">
          {services.map((s, i) => {
            const config = statusConfig[s.status as keyof typeof statusConfig];
            return (
              <div key={i} className={`p-6 border ${config.border} ${config.bg} flex items-center justify-between`}>
                <span className="text-lg font-bold text-white uppercase tracking-wider">{s.name}</span>
                <div className={`flex items-center gap-2 ${config.color} font-mono font-bold uppercase`}>
                  <config.icon className="h-5 w-5" />
                  {config.label}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 p-6 border border-white/5 bg-white/[0.02]">
          <h3 className="text-white font-bold mb-2 uppercase">Recent Incidents</h3>
          <p className="text-sm text-muted-foreground">No critical failures reported in the last 48 hours. GHP is performing within normal parameters.</p>
        </div>
      </div>
    </div>
  );
}