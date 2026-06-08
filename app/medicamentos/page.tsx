"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/Sidebar";
import { TopHeader } from "@/components/TopHeader";
import { MedicamentosTable } from "@/components/MedicamentosTable";
import { StockAlertBanner } from "@/components/StockAlertBanner";
import { NuevoMedicamentoDrawer } from "@/components/NuevoMedicamentoDrawer";
import { Icon } from "@/components/Icon";

export default function MedicamentosPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className="relative flex min-h-screen overflow-hidden font-sans"
      style={{ background: "#f8fbff" }}
    >
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          top: -100,
          left: -60,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Sidebar */}
      <div className="relative z-10">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <TopHeader title="Medicamentos" subtitle="Inventario de medicamentos" />

        <div className="flex flex-1 flex-col gap-5 px-8 pb-10">
          {/* Alert banner */}
          <StockAlertBanner criticalCount={1} lowCount={2} />

          {/* Search + Nuevo Medicamento */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-400"
                style={{
                  boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)",
                  minWidth: 240,
                }}
              >
                <Icon name="search" size={15} />
                <span>Buscar medicamento...</span>
              </div>
              <button
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-500"
                style={{ boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)" }}
              >
                <Icon name="sliders-horizontal" size={14} />
                <span>Filtrar</span>
              </button>
            </div>
            <motion.button
              className="flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              style={{
                background: "#38bdf8",
                boxShadow: "0 4px 14px rgba(56, 189, 248, 0.35)",
              }}
              onClick={() => setDrawerOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Icon name="plus" size={15} />
              <span>Nuevo Medicamento</span>
            </motion.button>
          </div>

          {/* Table */}
          <MedicamentosTable />
        </div>
      </div>

      {/* Drawer */}
      <NuevoMedicamentoDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
