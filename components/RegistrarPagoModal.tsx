"use client";

import { useState } from "react";
import { Icon } from "./Icon";

interface RegistrarPagoModalProps {
  open: boolean;
  onClose: () => void;
}

const duenos = [
  "Carlos Ramírez",
  "Ana Torres",
  "José López",
  "María Ruiz",
  "Pedro García",
  "Sofía Martínez",
  "Roberto Hernández",
  "Laura Jiménez",
];

const tipos = [
  { value: "Tarjeta", color: "bg-sky-100 text-sky-700", activeColor: "bg-sky-500 text-white" },
  { value: "Efectivo", color: "bg-green-100 text-green-700", activeColor: "bg-green-500 text-white" },
  { value: "Transferencia", color: "bg-purple-100 text-purple-700", activeColor: "bg-purple-500 text-white" },
];

const estados = [
  { value: "Pagado", color: "bg-green-100 text-green-700" },
  { value: "Pendiente", color: "bg-amber-100 text-amber-700" },
  { value: "Cancelado", color: "bg-red-100 text-red-700" },
];

export function RegistrarPagoModal({ open, onClose }: RegistrarPagoModalProps) {
  const [tipo, setTipo] = useState("Tarjeta");
  const [estado, setEstado] = useState("Pagado");
  const [showDuenoDropdown, setShowDuenoDropdown] = useState(false);
  const [selectedDueno, setSelectedDueno] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-[520px] max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          boxShadow: "0 24px 64px rgba(56, 189, 248, 0.15)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-foreground">Registrar Pago</h2>
            <p className="mt-0.5 text-xs text-slate-500">Registra un nuevo pago en el sistema</p>
          </div>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <Icon name="x" size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {/* Dueño */}
          <div className="mb-4 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Dueño</label>
            <div className="relative">
              <button
                onClick={() => setShowDuenoDropdown(!showDuenoDropdown)}
                className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500"
              >
                <span>{selectedDueno || "Seleccionar dueño..."}</span>
                <Icon name="chevron-right" size={14} className={`rotate-90 text-slate-400 transition-transform ${showDuenoDropdown ? "rotate-180" : ""}`} />
              </button>
              {showDuenoDropdown && (
                <div className="absolute left-0 right-0 z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                  {duenos.map((d) => (
                    <button
                      key={d}
                      onClick={() => {
                        setSelectedDueno(d);
                        setShowDuenoDropdown(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm ${
                        selectedDueno === d ? "bg-sky-50 text-sky-700" : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tipo - Segmented control */}
          <div className="mb-4 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Tipo de pago</label>
            <div className="flex gap-2 rounded-lg bg-slate-100 p-1">
              {tipos.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTipo(t.value)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-medium transition-colors ${
                    tipo === t.value ? t.activeColor : t.color
                  }`}
                >
                  <Icon
                    name={t.value === "Tarjeta" ? "credit-card" : t.value === "Efectivo" ? "banknote" : "arrow-right-left"}
                    size={14}
                  />
                  {t.value}
                </button>
              ))}
            </div>
          </div>

          {/* Descripción */}
          <div className="mb-4 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Descripción</label>
            <input
              type="text"
              placeholder="Ej. Consulta + Vacunación"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder-slate-400 outline-none transition-colors focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          {/* Estado */}
          <div className="mb-4 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Estado</label>
            <div className="flex gap-2">
              {estados.map((e) => (
                <button
                  key={e.value}
                  onClick={() => setEstado(e.value)}
                  className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
                    estado === e.value ? e.color : "border border-slate-200 bg-white text-slate-500"
                  }`}
                >
                  {e.value}
                </button>
              ))}
            </div>
          </div>

          {/* Monto + Fecha */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Monto</label>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
                <span className="text-sm text-slate-400">$</span>
                <input
                  type="text"
                  placeholder="0.00"
                  className="flex-1 text-sm text-foreground placeholder-slate-400 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Fecha</label>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
                <Icon name="calendar" size={15} className="text-slate-400" />
                <span>DD / MM / AAAA</span>
              </div>
            </div>
          </div>

          {/* Folio */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Folio</label>
            <input
              type="text"
              placeholder="F-2025-XXX"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder-slate-400 outline-none transition-colors focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
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
            Registrar Pago
          </button>
        </div>
      </div>
    </div>
  );
}
