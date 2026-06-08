"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/Sidebar";
import { TopHeader } from "@/components/TopHeader";
import { QuickActions } from "@/components/QuickActions";
import { DashboardStatCard } from "@/components/DashboardStatCard";
import { ConsultasChart } from "@/components/ConsultasChart";
import { RecentPets } from "@/components/RecentPets";
import { RecentConsultasTable } from "@/components/RecentConsultasTable";

const stats = [
  {
    icon: "users" as const,
    label: "Total Dueños",
    value: "1,284",
    change: "+12%",
    changeType: "positive" as const,
    subtitle: "vs. mes anterior",
  },
  {
    icon: "paw-print" as const,
    label: "Total Mascotas",
    value: "2,047",
    change: "+8%",
    changeType: "positive" as const,
    subtitle: "vs. mes anterior",
  },
  {
    icon: "stethoscope" as const,
    label: "Consultas Hoy",
    value: "38",
    change: "+5",
    changeType: "positive" as const,
    subtitle: "desde ayer",
  },
  {
    icon: "credit-card" as const,
    label: "Pagos Pendientes",
    value: "$14,200",
    change: "-3%",
    changeType: "negative" as const,
    subtitle: "vs. mes anterior",
  },
];

export default function DashboardPage() {
  return (
    <div
      className="relative flex min-h-screen overflow-hidden font-sans"
      style={{ background: "#f0f7ff" }}
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
        <TopHeader title="Dashboard" subtitle="Bienvenido de nuevo, Dr. García" />

        <div className="flex flex-1 flex-col gap-5 px-8 pb-10">
          {/* Quick actions */}
          <QuickActions />

          {/* Stat cards */}
          <motion.div
            className="grid grid-cols-4 gap-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <DashboardStatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>

          {/* Chart + Recent pets row */}
          <div className="flex gap-4">
            <div className="flex-1">
              <ConsultasChart />
            </div>
            <div className="w-80">
              <RecentPets />
            </div>
          </div>

          {/* Recent consultations table */}
          <RecentConsultasTable />
        </div>
      </div>
    </div>
  );
}
