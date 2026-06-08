"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./Icon";

interface NuevaConsultaModalProps {
  open: boolean;
  onClose: () => void;
}

const mascotas = ["Firulais", "Mishi", "Rocky", "Luna", "Toby", "Coco", "Max"];
const serviciosDisponibles = [
  "Vacunación",
  "Consulta general",
  "Desparasitación",
  "Limpieza dental",
  "Radiografía",
  "Cirugía menor",
  "Análisis de sangre",
  "Ecografía",
];
const medicamentosDisponibles = ["Amoxicilina", "Meloxicam", "Pyrantel", "Fenbendazol", "Metamizol"];

export function NuevaConsultaModal({ open, onClose }: NuevaConsultaModalProps) {
  const [selectedServicios, setSelectedServicios] = useState<string[]>([]);
  const [medicamentos, setMedicamentos] = useState<{ name: string; dosis: string }[]>([]);
  const [showMedDropdown, setShowMedDropdown] = useState(false);

  const toggleServicio = (s: string) => {
    setSelectedServicios((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const addMedicamento = (name: string) => {
    if (!medicamentos.find((m) => m.name === name)) {
      setMedicamentos([...medicamentos, { name, dosis: "" }]);
    }
    setShowMedDropdown(false);
  };

  const removeMedicamento = (name: string) => {
    setMedicamentos(medicamentos.filter((m) => m.name !== name));
  };

  const updateDosis = (name: string, dosis: string) => {
    setMedicamentos(medicamentos.map((m) => (m.name === name ? { ...m, dosis } : m)));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-[680px] max-h-[90vh] overflow-y-auto rounded-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
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
            <h2 className="text-lg font-bold text-foreground">Nueva Consulta</h2>
            <p className="mt-0.5 text-xs text-slate-500">Registra una nueva consulta veterinaria</p>
          </div>
          <motion.button
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-500"
            onClick={onClose}
            aria-label="Cerrar"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="x" size={15} />
          </motion.button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {/* Mascota + Fecha */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Mascota</label>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
                <span>Seleccionar mascota...</span>
                <Icon name="chevron-right" size={14} className="rotate-90 text-slate-400" />
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

          {/* Motivo + Diagnóstico */}
          <div className="mb-4 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Motivo</label>
            <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-400">
              Motivo de la consulta...
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Diagnóstico</label>
            <div
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-400"
              style={{ minHeight: 60 }}
            >
              Diagnóstico preliminar...
            </div>
          </div>

          {/* Costo */}
          <div className="mb-6 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Costo</label>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
              <span className="text-slate-400">$</span>
              <span>0.00</span>
            </div>
          </div>

          {/* Servicios */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-foreground">Servicios</label>
            <div className="flex flex-wrap gap-2">
              {serviciosDisponibles.map((s) => {
                const selected = selectedServicios.includes(s);
                return (
                  <button
                    key={s}
                    onClick={() => toggleServicio(s)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      selected
                        ? "bg-sky-100 text-sky-700"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-sky-200"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Medicamentos */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Medicamentos</label>
              <div className="relative">
                <button
                  onClick={() => setShowMedDropdown(!showMedDropdown)}
                  className="flex items-center gap-1 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700"
                >
                  <Icon name="plus" size={12} />
                  Agregar
                </button>
                {showMedDropdown && (
                  <div className="absolute right-0 top-full z-10 mt-1 w-48 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                    {medicamentosDisponibles.map((m) => (
                      <button
                        key={m}
                        onClick={() => addMedicamento(m)}
                        className="w-full px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {medicamentos.length > 0 && (
              <div className="space-y-2">
                {medicamentos.map((med) => (
                  <div
                    key={med.name}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2"
                  >
                    <Icon name="pill" size={14} className="text-slate-400" />
                    <span className="flex-1 text-sm font-medium text-foreground">{med.name}</span>
                    <input
                      type="text"
                      placeholder="Dosis..."
                      value={med.dosis}
                      onChange={(e) => updateDosis(med.name, e.target.value)}
                      className="w-40 rounded border border-slate-200 px-2 py-1 text-xs text-slate-500 outline-none focus:border-sky-300"
                    />
                    <button
                      onClick={() => removeMedicamento(med.name)}
                      className="text-slate-400 hover:text-red-500"
                    >
                      <Icon name="x" size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-slate-100 px-6 py-5">
          <motion.button
            className="flex-1 cursor-pointer rounded-full border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancelar
          </motion.button>
          <motion.button
            className="flex-1 cursor-pointer rounded-full py-2.5 text-sm font-semibold text-primary-foreground"
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
              boxShadow: "0 4px 14px rgba(56, 189, 248, 0.35)",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Registrar Consulta
          </motion.button>
        </div>
      </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
