"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopHeader } from "@/components/TopHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { NuevoServicioModal } from "@/components/NuevoServicioModal";
import { Icon } from "@/components/Icon";

interface Servicio {
  icon: React.ComponentProps<typeof Icon>["name"];
  name: string;
  description: string;
  price: string;
}

const servicios: Servicio[] = [
  {
    icon: "stethoscope",
    name: "Consulta General",
    description: "Evaluación clínica completa del estado de salud de tu mascota.",
    price: "$200",
  },
  {
    icon: "syringe",
    name: "Vacunación",
    description: "Aplicación de vacunas esenciales y refuerzos según el calendario.",
    price: "$350",
  },
  {
    icon: "scissors",
    name: "Cirugía Menor",
    description: "Procedimientos quirúrgicos ambulatorios con anestesia local.",
    price: "$900",
  },
  {
    icon: "activity",
    name: "Análisis de Sangre",
    description: "Perfil sanguíneo completo para diagnóstico y monitoreo.",
    price: "$450",
  },
  {
    icon: "scan",
    name: "Radiografía",
    description: "Imágenes diagnósticas para evaluación ósea y de órganos internos.",
    price: "$380",
  },
  {
    icon: "heart-pulse",
    name: "Ecografía",
    description: "Ultrasonido para diagnóstico de tejidos blandos y embarazo.",
    price: "$520",
  },
  {
    icon: "pill",
    name: "Desparasitación",
    description: "Tratamiento antiparasitario interno y externo preventivo.",
    price: "$180",
  },
  {
    icon: "sparkles",
    name: "Limpieza Dental",
    description: "Profilaxis dental profesional con ultrasonido y pulido.",
    price: "$420",
  },
  {
    icon: "bandage",
    name: "Curaciones",
    description: "Limpieza y vendaje de heridas con seguimiento post-operatorio.",
    price: "$150",
  },
];

export default function ServiciosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Servicio | null>(null);

  const handleEdit = (service: Servicio) => {
    setEditingService(service);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setEditingService(null);
  };

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
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(186, 230, 255, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Sidebar */}
      <div className="relative z-10">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <TopHeader title="Servicios" subtitle="Catálogo de servicios veterinarios" />

        <div className="flex flex-1 flex-col gap-5 px-8 pb-10">
          {/* Search + Nuevo Servicio */}
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-sm text-slate-400 backdrop-blur-sm"
              style={{
                boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)",
                minWidth: 260,
              }}
            >
              <Icon name="search" size={15} />
              <input
                type="text"
                placeholder="Buscar servicio..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder-slate-400 outline-none"
              />
            </div>
            <button
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              style={{
                background: "#38bdf8",
                boxShadow: "0 4px 14px rgba(56, 189, 248, 0.35)",
              }}
              onClick={() => setModalOpen(true)}
            >
              <Icon name="plus" size={15} />
              <span>Nuevo Servicio</span>
            </button>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-3 gap-4">
            {servicios.map((service) => (
              <ServiceCard
                key={service.name}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <NuevoServicioModal
        open={modalOpen}
        onClose={handleClose}
        editingService={editingService}
      />
    </div>
  );
}
