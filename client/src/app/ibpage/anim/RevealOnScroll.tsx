"use client";
import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  y?: number; // translateY in px
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  delay = 0,
  y = 20,
  style,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)` ,
        transition: `opacity 480ms ease-out ${delay}ms, transform 520ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
