"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

interface PetCardProps {
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: "Macho" | "Hembra";
  owner: string;
  type: "dog" | "cat";
}

export function PetCard({ name, species, breed, age, gender, owner, type }: PetCardProps) {
  return (
    <motion.div
      className="flex flex-col rounded-xl p-5"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 4px 16px rgba(56, 189, 248, 0.06)",
      }}
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(56, 189, 248, 0.12)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-3 flex flex-col items-center">
        <div className="relative mb-3">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: "rgba(56, 189, 248, 0.15)" }}
          >
            <Icon
              name={type === "dog" ? "paw-print" : "paw-print"}
              size={22}
              className="text-primary"
            />
          </div>
          <span
            className={`absolute -right-1 -top-1 rounded-full px-2 py-0.5 text-xs font-medium ${
              gender === "Macho"
                ? "bg-blue-50 text-blue-600"
                : "bg-pink-50 text-pink-500"
            }`}
          >
            {gender}
          </span>
        </div>
        <h4 className="text-sm font-bold text-foreground">{name}</h4>
        <p className="text-xs text-slate-500">
          {species} · {breed}
        </p>
        <p className="text-xs text-slate-400">{age} años</p>
      </div>

      <div className="mb-3 flex items-center gap-1.5 border-t border-slate-100 pt-3">
        <Icon name="user" size={12} className="text-slate-400" />
        <span className="text-xs text-slate-500">{owner}</span>
      </div>

      <div className="flex gap-2">
        <motion.button
          className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full py-2 text-xs font-medium"
          style={{
            background: "rgba(56, 189, 248, 0.1)",
            color: "#0284c7",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon name="eye" size={12} />
          Ver
        </motion.button>
        <motion.button
          className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full py-2 text-xs font-medium"
          style={{
            background: "rgba(56, 189, 248, 0.1)",
            color: "#0284c7",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon name="pencil" size={12} />
          Editar
        </motion.button>
      </div>
    </motion.div>
  );
}
