"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { GlassCard } from "./GlassCard";

interface Dueno {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

const duenos: Dueno[] = [
  { id: "D-001", name: "Carlos Ramírez López", address: "Av. Insurgentes 452, CDMX", phone: "+52 55 1234-5678", email: "carlos.ramirez@email.com" },
  { id: "D-002", name: "Ana Torres Mendoza", address: "Calle Hidalgo 33, Monterrey", phone: "+52 81 9876-5432", email: "ana.torres@email.com" },
  { id: "D-003", name: "José Luis López", address: "Blvd. Kukulcán km 5, Cancún", phone: "+52 998 765-4321", email: "joselopez@email.com" },
  { id: "D-004", name: "María Elena Ruiz", address: "Calle Revolución 88, Guadalajara", phone: "+52 33 4567-8901", email: "maria.ruiz@email.com" },
  { id: "D-005", name: "Pedro García Vega", address: "Av. Reforma 210, Puebla", phone: "+52 222 345-6789", email: "pedro.garcia@email.com" },
  { id: "D-006", name: "Sofía Martínez", address: "Calle 5 de Mayo 17, Oaxaca", phone: "+52 951 234-5678", email: "sofia.mtz@email.com" },
  { id: "D-007", name: "Roberto Hernández", address: "Calle Morelos 90, Querétaro", phone: "+52 442 876-5432", email: "roberto.hd@email.com" },
  { id: "D-008", name: "Laura Jiménez Ríos", address: "Av. Universidad 340, León", phone: "+52 477 654-3210", email: "laura.jrios@email.com" },
];

const totalPages = 161;

export function DuenosTable() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <GlassCard>
      <div className="border-b border-slate-100 px-6 pt-5 pb-3">
        <div
          className="grid text-xs font-semibold uppercase tracking-wide text-slate-500"
          style={{ gridTemplateColumns: "100px 1fr 1fr 130px 1fr 100px" }}
        >
          <span>CVE Dueño</span>
          <span>Nombre</span>
          <span>Dirección</span>
          <span>Teléfono</span>
          <span>Correo</span>
          <span className="text-center">Acciones</span>
        </div>
      </div>

      <div className="flex flex-col">
        {duenos.map((dueno, index) => (
          <div
            key={dueno.id}
            className="grid items-center px-6 py-3.5"
            style={{
              gridTemplateColumns: "100px 1fr 1fr 130px 1fr 100px",
              borderBottom: "1px solid #f1f5f9",
              background: index % 2 === 1 ? "rgba(240, 249, 255, 0.4)" : "transparent",
            }}
          >
            <span className="font-mono text-xs text-slate-400">{dueno.id}</span>
            <span className="text-sm font-semibold text-foreground">{dueno.name}</span>
            <span className="truncate pr-4 text-sm text-slate-500">{dueno.address}</span>
            <span className="text-sm text-slate-500">{dueno.phone}</span>
            <span className="truncate pr-4 text-sm text-slate-500">{dueno.email}</span>
            <div className="flex items-center justify-center gap-2">
              <button
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: "#e0f2fe", color: "#0284c7" }}
                aria-label={`Ver ${dueno.name}`}
              >
                <Icon name="eye" size={13} />
              </button>
              <button
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: "#e0f2fe", color: "#0284c7" }}
                aria-label={`Editar ${dueno.name}`}
              >
                <Icon name="pencil" size={13} />
              </button>
              <button
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: "#fee2e2", color: "#ef4444" }}
                aria-label={`Eliminar ${dueno.name}`}
              >
                <Icon name="trash-2" size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 px-6 py-3.5">
        <span className="text-xs text-slate-400">
          Mostrando 8 de 1,284 dueños
        </span>
        <div className="flex items-center gap-1">
          <button
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400"
            aria-label="Página anterior"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            <Icon name="chevron-left" size={13} />
          </button>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-medium"
            style={{ background: "#38bdf8", color: "#fff" }}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-medium"
            style={{ color: "#64748b" }}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-medium"
            style={{ color: "#64748b" }}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>
          <span className="px-1 text-xs text-slate-400">...</span>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-xs font-medium text-slate-400"
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400"
            aria-label="Página siguiente"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            <Icon name="chevron-right" size={13} />
          </button>
        </div>
      </div>
    </GlassCard>
  );
}
