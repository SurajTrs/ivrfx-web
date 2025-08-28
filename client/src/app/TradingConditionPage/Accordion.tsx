"use client";

import React, { PropsWithChildren } from "react";

export function Accordion({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <div className="accordion" id={id}>
      {children}
    </div>
  );
}

export function AccordionItem({
  parentId,
  itemId,
  title,
  defaultOpen,
  children,
}: PropsWithChildren<{ parentId: string; itemId: string; title: string; defaultOpen?: boolean }>) {
  const headingId = `${itemId}-heading`;
  const collapseId = `${itemId}-collapse`;
  return (
    <div className="accordion-item rounded-3 overflow-hidden mb-3 border">
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button ${defaultOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={defaultOpen ? "true" : "false"}
          aria-controls={collapseId}
        >
          {title}
        </button>
      </h2>
      <div
        id={collapseId}
        className={`accordion-collapse collapse ${defaultOpen ? "show" : ""}`}
        aria-labelledby={headingId}
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body p-0">
          {children}
        </div>
      </div>
    </div>
  );
}
