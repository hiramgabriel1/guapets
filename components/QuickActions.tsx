"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

const actions = [
  { label: "Nueva Consulta", icon: "stethoscope" as const },
  { label: "Registrar Mascota", icon: "paw-print" as const },
  { label: "Nuevo Dueño", icon: "users" as const },
];

export function QuickActions() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-slate-500">Acciones rápidas:</span>
      {actions.map((action) => (
        <motion.button
          key={action.label}
          className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          style={{ boxShadow: "0 2px 8px rgba(56, 189, 248, 0.25)" }}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon name={action.icon} size={14} />
          <span>{action.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
