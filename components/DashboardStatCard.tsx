"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

interface DashboardStatCardProps {
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  subtitle?: string;
}

export function DashboardStatCard({
  icon,
  label,
  value,
  change,
  changeType,
  subtitle,
}: DashboardStatCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-3 rounded-xl p-5"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 4px 16px rgba(56, 189, 248, 0.06)",
      }}
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(56, 189, 248, 0.12)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ background: "rgba(56, 189, 248, 0.12)" }}
        >
          <Icon name={icon} size={18} className="text-primary" />
        </div>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            changeType === "positive"
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        {subtitle && (
          <p className="mt-0.5 text-xs text-slate-400">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
