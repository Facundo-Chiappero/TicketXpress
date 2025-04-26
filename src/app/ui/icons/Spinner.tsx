export function Spinner() {
  return (
    <div className="relative inline-block w-20 h-20 text-current">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 left-0 w-full h-full animate-spinner"
          style={{
            transform: `rotate(${i * 30}deg)`,
            animationDelay: `${-1.1 + i * 0.1}s`,
          }}
        >
          <div className="absolute top-[3.2px] left-[36.8px] w-[6.4px] h-[17.6px] rounded-[20%] bg-current"></div>
        </div>
      ))}
    </div>
  );
}
