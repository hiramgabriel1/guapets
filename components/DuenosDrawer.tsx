"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./Icon";

interface DuenosDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function DuenosDrawer({ open, onClose }: DuenosDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-y-0 right-0 z-10 flex"
          style={{ minWidth: 380 }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div
            className="flex min-h-full w-[380px] flex-col bg-white/85 backdrop-blur-[24px]"
            style={{
              borderLeft: "1px solid rgba(255, 255, 255, 0.9)",
              boxShadow: "-8px 0 48px rgba(56, 189, 248, 0.1)",
            }}
          >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-foreground">Nuevo Dueño</h2>
            <p className="mt-0.5 text-xs text-slate-500">
              Completa los datos del propietario
            </p>
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

        <div className="flex flex-1 flex-col gap-5 px-6 py-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Nombre completo
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
              <Icon name="user" size={15} />
              <span>Ej. Carlos Ramírez López</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Dirección
            </label>
            <div
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500"
              style={{ minHeight: 72 }}
            >
              <Icon name="map-pin" size={15} />
              <span>Calle, número, colonia, ciudad</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Teléfono
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
              <Icon name="phone" size={15} />
              <span>+52 (55) 0000-0000</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Correo electrónico
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
              <Icon name="mail" size={15} />
              <span>correo@ejemplo.com</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Notas adicionales{" "}
              <span className="font-normal text-slate-400">(opcional)</span>
            </label>
            <div
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-400"
              style={{ minHeight: 60 }}
            >
              <span>Información extra...</span>
            </div>
          </div>
        </div>

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
            Guardar Dueño
          </motion.button>
        </div>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
