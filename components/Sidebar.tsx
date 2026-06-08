"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Icon } from "./Icon";

const navItems = [
  { href: "/dashboard", icon: "layout-dashboard" as const, label: "Dashboard" },
  { href: "/duenos", icon: "users" as const, label: "Dueños" },
  { href: "/mascotas", icon: "paw-print" as const, label: "Mascotas" },
  { href: "/consultas", icon: "stethoscope" as const, label: "Consultas" },
  { href: "/servicios", icon: "briefcase-medical" as const, label: "Servicios" },
  { href: "/medicamentos", icon: "pill" as const, label: "Medicamentos" },
  { href: "/pagos", icon: "credit-card" as const, label: "Pagos" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex w-60 min-h-full flex-col shrink-0 gap-2 bg-white/70 px-4 py-6 backdrop-blur-[20px]"
      style={{
        borderRight: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "2px 0 24px rgba(56, 189, 248, 0.07)",
      }}
    >
      <div className="flex items-center gap-2 px-3 pt-2 pb-6">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary">
          <Icon name="paw-print" size={18} className="text-primary-foreground" />
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">
          Guapets
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.href}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={item.href}
                className={`flex cursor-pointer items-center gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
                style={
                  isActive
                    ? { boxShadow: "0 4px 12px rgba(56, 189, 248, 0.3)" }
                    : undefined
                }
              >
                <Icon name={item.icon} size={17} />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-100 px-3 py-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
          <Icon name="user" size={15} className="text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold leading-tight text-foreground">
            Dr. García
          </span>
          <span className="text-xs leading-tight text-slate-500">
            Administrador
          </span>
        </div>
        <motion.button
          className="ml-auto cursor-pointer"
          aria-label="Cerrar sesión"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon name="log-out" size={14} className="text-slate-500" />
        </motion.button>
      </div>
    </aside>
  );
}
