export function SimpleDivider() {
  return (
    <div className="container">
      <hr className="border-0" style={{ height: 2, background: "#eee" }} />
    </div>
  );
}

export function DottedDivider() {
  return (
    <div className="container">
      <svg
        role="img"
        aria-label="section connector"
        width="100%"
        height="120"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <defs>
          <marker id="dot" markerWidth="10" markerHeight="10" refX="5" refY="5">
            <circle cx="5" cy="5" r="4" fill="#8b5cf6" />
          </marker>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#8b5cf6" />
          </marker>
        </defs>
        {/* Path: down a little, long right, soft corner down on the right */}
        <path
          d="M20,10 V50 Q20,60 30,60 H970 Q980,60 980,70 V100"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerStart="url(#dot)"
          markerEnd="url(#arrow)"
        />
      </svg>
    </div>
  );
}

export function DottedDivider2() {
  return (
    <div className="container">
      <svg
        role="img"
        aria-label="section connector reversed"
        width="100%"
        height="120"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <defs>
          <marker id="dot2" markerWidth="10" markerHeight="10" refX="5" refY="5">
            <circle cx="5" cy="5" r="4" fill="#8b5cf6" />
          </marker>
          <marker id="arrow2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#8b5cf6" />
          </marker>
        </defs>
        {/* Mirrored path: start on right, go left, then down on left */}
        <path
          d="M980,10 V50 Q980,60 970,60 H30 Q20,60 20,70 V100"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerStart="url(#dot2)"
          markerEnd="url(#arrow2)"
        />
      </svg>
    </div>
  );
}
