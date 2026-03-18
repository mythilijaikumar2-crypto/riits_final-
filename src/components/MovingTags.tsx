
interface MovingTagsProps {
  tags: string[];
  speed?: number; // Speed in seconds
  direction?: "left" | "right";
}

const MovingTags = ({ 
  tags, 
  speed = 40, 
  direction = "left" 
}: MovingTagsProps) => {
  // Duplicate tags for seamless infinite scroll
  const doubledTags = [...tags, ...tags];

  return (
    <div className="relative bg-slate-950 border-y border-white/5 py-8 overflow-hidden group">
      {/* ── GRADIENT FADES ── */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* ── AMBIENT BACKGROUND GLOW ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      {/* ── MARQUEE CONTAINER ── */}
      <div className="flex w-fit relative z-0">
        <div 
          className={`flex gap-4 items-center whitespace-nowrap animate-marquee-${direction} group-hover:[animation-play-state:paused]`}
          style={{ animationDuration: `${speed}s` }}
        >
          {doubledTags.map((tag, idx) => (
            <span
              key={`${tag}-${idx}`}
              className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingTags;
