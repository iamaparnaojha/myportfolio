import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useFinePointer } from "../hooks/useFinePointer";

export default function Atmosphere() {
  const glowRef = useRef(null);
  const barRef = useRef(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      setShowTop(window.scrollY > 700);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reduce || !fine) return undefined;
    const glow = glowRef.current;
    if (!glow) return undefined;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      glow.style.transform = `translate3d(${x - 170}px, ${y - 170}px, 0)`;
      frame = 0;
    };

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduce, fine]);

  return (
    <>
      <div ref={barRef} className="scroll-progress" aria-hidden="true" />
      {!reduce && fine ? <div ref={glowRef} className="cursor-glow" aria-hidden="true" /> : null}
      {showTop ? (
        <a href="#top" className="back-top" aria-label="Back to top">
          <span aria-hidden="true">↑</span>
        </a>
      ) : null}
    </>
  );
}
