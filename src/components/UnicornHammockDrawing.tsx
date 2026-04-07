import { useEffect, useRef } from "react";

const UnicornHammockDrawing = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll("path, ellipse, circle, line");
    paths.forEach((el, i) => {
      const path = el as SVGElement;
      if (el instanceof SVGPathElement) {
        const length = el.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      } else {
        // For ellipses/circles, estimate perimeter
        path.style.strokeDasharray = "1000";
        path.style.strokeDashoffset = "1000";
      }
      path.style.animation = `drawLine 2s ease-out ${i * 0.15}s forwards`;
    });
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
      <style>{`
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      <svg
        ref={svgRef}
        viewBox="0 0 800 600"
        className="w-full h-full max-w-none"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        stroke="hsl(40, 10%, 25%)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.13"
      >
        {/* Left tree/pole */}
        <path d="M 150 520 Q 145 400 155 280 Q 160 220 148 160 Q 142 130 150 100" />
        <path d="M 148 160 Q 120 140 100 120" />
        <path d="M 150 180 Q 180 155 195 135" />
        <path d="M 152 210 Q 125 195 108 175" />
        <path d="M 150 130 Q 135 110 125 95" />
        <path d="M 150 130 Q 165 108 175 90" />

        {/* Right tree/pole */}
        <path d="M 650 520 Q 655 400 645 280 Q 640 220 652 160 Q 658 130 650 100" />
        <path d="M 652 160 Q 680 140 700 120" />
        <path d="M 650 180 Q 620 155 605 135" />
        <path d="M 648 210 Q 675 195 692 175" />
        <path d="M 650 130 Q 665 110 675 95" />
        <path d="M 650 130 Q 635 108 625 90" />

        {/* Hammock ropes */}
        <path d="M 155 260 Q 200 240 250 270" />
        <path d="M 645 260 Q 600 240 550 270" />

        {/* Hammock body - sagging curve */}
        <path d="M 250 270 Q 280 290 300 340 Q 340 410 400 430 Q 460 410 500 340 Q 520 290 550 270" />
        
        {/* Hammock net lines */}
        <path d="M 270 290 Q 330 370 400 385 Q 470 370 530 290" />
        <path d="M 290 315 Q 345 380 400 395 Q 455 380 510 315" />
        
        {/* Cross-hatching on hammock */}
        <path d="M 290 300 Q 295 340 310 365" />
        <path d="M 330 280 Q 335 340 345 385" />
        <path d="M 370 275 Q 375 350 380 400" />
        <path d="M 410 275 Q 415 350 420 400" />
        <path d="M 450 280 Q 455 340 465 385" />
        <path d="M 490 300 Q 495 340 505 365" />

        {/* Unicorn body - lying in hammock */}
        <path d="M 320 350 Q 340 330 380 325 Q 420 320 460 330 Q 480 340 485 355" />
        
        {/* Unicorn belly */}
        <path d="M 320 355 Q 350 385 400 390 Q 450 385 480 360" />

        {/* Unicorn head */}
        <path d="M 320 350 Q 300 340 285 320 Q 275 300 280 285 Q 288 270 300 268 Q 312 265 320 275 Q 325 285 320 300" />
        
        {/* Unicorn muzzle */}
        <path d="M 280 285 Q 268 280 262 288 Q 258 295 265 300 Q 272 302 280 298" />
        
        {/* Unicorn eye - sleepy/closed */}
        <path d="M 295 282 Q 302 278 308 282" />
        
        {/* Unicorn ear */}
        <path d="M 305 268 Q 308 255 315 250 Q 318 258 315 265" />
        
        {/* Unicorn horn!! */}
        <path d="M 300 268 Q 295 248 288 225 Q 285 215 290 210" />
        <path d="M 293 255 Q 298 250 293 245" />
        <path d="M 290 240 Q 295 235 290 230" />
        
        {/* Unicorn mane - flowing */}
        <path d="M 310 268 Q 320 260 325 270 Q 330 258 338 268 Q 342 255 350 265" />
        
        {/* Front legs - dangling lazily */}
        <path d="M 340 380 Q 335 400 330 415 Q 328 420 332 422" />
        <path d="M 360 385 Q 355 405 352 418 Q 350 423 354 425" />
        
        {/* Back legs - dangling */}
        <path d="M 440 380 Q 445 400 448 415 Q 450 420 446 422" />
        <path d="M 460 375 Q 465 395 468 410 Q 470 415 466 417" />
        
        {/* Tail - flowing out of hammock */}
        <path d="M 485 345 Q 500 340 515 345 Q 525 355 520 365 Q 510 370 505 360" />
        <path d="M 515 345 Q 530 338 540 345 Q 535 355 525 358" />

        {/* Z's - sleeping */}
        <path d="M 260 260 L 275 260 L 260 275 L 275 275" />
        <path d="M 240 240 L 252 240 L 240 252 L 252 252" />
        <path d="M 225 225 L 234 225 L 225 234 L 234 234" />

        {/* Small stars/sparkles */}
        <path d="M 500 180 L 500 190 M 495 185 L 505 185" />
        <path d="M 350 150 L 350 158 M 346 154 L 354 154" />
        <path d="M 580 210 L 580 218 M 576 214 L 584 214" />
        <path d="M 220 190 L 220 198 M 216 194 L 224 194" />

        {/* Ground grass hints */}
        <path d="M 100 520 Q 105 510 110 520" />
        <path d="M 130 522 Q 133 512 136 522" />
        <path d="M 200 525 Q 205 515 210 525" />
        <path d="M 400 530 Q 405 518 410 530" />
        <path d="M 550 522 Q 555 512 560 522" />
        <path d="M 620 525 Q 623 515 626 525" />
        <path d="M 680 520 Q 685 510 690 520" />
        <path d="M 300 528 Q 303 520 306 528" />
        <path d="M 470 526 Q 475 516 480 526" />

        {/* Cloud sketches */}
        <path d="M 160 80 Q 170 65 185 68 Q 200 60 215 70 Q 225 65 235 75 Q 240 85 230 90 Q 215 95 200 90 Q 185 95 170 88 Q 158 88 160 80" />
        <path d="M 550 60 Q 560 48 572 50 Q 582 42 595 52 Q 605 48 612 58 Q 615 65 608 70 Q 595 72 585 68 Q 572 73 562 66 Q 548 68 550 60" />
      </svg>
    </div>
  );
};

export default UnicornHammockDrawing;
