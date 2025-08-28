"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Regulator = "ZA" | "EU" | "SVG";

type Ctx = {
  regulator: Regulator;
  setRegulator: (r: Regulator) => void;
};

const RegulatorContext = createContext<Ctx | undefined>(undefined);

export function RegulatorProvider({ children }: { children: React.ReactNode }) {
  const [regulator, setRegulator] = useState<Regulator>("ZA");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("regulator") as Regulator | null;
      if (saved === "ZA" || saved === "EU" || saved === "SVG") setRegulator(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("regulator", regulator);
    } catch {}
  }, [regulator]);

  const value = useMemo(() => ({ regulator, setRegulator }), [regulator]);
  return <RegulatorContext.Provider value={value}>{children}</RegulatorContext.Provider>;
}

export function useRegulator() {
  const ctx = useContext(RegulatorContext);
  if (!ctx) throw new Error("useRegulator must be used within RegulatorProvider");
  return ctx;
}
