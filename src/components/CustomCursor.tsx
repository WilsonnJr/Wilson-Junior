import { useEffect, useRef, useState } from "react";

const TRAIL_COUNT = 8;

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }))
  );
  const rafId = useRef<number>();

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      const lerp = 0.12;
      circlePos.current.x += (mouse.current.x - circlePos.current.x) * lerp;
      circlePos.current.y += (mouse.current.y - circlePos.current.y) * lerp;
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circlePos.current.x - 20}px, ${circlePos.current.y - 20}px)`;
      }

      // Trail
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const target = i === 0 ? mouse.current : trailPositions.current[i - 1];
        const speed = 0.15 - i * 0.012;
        trailPositions.current[i].x += (target.x - trailPositions.current[i].x) * speed;
        trailPositions.current[i].y += (target.y - trailPositions.current[i].y) * speed;
        const el = trailRefs.current[i];
        if (el) {
          const size = 6 - i * 0.5;
          el.style.transform = `translate(${trailPositions.current[i].x - size / 2}px, ${trailPositions.current[i].y - size / 2}px)`;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail particles */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => {
        const size = 6 - i * 0.5;
        const opacity = 0.5 - i * 0.055;
        return (
          <div
            key={`trail-${i}`}
            ref={(el) => { trailRefs.current[i] = el; }}
            className="fixed top-0 left-0 z-[9997] pointer-events-none"
            style={{
              width: size,
              height: size,
              borderRadius: "50%",
              background: `hsl(72 100% 50% / ${opacity})`,
              boxShadow: `0 0 ${4 + i}px hsl(72 100% 50% / ${opacity * 0.6})`,
            }}
          />
        );
      })}
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "hsl(72 100% 50%)",
          boxShadow: isHovering
            ? "0 0 12px hsl(72 100% 50% / 0.9), 0 0 30px hsl(72 100% 50% / 0.5)"
            : "0 0 8px hsl(72 100% 50% / 0.6)",
          transition: "box-shadow 0.2s ease",
        }}
      />
      {/* Circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1.5px solid hsl(72 100% 50% / ${isHovering ? 0.6 : 0.25})`,
          background: `hsl(72 100% 50% / ${isHovering ? 0.05 : 0.02})`,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.2s ease, background 0.2s ease",
          ...(isHovering ? { width: 28, height: 28 } : {}),
          marginLeft: isHovering ? 6 : 0,
          marginTop: isHovering ? 6 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
