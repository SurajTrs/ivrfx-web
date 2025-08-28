"use client";
import React, { useEffect, useRef } from "react";

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLElement> {
  speed?: number; // positive moves slower than scroll
  as?: keyof JSX.IntrinsicElements;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  speed = 0.3,
  as = "section",
  style,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = window.scrollY + rect.top;
      const y = (window.scrollY - offset) * speed;
      el.style.backgroundPosition = `center calc(50% + ${y}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  const Tag: any = as;

  return (
    <Tag ref={ref} style={{ backgroundAttachment: "scroll", ...style }} {...rest}>
      {children}
    </Tag>
  );
};

export default ParallaxSection;
