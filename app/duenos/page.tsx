"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/Sidebar";
import { TopHeader } from "@/components/TopHeader";
import { StatCard } from "@/components/StatCard";
import { DuenosTable } from "@/components/DuenosTable";
import { DuenosDrawer } from "@/components/DuenosDrawer";
import { Icon } from "@/components/Icon";

export default function DuenosPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className="relative flex min-h-screen overflow-hidden font-sans"
      style={{ background: "#f8fbff" }}
    >
      {/* Background decorative blobs */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          top: -100,
          left: -60,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.13) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          bottom: 40,
          right: 420,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          top: 200,
          left: 400,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(186, 230, 255, 0.14) 0%, transparent 70%)",
        }}
      />

      {/* Sidebar */}
      <div className="relative z-10">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <TopHeader
          title="Dueños"
          subtitle="Bienvenido de nuevo, Dr. García"
        />

        <div className="flex flex-1 flex-col gap-5 px-8 pb-10">
          {/* Search, filter, and add button row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-400"
                style={{
                  boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)",
                  minWidth: 260,
                }}
              >
                <Icon name="search" size={15} />
                <span>Buscar dueño...</span>
              </div>
              <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-500" style={{ boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)" }}>
                <Icon name="sliders-horizontal" size={14} />
                <span>Filtrar</span>
              </button>
            </div>
            <motion.button
              className="flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              style={{
                background: "#38bdf8",
                boxShadow: "0 4px 14px rgba(56, 189, 248, 0.35)",
              }}
              onClick={() => setDrawerOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Icon name="plus" size={15} />
              <span>Nuevo Dueño</span>
            </motion.button>
          </div>

          {/* Stat cards */}
          <div className="flex gap-3">
            <StatCard icon="users" label="Total" value="1,284" />
            <StatCard icon="user-check" label="Activos" value="1,201" />
            <StatCard icon="paw-print" label="Con Mascotas" value="1,102" />
          </div>

          {/* Table */}
          <DuenosTable />
        </div>
      </div>

      {/* Drawer */}
      <DuenosDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
