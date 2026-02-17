const RRLogo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="hsl(1, 97%, 44%)" />
    <text x="6" y="35" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="28" fill="white">
      RR
    </text>
  </svg>
);

export default RRLogo;
