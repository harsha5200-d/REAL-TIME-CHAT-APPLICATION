const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div 
      className="hidden lg:flex items-center justify-center p-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-md text-center relative z-10 text-white">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square animate-space-bounce rounded-2xl
                backdrop-blur-md bg-white/10 border border-white/20 
                shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                hover:bg-white/20 hover:border-white/40 transition-all duration-300
              `}
              style={{
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + (i % 4)}s`
              }}
            />
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-4 drop-shadow-md">{title}</h2>
        <p className="text-white/70 drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;