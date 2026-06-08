"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./Icon";

interface NuevaMascotaDrawerProps {
  open: boolean;
  onClose: () => void;
}

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"];

const owners = [
  { name: "Carlos Ramírez", selected: true },
  { name: "Ana Torres", selected: false },
  { name: "José López", selected: false },
];

export function NuevaMascotaDrawer({ open, onClose }: NuevaMascotaDrawerProps) {
  const [gender, setGender] = useState<"Macho" | "Hembra">("Macho");
  const [selectedDay, setSelectedDay] = useState(15);
  const [showOwnerDropdown, setShowOwnerDropdown] = useState(false);

  const daysInMonth = 31;
  const startDay = 3;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-y-0 right-0 z-10 flex"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
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
            <h2 className="text-lg font-bold text-foreground">Nueva Mascota</h2>
            <p className="mt-0.5 text-xs text-slate-500">Registra una nueva mascota</p>
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

        {/* Content */}
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-6 py-6">
          {/* Photo upload */}
          <div className="flex flex-col items-center">
            <button
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "rgba(56, 189, 248, 0.12)" }}
              aria-label="Subir foto"
            >
              <Icon name="paw-print" size={24} className="text-primary" />
            </button>
            <span className="mt-1 text-xs text-slate-400">Foto</span>
          </div>

          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Nombre</label>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-400">
              <Icon name="paw-print" size={15} className="text-slate-400" />
              <span>Ej. Firulais</span>
            </div>
          </div>

          {/* Especie + Raza */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Especie</label>
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
                <span>Perro</span>
                <Icon name="chevron-right" size={14} className="rotate-90 text-slate-400" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Raza</label>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
                <span>Labrador</span>
              </div>
            </div>
          </div>

          {/* Fecha de nacimiento */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Fecha de nacimiento</label>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-400">
              <Icon name="calendar" size={15} className="text-slate-400" />
              <span>DD / MM / AAAA</span>
            </div>

            {/* Calendar */}
            <div
              className="rounded-lg border border-slate-200 bg-white p-3"
              style={{ boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)" }}
            >
              <div className="mb-2 flex items-center justify-between">
                <button className="text-slate-400">
                  <Icon name="chevron-left" size={14} />
                </button>
                <span className="text-sm font-medium text-foreground">Enero 2025</span>
                <button className="text-slate-400">
                  <Icon name="chevron-right" size={14} />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {daysOfWeek.map((d) => (
                  <span key={d} className="py-1 text-xs font-medium text-slate-400">
                    {d}
                  </span>
                ))}
                {Array.from({ length: startDay }).map((_, i) => (
                  <span key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = day === selectedDay;
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                        isSelected
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sexo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Sexo</label>
            <div className="flex gap-2 rounded-lg bg-slate-100 p-1">
              <button
                onClick={() => setGender("Macho")}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-medium transition-colors ${
                  gender === "Macho"
                    ? "bg-primary text-primary-foreground"
                    : "text-slate-500"
                }`}
              >
                <Icon name="user" size={14} />
                Macho
              </button>
              <button
                onClick={() => setGender("Hembra")}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-medium transition-colors ${
                  gender === "Hembra"
                    ? "bg-primary text-primary-foreground"
                    : "text-slate-500"
                }`}
              >
                <Icon name="user" size={14} />
                Hembra
              </button>
            </div>
          </div>

          {/* Dueño */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Dueño</label>
            <button
              onClick={() => setShowOwnerDropdown(!showOwnerDropdown)}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500"
            >
              <span>Buscar dueño...</span>
              <Icon name="chevron-right" size={14} className={`transition-transform ${showOwnerDropdown ? "rotate-90" : ""}`} />
            </button>
            {showOwnerDropdown && (
              <div className="rounded-lg border border-slate-200 bg-white">
                {owners.map((owner) => (
                  <button
                    key={owner.name}
                    className={`flex w-full items-center gap-2 px-3 py-2.5 text-sm ${
                      owner.selected
                        ? "bg-blue-50 text-foreground"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <Icon name="user" size={14} />
                    <span className="flex-1 text-left">{owner.name}</span>
                    {owner.selected && <Icon name="check" size={14} className="text-primary" />}
                  </button>
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
            Registrar Mascota
          </motion.button>
        </div>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
