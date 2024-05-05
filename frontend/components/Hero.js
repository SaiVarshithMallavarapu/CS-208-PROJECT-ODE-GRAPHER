import React, { useEffect } from 'react';
import Head from 'next/head';

function getTooltipGradientColor() {
  const tooltip = document.querySelector(".tooltip");
  const tooltipRect = tooltip.getBoundingClientRect();
  const gradientX = tooltipRect.left + tooltipRect.width / 2;
  const gradientY = tooltipRect.top + tooltipRect.height;
  const gradient = window.getComputedStyle(tooltip).getPropertyValue("background-image");
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx.rect(0, 0, 1, 1);
  const gradientObj = ctx.createLinearGradient(0, 0, 0, 1);
  gradientObj.style = gradient;
  ctx.fillStyle = gradientObj;
  ctx.fill();
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const red = imageData.data[0];
  const green = imageData.data[1];
  const blue = imageData.data[2];
  return `rgb(${red}, ${green}, ${blue})`;
}

function updateTooltipPosition(event) {
  const tooltip = event.currentTarget;
  const tooltipRect = tooltip.getBoundingClientRect();
  const positionX = (event.clientX - tooltipRect.left)*10 / tooltipRect.width * 100;
  const positionY = (event.clientY - tooltipRect.top)*10 / tooltipRect.height * 100;
  tooltip.style.setProperty("--position-x", positionX);
  tooltip.style.setProperty("--position-y", positionY);
  
  const gradient = window.getComputedStyle(tooltip).getPropertyValue("background-image");
  const tooltipGradientColor = getTooltipGradientColor(gradient);
  console.log(tooltipGradientColor);
}

;

const Hero = () => {
  useEffect(() => {
    const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => 
 //tooltip.addEventListener("mousemove", updateTooltipPosition)
                 null
)
  }, []);

  return (
    <div>
        
      <Head>
        <title>Next.js App</title>
      </Head>
      <main className='!z-[-1] flex flex-col items-center justify-center'>
        <h1 className="tooltip text-black text-center !opacity-100">Kuramoto</h1>
        <p className='text-center mx-10 font-bold text-xl invert'>Syncing Minds, Harmonizing Worlds: Kuramoto Oscillator</p>
      </main>
      <style jsx global>{`
        @font-face {
          font-family: "Mona Sans";
          src: url("https://assets.codepen.io/64/Mona-Sans.woff2") format("woff2 supports variations"), url("https://assets.codepen.io/64/Mona-Sans.woff2") format("woff2-variations");
          font-weight: 100 1000;
        }
        @property --bg-1-x {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-2-x {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-2-y {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-3-x {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-3-y {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        :root {
          --bg-color: hsl(540deg 20% 12%);
          --bg-grain: url("https://assets.codepen.io/64/svgNoise2.svg");
          --bg-grain: url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          --shadow-size: max(140px, 40vw);
          --shadow-size-fallback: 40vw;
          --shadow-blur: 60;
          --color-1: #6328da;
          --color-2: #ff1bf1;
          --color-3: #008cea;
          --bg-1-x: 0;
          --bg-1-y: 0;
          --bg-2-x: 0;
          --bg-2-y: 0;
          --bg-3-x: 0;
          --bg-3-y: 0;
        }
        
        @supports (color: color(display-p3 1 1 1)) {
          :root {
            --color-1: color(display-p3 0.36 0.17 0.82);
            --color-2: color(display-p3 0.95 0.04 0.95);
            --color-3: color(display-p3 0.01 0.53 0.99);
          }
        }
        @media (min-width: 960px) {
          :root {
            --shadow-size: max(72px, 25vw);
            --shadow-size-fallback: 25vw;
            --shadow-blur: 80;
          }
        }
        * {
          box-sizing: border-box;
          outline: calc(var(--debug) * 1px) dashed red;
        }
        *:before, *:after {
          outline: calc(var(--debug) * 1px) dashed red;
        }
        
        html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
        }
        
        body {
          font-family: "Mona Sans", sans-serif;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          background: #ffffff;
          z-index: -1;
          position: relative;
        }
        body:before {
          content: "";
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(circle var(--shadow-size, var(--shadow-size-fallback)) at 20vw 0, var(--color-1, red) 100%, transparent 0), radial-gradient(circle var(--shadow-size, var(--shadow-size-fallback)) at 100vw 0, var(--color-2, red) 100%, transparent 0), radial-gradient(circle calc(var(--shadow-size, var(--shadow-size-fallback)) * 1.2) at 50vw 115vh, var(--color-3, red) 100%, transparent 0);
          top: 0;
          left: 0;
          opacity: 0.5;
          filter: blur(calc(var(--shadow-blur) * 1px));
          mix-blend-mode: hue;
        }
        body:after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          filter: contrast(145%) brightness(650%) invert(100%);
          mix-blend-mode: screen;
          background-size: 500px;
        }
        
        main {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: grid;
          place-items: center;
          z-index: 2;
        }
        main h1 {
          color: white;
          font-size: max(72px, 15vw);
        //   mix-blend-mode: ;
          font-weight: 650;
          font-stretch: 110%;
          letter-spacing: -0.04em;
          background: var(--bg-grain), conic-gradient(from 140deg at calc(var(--bg-1-x) * 1%) 90%, hsl(30deg, 100%, 5%), hsl(238deg, 100%, 5%), hsl(60deg, 100%, 99%), hsl(248deg, 100%, 31%), hsl(315deg, 64%, 51%), hsl(25deg, 95%, 61%), hsl(55deg, 100%, 75%), hsl(60deg, 100%, 99%), hsl(199deg, 94%, 74%), hsl(236deg, 95%, 28%), hsl(244deg, 100%, 4%)), radial-gradient(ellipse at calc(var(--bg-2-x) * 1%) calc(var(--bg-2-y) * 1%), white 12%, transparent 35%), radial-gradient(ellipse at calc(var(--bg-3-x) * 1%) calc(var(--bg-3-y) * 1%), hsl(212deg, 94%, 68%), transparent 35%);
          background-repeat: repeat;
          background-size: 500px, cover;
          background-blend-mode: color-burn;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 1;
          animation: bg 20s linear infinite alternate;
        }
        
        @keyframes bg {
          0% {
            --bg-1-x: calc(50 / 2);
            --bg-2-y: calc(80 / 2);
            --bg-2-x: calc(70 / 2);
            --bg-3-y: calc(40 / 2);
            --bg-3-x: calc(90 / 2);
          }
          25% {
            --bg-1-x: 30;
            --bg-2-y: 50;
            --bg-2-x: 80;
            --bg-3-y: 20;
            --bg-3-x: 70;
          }
          50% {
            --bg-1-x: 10;
            --bg-2-y: 40;
            --bg-2-x: 30;
            --bg-3-y: 80;
            --bg-3-x: 50;
          }
          75% {
            --bg-1-x: 70;
            --bg-2-y: 10;
            --bg-2-x: 50;
            --bg-3-y: 30;
            --bg-3-x: 40;
          }
          100% {
            --bg-1-x: calc(50 / 2);
            --bg-2-y: calc(80 / 2);
            --bg-2-x: calc(70 / 2);
            --bg-3-y: calc(40 / 2);
            --bg-3-x: calc(90 / 2);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;