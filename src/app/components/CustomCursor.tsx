"use client";
import React, { useEffect } from "react";

export default function ColorTrailCursor() {
  useEffect(() => {
    const trail = [];
    for (let i = 0; i < 20; i++) {
      const div = document.createElement("div");
      div.className = "trail-dot";
      document.body.appendChild(div);
      trail.push(div);
    }

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      trail.forEach((dot, index) => {
        setTimeout(() => {
          dot.style.left = x + "px";
          dot.style.top = y + "px";
        }, index * 20);
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      trail.forEach((dot) => document.body.removeChild(dot));
    };
  }, []);

  return (
    <style>
      {`
        .trail-dot {
          position: fixed;
          width: 10px;
          height: 10px;
          background-color: #FF0B55;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.3;
          transform: translate(-50%, -50%);
          transition: all 0.1s linear;
          z-index: 9999;
        }
      `}
    </style>
  );
}
