"use client";
import React, { useRef } from "react";

interface TiltOnHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTilt?: number; // degrees
  scale?: number;
  shadowColor?: string;
  as?: keyof JSX.IntrinsicElements;
}

const TiltOnHover: React.FC<TiltOnHoverProps> = ({
  maxTilt = 8,
  scale = 1.02,
  shadowColor = "rgba(0,0,0,0.15)",
  as = "div",
  style,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotX = ((y - midY) / midY) * -maxTilt;
    const rotY = ((x - midX) / midX) * maxTilt;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
    el.style.boxShadow = `0 10px 30px ${shadowColor}`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.boxShadow = "";
  };

  const Tag: any = as;

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 140ms ease-out, box-shadow 140ms ease-out", willChange: "transform", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default TiltOnHover;
