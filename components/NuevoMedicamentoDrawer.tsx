"use client";

import { useState } from "react";
import { Icon } from "./Icon";

interface NuevoMedicamentoDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function NuevoMedicamentoDrawer({ open, onClose }: NuevoMedicamentoDrawerProps) {
  const [existencia, setExistencia] = useState(0);

  if (!open) return null;

  const increment = () => setExistencia((prev) => prev + 1);
  const decrement = () => setExistencia((prev) => Math.max(0, prev - 1));

  return (
    <div className="fixed inset-y-0 right-0 z-10 flex">
      <div
        className="flex min-h-full w-[400px] flex-col bg-white/85 backdrop-blur-[24px]"
        style={{
          borderLeft: "1px solid rgba(255, 255, 255, 0.9)",
          boxShadow: "-8px 0 48px rgba(56, 189, 248, 0.1)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-foreground">Nuevo Medicamento</h2>
            <p className="mt-0.5 text-xs text-slate-500">Registra un nuevo medicamento al inventario</p>
          </div>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <Icon name="x" size={15} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-6 py-6">
          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Nombre</label>
            <input
              type="text"
              placeholder="Ej. Amoxicilina"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder-slate-400 outline-none transition-colors focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Descripción</label>
            <textarea
              placeholder="Descripción del medicamento..."
              rows={2}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder-slate-400 outline-none transition-colors focus:border-sky-300 focus:ring-2 focus:ring-sky-100 resize-none"
            />
          </div>

          {/* Dosis */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Dosis</label>
            <input
              type="text"
              placeholder="Ej. 20mg/kg cada 12h"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder-slate-400 outline-none transition-colors focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          {/* Existencia with stepper */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Existencia</label>
            <div className="flex items-center gap-3">
              <button
                onClick={decrement}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-sky-600"
                aria-label="Disminuir existencia"
              >
                <Icon name="minus" size={16} />
              </button>
              <div className="flex flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white py-2.5">
                <span className="text-lg font-semibold text-foreground">{existencia}</span>
              </div>
              <button
                onClick={increment}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700 transition-colors hover:bg-sky-200"
                aria-label="Aumentar existencia"
              >
                <Icon name="plus" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-slate-100 px-6 py-5">
          <button
            className="flex-1 rounded-full border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="flex-1 rounded-full py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
              boxShadow: "0 4px 14px rgba(56, 189, 248, 0.35)",
            }}
          >
            Registrar Medicamento
          </button>
        </div>
      </div>
    </div>
  );
}
