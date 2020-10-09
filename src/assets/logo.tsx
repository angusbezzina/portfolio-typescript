import React from 'react';
import classnames from 'classnames';
import SVGInline from "react-svg-inline";

import 'styles/common.css';

type LogoProps = {
  className?: string;
};

const logoSource = `<svg
        width="373.7934907586284"
        height="45.78813532575409"
        viewBox="0 0 373.7934907586284 45.78813532575409"
        class="css-1j8o68f"
      >
        <defs id="SvgjsDefs2130"></defs>
        <g
          id="SvgjsG2131"
          featurekey="nameLeftFeature-0"
          transform="matrix(0.7607012021449404,0,0,0.7607012021449404,-2.463434084033519,5.979372138389513)"
          fill="#ffffff"
        >
          <path d="M24.64 10.760000000000002 l11.24 27.72 c0.16 0.36 0.2 0.72 0.12 0.96 c-0.08 0.2 -0.24 0.6 -0.88 0.6 l-4.28 0 c-0.56 0 -0.96 -0.32 -1.16 -0.88 l-9.92 -24.76 l-0.04 -0.08 l-0.16 0 s-0.04 0.04 -0.08 0.12 l-5.12 12.96 l4.96 0 c0.52 0 0.96 0.32 1.16 0.8 l1.44 3.56 c0.12 0.4 0.08 0.84 -0.16 1.16 c-0.2 0.36 -0.6 0.56 -1.04 0.56 l-8.76 0 l-2.28 5.72 c-0.2 0.52 -0.6 0.84 -1.12 0.84 l-4.4 0 c-0.64 0 -0.84 -0.36 -0.88 -0.6 c-0.08 -0.24 -0.04 -0.6 0.08 -0.96 l11.16 -27.72 c0.56 -1.44 1.16 -2.4 1.76 -2.92 c0.16 -0.12 0.36 -0.28 0.6 -0.4 c0.8 -0.56 1.76 -0.84 2.76 -0.84 c2.2 0 4.12 1.48 4.76 3.56 z M73.929 7.039999999999999 c0.32 0 1.12 0.12 1.12 1.4 l0 26.44 c0 1.96 -0.28 3.28 -0.84 4 c-0.56 0.76 -1.44 1.16 -2.6 1.16 l-2.92 0 c-0.56 0 -1 -0.04 -1.36 -0.12 c-0.4 -0.08 -0.76 -0.2 -1.08 -0.44 c-0.32 -0.2 -0.6 -0.48 -0.88 -0.88 c-0.28 -0.36 -0.6 -0.84 -0.92 -1.48 l-12.68 -22.48 c-0.08 -0.12 -0.12 -0.12 -0.12 -0.12 l-0.2 0 l0 24.12 c0 1.24 -0.76 1.4 -1.12 1.4 l-3.56 0 c-0.36 0 -1.16 -0.16 -1.16 -1.4 l0 -26.44 c0 -1.96 0.28 -3.28 0.84 -4.04 c0.56 -0.72 1.44 -1.12 2.6 -1.12 l3 0 c0.52 0 1 0.04 1.4 0.08 c0.44 0.08 0.8 0.24 1.12 0.48 c0.28 0.2 0.56 0.52 0.84 0.92 c0.28 0.36 0.56 0.84 0.88 1.44 l12.64 22.48 c0.04 0.12 0.08 0.12 0.12 0.12 l0.2 0 l0 -24.12 c0 -1.28 0.76 -1.4 1.12 -1.4 l3.56 0 z M111.658 7.039999999999999 c0.32 0 1.12 0.16 1.12 1.4 l0 3.12 c0 1.28 -0.8 1.4 -1.12 1.4 l-17 0 c-0.84 0 -1.56 0.12 -2.08 0.28 c-0.52 0.2 -0.88 0.48 -1.2 0.88 c-0.28 0.44 -0.52 1.04 -0.64 1.76 c-0.16 0.8 -0.24 1.8 -0.24 3 l0 9.28 c0 1.2 0.08 2.2 0.24 3 c0.12 0.76 0.36 1.36 0.64 1.76 c0.32 0.44 0.68 0.72 1.2 0.88 c0.52 0.2 1.24 0.28 2.08 0.28 l11.2 0 c0.44 0 0.76 -0.12 0.96 -0.44 c0.16 -0.24 0.36 -0.76 0.36 -2 l-0.04 -5.6 l-9.96 0 c-0.32 0 -1.12 -0.12 -1.12 -1.44 l0 -3.04 c0 -1.28 0.8 -1.44 1.12 -1.44 l14.16 0 c0.52 0 1.4 0.24 1.4 1.76 l0 10.72 c0 2.68 -0.4 4.56 -1.16 5.68 c-0.8 1.16 -1.96 1.76 -3.44 1.76 l-13.68 0 c-1.76 0 -3.28 -0.24 -4.52 -0.68 s-2.28 -1.2 -3.08 -2.2 c-0.8 -1.04 -1.4 -2.36 -1.76 -3.92 c-0.36 -1.6 -0.52 -3.52 -0.52 -5.76 l0 -7.92 c0 -2.2 0.16 -4.12 0.52 -5.68 c0.36 -1.6 0.96 -2.88 1.76 -3.92 c0.76 -1 1.84 -1.76 3.08 -2.24 c1.24 -0.44 2.76 -0.68 4.52 -0.68 l17.2 0 z M149.947 7.039999999999999 c0.36 0 1.12 0.12 1.12 1.36 l0 19.08 c0 2.24 -0.16 4.16 -0.52 5.72 c-0.36 1.6 -0.92 2.92 -1.72 3.92 c-0.8 1.04 -1.84 1.76 -3.12 2.24 c-1.24 0.44 -2.76 0.64 -4.52 0.64 l-9 0 c-1.76 0 -3.28 -0.2 -4.52 -0.64 c-1.24 -0.48 -2.32 -1.2 -3.08 -2.24 c-0.8 -1 -1.4 -2.32 -1.76 -3.92 c-0.36 -1.56 -0.52 -3.48 -0.52 -5.72 l0 -19.08 c0 -1.24 0.8 -1.36 1.16 -1.36 l3.64 0 c0.36 0 1.12 0.12 1.12 1.36 l0 19.72 c0 1.2 0.08 2.24 0.2 3 c0.16 0.76 0.4 1.36 0.68 1.8 c0.32 0.4 0.68 0.68 1.2 0.88 c0.52 0.16 1.24 0.28 2.08 0.28 l8.64 0 c0.84 0 1.56 -0.12 2.08 -0.28 c0.52 -0.2 0.88 -0.48 1.2 -0.88 c0.28 -0.44 0.52 -1.04 0.64 -1.8 s0.2 -1.8 0.2 -3 l0 -19.72 c0 -1.24 0.76 -1.36 1.12 -1.36 l3.68 0 z M179.91600000000003 20.32 c2.08 0 3.68 0.76 4.76 2.2 c1.04 1.44 1.56 3.48 1.56 6.08 l0 3.52 c0 2.32 -0.52 4.2 -1.52 5.64 c-1.04 1.48 -2.68 2.24 -4.88 2.24 l-18.04 0 c-0.36 0 -1.16 -0.12 -1.16 -1.36 l0 -3.2 c0 -1.24 0.8 -1.36 1.16 -1.36 l17.08 0 c0.68 0 0.92 -0.28 1.08 -0.52 c0.24 -0.4 0.36 -0.96 0.36 -1.68 l0 -3.44 c0 -1.96 -0.8 -2.2 -1.4 -2.2 l-12 0 c-1.68 0 -3.52 -0.24 -4.76 -1.88 c-1 -1.4 -1.56 -3.64 -1.56 -6.4 l0 -3.04 c0 -2.32 0.52 -4.24 1.56 -5.68 c1.04 -1.48 2.64 -2.2 4.84 -2.2 l17.24 0 c0.32 0 1.12 0.12 1.12 1.36 l0 3.2 c0 1.24 -0.8 1.36 -1.12 1.36 l-16.28 0 c-0.68 0 -0.92 0.28 -1.08 0.52 c-0.2 0.4 -0.32 0.96 -0.32 1.68 l0 2.96 c0 1.96 0.76 2.2 1.36 2.2 l12 0 z"></path>
        </g>
        <g
          id="SvgjsG2132"
          featurekey="inlineSymbolFeature-0"
          transform="matrix(0.5219508249893171,0,0,0.5219508249893171,142.2222687978214,-3.1442318573433594)"
          fill="#ffffff"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M52.094,93.749c0.001,0,11.108-7.41,0.883-22.909c-4.773-7.235-12.596-14.971-11.701-22.63  c-1.015,0.883-1.937,1.859-2.38,2.453c-1.618,2.169-2.791,4.529-3.392,6.964c-0.697,2.823-0.515,5.795,1.102,8.686  c1.501,2.683,4.107,5.103,6.558,7.537c5.868,5.826,11.036,12.018,9.461,18.607C52.541,92.811,52.5,93.478,52.094,93.749z"
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M59.398,79.14c0.001-0.001,17.835-11.897,1.417-36.782C53.152,30.742,40.592,18.321,42.03,6.024  c-1.365,1.194-3.11,2.985-3.821,3.939c-2.598,3.482-4.481,7.271-5.446,11.181c-1.12,4.533-0.827,9.304,1.77,13.946  c2.41,4.308,6.594,8.193,10.53,12.102c9.421,9.355,17.719,19.295,15.19,29.876C60.116,77.635,60.049,78.706,59.398,79.14z"
          ></path>
        </g>
        <g
          id="SvgjsG2133"
          featurekey="nameRightFeature-0"
          transform="matrix(0.7607012021449404,0,0,0.7607012021449404,177.54550687287662,5.979372138389513)"
          fill="#ffffff"
        >
          <path d="M54.569 17.24 c0 2.48 -0.64 4.44 -2 5.8 c1.44 1.32 2.2 3.32 2.2 5.96 l0 2.68 c0 1.24 -0.12 2.4 -0.32 3.4 c-0.24 1.04 -0.56 1.92 -1.08 2.64 c-0.48 0.76 -1.16 1.32 -2 1.72 c-0.8 0.4 -1.8 0.6 -3 0.6 l-18 0 c-1.24 0 -2.4 -0.64 -3.04 -1.72 c-0.2 -0.36 -0.36 -0.8 -0.44 -1.24 l0.04 -27.32 c0.08 -0.32 0.24 -0.68 0.4 -1 c0.6 -0.96 1.6 -1.6 2.76 -1.68 l0 -0.04 l17.68 0 c2.44 0 4.2 0.68 5.24 2.04 c1.04 1.32 1.56 3.32 1.56 5.92 l0 2.24 z M32.769 33.88 c0 0.16 0.04 0.2 0.04 0.2 l13.92 0 c0.8 0 1.36 -0.16 1.68 -0.52 s0.48 -1 0.48 -1.92 l0 -2.72 c0 -0.88 -0.2 -1.52 -0.52 -1.92 c-0.36 -0.4 -1.04 -0.64 -2.08 -0.64 l-7.76 0 c-0.72 0 -1.32 -0.56 -1.32 -1.32 l0 -3.28 c0 -0.72 0.6 -1.32 1.32 -1.32 l7.76 0 c1.04 0 1.72 -0.2 2.04 -0.56 c0.36 -0.4 0.52 -1 0.52 -1.76 l0 -2.76 c0 -0.84 -0.16 -1.48 -0.48 -1.84 s-0.88 -0.56 -1.64 -0.56 l-13.88 0 c-0.04 0 -0.08 0.08 -0.08 0.24 l0 20.68 z M88.338 32.84 c0.36 0 1.16 0.12 1.16 1.36 l0 4.4 c0 1.24 -0.8 1.36 -1.16 1.36 l-14.2 0 c-1.76 0 -3.24 -0.2 -4.48 -0.68 c-1.28 -0.44 -2.32 -1.16 -3.12 -2.2 c-0.76 -1 -1.36 -2.32 -1.72 -3.92 c-0.28 -1.32 -0.48 -2.92 -0.52 -4.8 l0 -0.2 l0.08 -5.04 c0.08 -0.36 0.24 -0.68 0.44 -1 c0.56 -1 1.56 -1.6 2.72 -1.68 l20.64 -0.04 c0.32 0 1.12 0.12 1.12 1.36 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-17.88 0 c-0.04 0 -0.08 2.88 -0.08 2.88 l0.08 0.68 c0.12 0.76 0.36 1.36 0.68 1.8 c0.32 0.4 0.68 0.68 1.2 0.88 c0.56 0.16 1.24 0.28 2.08 0.28 l14.08 0 z M88.378 6.960000000000001 c0.32 0 1.12 0.16 1.12 1.4 l0 3.16 c0 1.24 -0.8 1.4 -1.12 1.4 l-23 -0.04 c-0.32 0 -1.08 -0.12 -1.08 -1.36 l0 -3.12 c0 -1.28 0.76 -1.44 1.08 -1.44 l23 0 z M122.307 7.039999999999999 c1.4 0 3.04 0.64 3.04 3.84 l0 4.44 c0 0.52 -0.04 0.88 -0.08 1.24 c-0.04 0.4 -0.16 0.76 -0.28 1.08 c-0.16 0.36 -0.36 0.64 -0.6 0.88 s-0.52 0.48 -0.88 0.72 l-18.52 13.32 c-0.04 0 -0.04 0.04 -0.04 0.08 l0 1.32 c0 0.04 0.04 0.12 0.12 0.12 l18.96 0 c0.32 0 1.12 0.12 1.12 1.36 l0 3.2 c0 1.24 -0.8 1.36 -1.12 1.36 l-21.96 0 c-1.08 0 -1.88 -0.32 -2.36 -1 c-0.48 -0.64 -0.68 -1.56 -0.68 -2.8 l0 -4.28 c0 -0.56 0 -1 0.04 -1.36 c0.08 -0.44 0.16 -0.8 0.28 -1.12 s0.32 -0.64 0.56 -0.88 c0.2 -0.24 0.48 -0.48 0.84 -0.72 l18.64 -13.44 c0.04 0 0.04 -0.04 0.04 -0.08 l0 -1.24 c0 -0.08 -0.04 -0.12 -0.12 -0.12 l-18.96 0 c-0.32 0 -1.12 -0.12 -1.12 -1.36 l0 -3.2 c0 -1.24 0.8 -1.36 1.12 -1.36 l21.96 0 z M158.15599999999998 7.039999999999999 c1.4 0 3.04 0.64 3.04 3.84 l0 4.44 c0 0.52 -0.04 0.88 -0.08 1.24 c-0.04 0.4 -0.16 0.76 -0.28 1.08 c-0.16 0.36 -0.36 0.64 -0.6 0.88 s-0.52 0.48 -0.88 0.72 l-18.52 13.32 c-0.04 0 -0.04 0.04 -0.04 0.08 l0 1.32 c0 0.04 0.04 0.12 0.12 0.12 l18.96 0 c0.32 0 1.12 0.12 1.12 1.36 l0 3.2 c0 1.24 -0.8 1.36 -1.12 1.36 l-21.96 0 c-1.08 0 -1.88 -0.32 -2.36 -1 c-0.48 -0.64 -0.68 -1.56 -0.68 -2.8 l0 -4.28 c0 -0.56 0 -1 0.04 -1.36 c0.08 -0.44 0.16 -0.8 0.28 -1.12 s0.32 -0.64 0.56 -0.88 c0.2 -0.24 0.48 -0.48 0.84 -0.72 l18.64 -13.44 c0.04 0 0.04 -0.04 0.04 -0.08 l0 -1.24 c0 -0.08 -0.04 -0.12 -0.12 -0.12 l-18.96 0 c-0.32 0 -1.12 -0.12 -1.12 -1.36 l0 -3.2 c0 -1.24 0.8 -1.36 1.12 -1.36 l21.96 0 z M175.52499999999998 7.039999999999999 c0.32 0 1.12 0.16 1.12 1.4 l0 30.2 c0 1.24 -0.8 1.4 -1.12 1.4 l-3.68 0 c-0.32 0 -1.12 -0.16 -1.12 -1.4 l0 -30.2 c0 -1.24 0.8 -1.4 1.12 -1.4 l3.68 0 z M214.494 7.039999999999999 c0.32 0 1.12 0.12 1.12 1.4 l0 26.44 c0 1.96 -0.28 3.28 -0.84 4 c-0.56 0.76 -1.44 1.16 -2.6 1.16 l-2.92 0 c-0.56 0 -1 -0.04 -1.36 -0.12 c-0.4 -0.08 -0.76 -0.2 -1.08 -0.44 c-0.32 -0.2 -0.6 -0.48 -0.88 -0.88 c-0.28 -0.36 -0.6 -0.84 -0.92 -1.48 l-12.68 -22.48 c-0.08 -0.12 -0.12 -0.12 -0.12 -0.12 l-0.2 0 l0 24.12 c0 1.24 -0.76 1.4 -1.12 1.4 l-3.56 0 c-0.36 0 -1.16 -0.16 -1.16 -1.4 l0 -26.44 c0 -1.96 0.28 -3.28 0.84 -4.04 c0.56 -0.72 1.44 -1.12 2.6 -1.12 l3 0 c0.52 0 1 0.04 1.4 0.08 c0.44 0.08 0.8 0.24 1.12 0.48 c0.28 0.2 0.56 0.52 0.84 0.92 c0.28 0.36 0.56 0.84 0.88 1.44 l12.64 22.48 c0.04 0.12 0.08 0.12 0.12 0.12 l0.2 0 l0 -24.12 c0 -1.28 0.76 -1.4 1.12 -1.4 l3.56 0 z M246.58299999999997 10.760000000000002 l11.24 27.72 c0.16 0.36 0.2 0.72 0.12 0.96 c-0.08 0.2 -0.24 0.6 -0.88 0.6 l-4.28 0 c-0.56 0 -0.96 -0.32 -1.16 -0.88 l-9.92 -24.76 l-0.04 -0.08 l-0.16 0 s-0.04 0.04 -0.08 0.12 l-5.12 12.96 l4.96 0 c0.52 0 0.96 0.32 1.16 0.8 l1.44 3.56 c0.12 0.4 0.08 0.84 -0.16 1.16 c-0.2 0.36 -0.6 0.56 -1.04 0.56 l-8.76 0 l-2.28 5.72 c-0.2 0.52 -0.6 0.84 -1.12 0.84 l-4.4 0 c-0.64 0 -0.84 -0.36 -0.88 -0.6 c-0.08 -0.24 -0.04 -0.6 0.08 -0.96 l11.16 -27.72 c0.56 -1.44 1.16 -2.4 1.76 -2.92 c0.16 -0.12 0.36 -0.28 0.6 -0.4 c0.8 -0.56 1.76 -0.84 2.76 -0.84 c2.2 0 4.12 1.48 4.76 3.56 z"></path>
        </g>
      </svg>`;

const Logo = (props: LogoProps) => {
  return <SVGInline svg={logoSource} className={classnames("logo", props.className)} />;
  
}

export default Logo;