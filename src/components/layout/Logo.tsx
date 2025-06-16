
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  // Colors approximated from the provided logo image
  const redOrange = "#D9534F";
  const darkTealSlate = "#3A4A53";
  const white = "#FFFFFF";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 40" {...props}>
      {/* PY Blocks */}
      <rect x="0" y="0" width="18" height="18" fill={redOrange} />
      <text
        x="9"
        y="9.5"
        fontFamily="Poppins, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill={white}
        textAnchor="middle"
        dominantBaseline="central"
      >
        P
      </text>
      <rect x="0" y="20" width="18" height="18" fill={darkTealSlate} />
      <text
        x="9"
        y="29.5"
        fontFamily="Poppins, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill={white}
        textAnchor="middle"
        dominantBaseline="central"
      >
        Y
      </text>
      
      {/* Text: PY INTERIORS */}
      <text
        x="28"
        y="20"
        fontFamily="Poppins, sans-serif"
        fontSize="18"
        fontWeight="bold"
        dominantBaseline="central"
      >
        <tspan fill={redOrange}>PY</tspan>
        <tspan fill={darkTealSlate}> INTERIORS</tspan>
      </text>
    </svg>
  );
}
