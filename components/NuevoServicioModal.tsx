"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./Icon";

interface NuevoServicioModalProps {
  open: boolean;
  onClose: () => void;
  editingService?: { name: string; description: string; price: string } | null;
}

export function NuevoServicioModal({ open, onClose, editingService }: NuevoServicioModalProps) {
  const [name, setName] = useState(editingService?.name || "");
  const [description, setDescription] = useState(editingService?.description || "");
  const [price, setPrice] = useState(editingService?.price || "");

  const title = editingService ? "Editar Servicio" : "Nuevo Servicio";
  const subtitle = editingService
    ? "Modifica los datos del servicio"
    : "Registra un nuevo servicio veterinario";
  const confirmLabel = editingService ? "Guardar Cambios" : "Crear Servicio";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-[440px] rounded-2xl"
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
            <h2 className="text-lg font-bold text-foreground">{title}</h2>
            <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
          </div>
          <motion.button
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
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
          {/* Nombre */}
          <div className="mb-4 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Consulta general"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder-slate-400 outline-none transition-colors focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          {/* Descripción */}
          <div className="mb-4 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción del servicio..."
              rows={3}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder-slate-400 outline-none transition-colors focus:border-sky-300 focus:ring-2 focus:ring-sky-100 resize-none"
            />
          </div>

          {/* Precio */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Precio</label>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
              <span className="text-sm text-slate-400">$</span>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="flex-1 text-sm text-foreground placeholder-slate-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-slate-100 px-6 py-5">
          <motion.button
            className="flex-1 cursor-pointer rounded-full border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50"
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancelar
          </motion.button>
          <motion.button
            className="flex-1 cursor-pointer rounded-full py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
              boxShadow: "0 4px 14px rgba(56, 189, 248, 0.35)",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {confirmLabel}
          </motion.button>
        </div>
      </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
