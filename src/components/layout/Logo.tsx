
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  // New colors for Aadhi Constructions
  const primaryBlue = "hsl(217, 91%, 60%)";
  const accentGold = "hsl(45, 86%, 62%)";
  const darkText = "hsl(215, 28%, 17%)";
  const white = "#FFFFFF";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 40" {...props}>
      {/* AC Blocks */}
      <rect x="0" y="0" width="18" height="38" fill={primaryBlue} />
      <text
        x="9"
        y="10"
        fontFamily="Poppins, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill={white}
        textAnchor="middle"
        dominantBaseline="central"
      >
        A
      </text>
      <text
        x="9"
        y="29"
        fontFamily="Poppins, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill={white}
        textAnchor="middle"
        dominantBaseline="central"
      >
        C
      </text>
      
      {/* Text: AADHI CONSTRUCTIONS */}
      <text
        x="28"
        y="20"
        fontFamily="Poppins, sans-serif"
        fontSize="16"
        fontWeight="bold"
        dominantBaseline="central"
        fill={darkText}
      >
        <tspan>AADHI</tspan>
        <tspan x="28" dy="1.2em" fontSize="11" fontWeight="normal">CONSTRUCTIONS & INTERIORS</tspan>
      </text>
    </svg>
  );
}
