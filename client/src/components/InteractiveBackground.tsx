import React, { useMemo, useRef, useEffect } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouse = { x: -1000, y: -1000 };

    const dots: { x: number; y: number; vx: number; vy: number; base_x: number; base_y: number }[] = [];
    const spacing = 40;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      dots.length = 0;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          dots.push({ x, y, vx: 0, vy: 0, base_x: x, base_y: y });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
      
      dots.forEach(dot => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 240, 255, ${1 - dist/100})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          dot.vx += (dx / dist) * 0.5;
          dot.vy += (dy / dist) * 0.5;
        }

        dot.vx *= 0.9;
        dot.vy *= 0.9;
        dot.x = dot.base_x + dot.vx;
        dot.y = dot.base_y + dot.vy;

        ctx.fillRect(dot.x - 1, dot.y - 1, 2, 2);
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    init();
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" />;
};

export default InteractiveBackground;