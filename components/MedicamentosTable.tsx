"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "./Icon";

interface Medicamento {
  cve: string;
  nombre: string;
  descripcion: string;
  dosis: string;
  existencia: number;
}

const medicamentos: Medicamento[] = [
  { cve: "M-001", nombre: "Amoxicilina", descripcion: "Antibiótico de amplio espectro", dosis: "20mg/kg cada 12h", existencia: 45 },
  { cve: "M-002", nombre: "Meloxicam", descripcion: "Antiinflamatorio no esteroideo", dosis: "0.1mg/kg por 5 días", existencia: 32 },
  { cve: "M-003", nombre: "Pyrantel", descripcion: "Antiparasitario intestinal", dosis: "5mg/kg cada 15 días", existencia: 8 },
  { cve: "M-004", nombre: "Fenbendazol", descripcion: "Antihelmíntico de amplio espectro", dosis: "50mg/kg por 3 días", existencia: 3 },
  { cve: "M-005", nombre: "Metamizol", descripcion: "Analgésico y antipirético", dosis: "25mg/kg cada 8h", existencia: 0 },
  { cve: "M-006", nombre: "Cefalexina", descripcion: "Antibiótico cefalosporínico", dosis: "22mg/kg cada 12h", existencia: 18 },
  { cve: "M-007", nombre: "Prednisona", descripcion: "Corticosteroide antiinflamatorio", dosis: "1mg/kg por 7 días", existencia: 5 },
  { cve: "M-008", nombre: "Omeprazol", descripcion: "Protector gástrico", dosis: "0.5mg/kg cada 24h", existencia: 22 },
];

function ExistenciaBadge({ cantidad }: { cantidad: number }) {
  let colorClass: string;
  let label: string;

  if (cantidad === 0) {
    colorClass = "bg-red-100 text-red-600";
    label = "Agotado";
  } else if (cantidad <= 10) {
    colorClass = "bg-amber-100 text-amber-600";
    label = "Bajo";
  } else {
    colorClass = "bg-green-100 text-green-600";
    label = "Disponible";
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          cantidad === 0 ? "bg-red-500" : cantidad <= 10 ? "bg-amber-500" : "bg-green-500"
        }`}
      />
      {cantidad} uds
    </span>
  );
}

export function MedicamentosTable() {
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
          style={{ gridTemplateColumns: "80px 1fr 1.5fr 1fr 100px 100px" }}
        >
          <span>CVE</span>
          <span>Nombre</span>
          <span>Descripción</span>
          <span>Dosis</span>
          <span>Existencia</span>
          <span className="text-center">Acciones</span>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {medicamentos.map((m, index) => (
          <div
            key={m.cve}
            className="grid items-center px-6 py-3.5"
            style={{
              gridTemplateColumns: "80px 1fr 1.5fr 1fr 100px 100px",
              borderBottom: "1px solid #f1f5f9",
              background: index % 2 === 1 ? "rgba(240, 249, 255, 0.3)" : "transparent",
            }}
          >
            <span className="font-mono text-xs text-slate-400">{m.cve}</span>
            <span className="text-sm font-semibold text-foreground">{m.nombre}</span>
            <span className="truncate pr-4 text-sm text-slate-500">{m.descripcion}</span>
            <span className="text-sm text-slate-500">{m.dosis}</span>
            <ExistenciaBadge cantidad={m.existencia} />
            <div className="flex items-center justify-center gap-2">
              <motion.button
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-sky-100 text-sky-700 transition-colors hover:bg-sky-200"
                aria-label={`Editar ${m.nombre}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon name="pencil" size={13} />
              </motion.button>
              <motion.button
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
                aria-label={`Eliminar ${m.nombre}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon name="trash-2" size={13} />
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-6 py-3.5">
        <span className="text-xs text-slate-400">Mostrando 8 de 8 medicamentos</span>
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
