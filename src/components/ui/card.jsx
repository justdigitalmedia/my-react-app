import React from "react";

export function Card({ className = "", children }) {
  return <div className={`rounded-2xl border bg-white shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="p-5 border-b">{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <div className={`text-lg font-semibold ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
