"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const monthlyData = [12, 18, 22, 20, 35, 30, 42, 38, 50, 45, 55, 48];
const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const maxValue = Math.max(...monthlyData);

export function ConsultasChart() {
  const [year, setYear] = useState<"2024" | "2023">("2024");
  const width = 600;
  const height = 180;
  const padding = { top: 10, right: 10, bottom: 30, left: 10 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = monthlyData.map((value, index) => {
    const x = padding.left + (index / (monthlyData.length - 1)) * chartWidth;
    const y = padding.top + chartHeight - (value / maxValue) * chartHeight;
    return { x, y, value };
  });

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`;

  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 4px 16px rgba(56, 189, 248, 0.06)",
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Consultas por Mes</h3>
          <p className="text-xs text-slate-500">Resumen del año actual</p>
        </div>
        <div className="flex gap-1 rounded-full bg-slate-100 p-0.5">
          {(["2024", "2023"] as const).map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                year === y
                  ? "bg-primary text-primary-foreground"
                  : "text-slate-500"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75].map((ratio) => (
          <line
            key={ratio}
            x1={padding.left}
            y1={padding.top + chartHeight * (1 - ratio)}
            x2={width - padding.right}
            y2={padding.top + chartHeight * (1 - ratio)}
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        <path d={areaD} fill="url(#areaGradient)" />
        <path d={pathD} fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {points.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={height - 8}
            textAnchor="middle"
            className="fill-slate-400"
            fontSize="10"
          >
            {months[i]}
          </text>
        ))}
      </svg>
    </div>
  );
}
