"use client";

import { Icon } from "./Icon";

interface TopHeaderProps {
  title: string;
  subtitle: string;
}

export function TopHeader({ title, subtitle }: TopHeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500"
          style={{
            boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)",
            minWidth: 220,
          }}
        >
          <Icon name="search" size={15} />
          <span>Buscar...</span>
        </div>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500"
          style={{ boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)" }}
          aria-label="Notificaciones"
        >
          <Icon name="bell" size={16} />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          DG
        </div>
      </div>
    </header>
  );
}
