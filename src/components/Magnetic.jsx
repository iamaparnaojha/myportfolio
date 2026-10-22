import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useFinePointer } from "../hooks/useFinePointer";

export default function Magnetic({ as: Tag = "a", className = "", children, ...props }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();

  const onMouseMove = (event) => {
    if (reduce || !fine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate3d(${x * 0.16}px, ${y * 0.22}px, 0)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <Tag
      ref={ref}
      {...props}
      className={`magnetic ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Tag>
  );
}
