"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./Icon";

interface Pago {
  cve: string;
  dueno: string;
  tipo: "Tarjeta" | "Efectivo" | "Transferencia";
  descripcion: string;
  estado: "Pagado" | "Pendiente" | "Cancelado";
  monto: string;
  fecha: string;
  folio: string;
}

const pagos: Pago[] = [
  { cve: "P-001", dueno: "Carlos Ramírez", tipo: "Tarjeta", descripcion: "Consulta + Vacunación", estado: "Pagado", monto: "$550", fecha: "15 Ene 2025", folio: "F-2025-001" },
  { cve: "P-002", dueno: "Ana Torres", tipo: "Efectivo", descripcion: "Control general", estado: "Pagado", monto: "$200", fecha: "14 Ene 2025", folio: "F-2025-002" },
  { cve: "P-003", dueno: "José López", tipo: "Transferencia", descripcion: "Desparasitación", estado: "Pendiente", monto: "$180", fecha: "13 Ene 2025", folio: "F-2025-003" },
  { cve: "P-004", dueno: "María Ruiz", tipo: "Tarjeta", descripcion: "Limpieza dental", estado: "Pagado", monto: "$420", fecha: "12 Ene 2025", folio: "F-2025-004" },
  { cve: "P-005", dueno: "Pedro García", tipo: "Efectivo", descripcion: "Cirugía menor", estado: "Pendiente", monto: "$900", fecha: "11 Ene 2025", folio: "F-2025-005" },
  { cve: "P-006", dueno: "Sofía Martínez", tipo: "Transferencia", descripcion: "Ecografía", estado: "Cancelado", monto: "$520", fecha: "10 Ene 2025", folio: "F-2025-006" },
  { cve: "P-007", dueno: "Roberto Hernández", tipo: "Tarjeta", descripcion: "Radiografía", estado: "Pagado", monto: "$380", fecha: "09 Ene 2025", folio: "F-2025-007" },
  { cve: "P-008", dueno: "Laura Jiménez", tipo: "Efectivo", descripcion: "Curaciones", estado: "Pagado", monto: "$150", fecha: "08 Ene 2025", folio: "F-2025-008" },
];

function TipoBadge({ tipo }: { tipo: Pago["tipo"] }) {
  const colors = {
    Tarjeta: "bg-sky-100 text-sky-700",
    Efectivo: "bg-green-100 text-green-700",
    Transferencia: "bg-purple-100 text-purple-700",
  };

  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[tipo]}`}>
      {tipo}
    </span>
  );
}

function EstadoBadge({ estado }: { estado: Pago["estado"] }) {
  const colors = {
    Pagado: "bg-green-100 text-green-700",
    Pendiente: "bg-amber-100 text-amber-700",
    Cancelado: "bg-red-100 text-red-700",
  };

  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[estado]}`}>
      {estado}
    </span>
  );
}

export function PagosTable() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (cve: string) => {
    setExpandedId(expandedId === cve ? null : cve);
  };

  return (
    <div
      className="rounded-xl border"
      style={{
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 8px 32px rgba(56, 189, 248, 0.1)",
      }}
    >
      {/* Header */}
      <div className="border-b border-slate-100 px-6 pt-5 pb-3">
        <div
          className="grid text-xs font-semibold uppercase tracking-wide text-slate-500"
          style={{ gridTemplateColumns: "70px 1fr 100px 1.5fr 100px 80px 120px 100px 40px" }}
        >
          <span>CVE</span>
          <span>Dueño</span>
          <span>Tipo</span>
          <span>Descripción</span>
          <span>Estado</span>
          <span>Monto</span>
          <span>Fecha</span>
          <span>Folio</span>
          <span />
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {pagos.map((p, index) => {
          const isExpanded = expandedId === p.cve;
          return (
            <div key={p.cve}>
              <button
                onClick={() => toggleExpand(p.cve)}
                className={`grid w-full items-center px-6 py-3.5 text-left transition-colors ${
                  isExpanded ? "bg-blue-50/50" : index % 2 === 1 ? "bg-blue-50/30" : ""
                } hover:bg-blue-50/40`}
                style={{
                  gridTemplateColumns: "70px 1fr 100px 1.5fr 100px 80px 120px 100px 40px",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <span className="font-mono text-xs text-slate-400">{p.cve}</span>
                <span className="text-sm font-semibold text-foreground">{p.dueno}</span>
                <TipoBadge tipo={p.tipo} />
                <span className="truncate pr-4 text-sm text-slate-500">{p.descripcion}</span>
                <EstadoBadge estado={p.estado} />
                <span className="text-sm font-bold text-foreground">{p.monto}</span>
                <span className="text-sm text-slate-500">{p.fecha}</span>
                <span className="font-mono text-xs text-slate-400">{p.folio}</span>
                <div className="flex justify-center">
                  <Icon
                    name="chevron-right"
                    size={14}
                    className={`text-slate-400 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                  />
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div
                  className="border-t border-slate-100 bg-blue-50/30 px-6 py-4"
                  style={{ borderBottom: "1px solid #f1f5f9" }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-slate-400">Método de pago</span>
                      <p className="text-sm font-medium text-foreground">{p.tipo}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400">Folio</span>
                      <p className="text-sm font-medium text-foreground">{p.folio}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400">Descripción</span>
                      <p className="text-sm text-slate-600">{p.descripcion}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400">Estado</span>
                      <p className="text-sm font-medium text-foreground">{p.estado}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-6 py-3.5">
        <span className="text-xs text-slate-400">Mostrando 8 de 156 pagos</span>
        <div className="flex items-center gap-1">
          <motion.button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="chevron-left" size={13} />
          </motion.button>
          <motion.button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-primary text-xs font-medium text-primary-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            1
          </motion.button>
          <motion.button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-xs font-medium text-slate-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            2
          </motion.button>
          <motion.button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-xs font-medium text-slate-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            3
          </motion.button>
          <span className="px-1 text-xs text-slate-400">...</span>
          <motion.button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-xs font-medium text-slate-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            20
          </motion.button>
          <motion.button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="chevron-right" size={13} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
