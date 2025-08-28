"use client";
import React, { useRef } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTilt?: number; // degrees
  scale?: number;
  shadowColor?: string;
  children: React.ReactNode;
}

const TiltCard: React.FC<TiltCardProps> = ({
  maxTilt = 12,
  scale = 1.02,
  shadowColor = "rgba(0,0,0,0.15)",
  children,
  style,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (py - 0.5) * 2 * maxTilt; // rotateX
    const ry = (0.5 - px) * 2 * maxTilt; // rotateY
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    el.style.boxShadow = `${-ry * 1.2}px ${rx * 1.2}px 24px ${shadowColor}`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
    el.style.boxShadow = `0 10px 24px ${shadowColor}`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transition: "transform 180ms ease, box-shadow 220ms ease",
        transformStyle: "preserve-3d",
        boxShadow: `0 10px 24px ${shadowColor}`,
        borderRadius: 16,
        willChange: "transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TiltCard;
