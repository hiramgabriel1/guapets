"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

interface ServiceCardProps {
  icon: React.ComponentProps<typeof Icon>["name"];
  name: string;
  description: string;
  price: string;
}

export function ServiceCard({ icon, name, description, price }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col rounded-2xl p-5 transition-all hover:shadow-lg"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 4px 16px rgba(56, 189, 248, 0.06)",
      }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(56, 189, 248, 0.12)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Icon */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-105"
        style={{ background: "rgba(56, 189, 248, 0.12)" }}
      >
        <Icon name={icon} size={22} className="text-primary" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-base font-bold text-slate-800">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>

      {/* Price badge */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <motion.button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-sky-600"
            aria-label={`Editar ${name}`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="pencil" size={14} />
          </motion.button>
          <motion.button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
            aria-label={`Eliminar ${name}`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="trash-2" size={14} />
          </motion.button>
        </div>
        <span
          className="rounded-full px-3 py-1 text-sm font-semibold"
          style={{
            background: "rgba(56, 189, 248, 0.12)",
            color: "#0284c7",
          }}
        >
          {price}
        </span>
      </div>
    </motion.div>
  );
}
