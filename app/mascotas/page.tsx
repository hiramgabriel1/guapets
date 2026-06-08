"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopHeader } from "@/components/TopHeader";
import { PetCard } from "@/components/PetCard";
import { PetStats } from "@/components/PetStats";
import { NuevaMascotaDrawer } from "@/components/NuevaMascotaDrawer";
import { Icon } from "@/components/Icon";

interface Pet {
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: "Macho" | "Hembra";
  owner: string;
  type: "dog" | "cat";
}

const pets: Pet[] = [
  { name: "Firulais", species: "Perro", breed: "Labrador Retriever", age: 3, gender: "Macho", owner: "Carlos Ramírez", type: "dog" },
  { name: "Mishi", species: "Gato", breed: "Siamés", age: 2, gender: "Hembra", owner: "Ana Torres", type: "cat" },
  { name: "Rocky", species: "Perro", breed: "Bulldog Francés", age: 5, gender: "Macho", owner: "José López", type: "dog" },
  { name: "Toby", species: "Perro", breed: "Golden Retriever", age: 4, gender: "Macho", owner: "Pedro García", type: "dog" },
  { name: "Coco", species: "Perro", breed: "Poodle", age: 6, gender: "Hembra", owner: "Sofía Martínez", type: "dog" },
  { name: "Max", species: "Perro", breed: "Pastor Alemán", age: 2, gender: "Macho", owner: "Roberto Hernández", type: "dog" },
];

export default function MascotasPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        <TopHeader title="Mascotas" subtitle="Bienvenido de nuevo, Dr. García" />

        <div className="flex flex-1 flex-col gap-5 px-8 pb-10">
          {/* Search + Filters */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-400"
              style={{
                boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)",
                minWidth: 220,
              }}
            >
              <Icon name="search" size={15} />
              <span>Buscar mascota...</span>
            </div>
            {["Especie", "Dueño", "Sexo"].map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-500"
                style={{ boxShadow: "0 2px 8px rgba(56, 189, 248, 0.07)" }}
              >
                <Icon name="sliders-horizontal" size={14} />
                <span>{filter}</span>
                <Icon name="chevron-right" size={12} className="rotate-90 text-slate-400" />
              </button>
            ))}
            <button
              className="ml-auto flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              style={{
                background: "#38bdf8",
                boxShadow: "0 4px 14px rgba(56, 189, 248, 0.35)",
              }}
              onClick={() => setDrawerOpen(true)}
            >
              <Icon name="plus" size={15} />
              <span>Nueva Mascota</span>
            </button>
          </div>

          {/* Stats */}
          <PetStats total={2047} dogs={1183} cats={742} others={122} />

          {/* Pet cards grid */}
          <div className="grid grid-cols-3 gap-4">
            {pets.map((pet) => (
              <PetCard key={pet.name} {...pet} />
            ))}
          </div>

          {/* Pagination text */}
          <span className="text-xs text-slate-400">
            Mostrando 8 de 2,047 mascotas
          </span>
        </div>
      </div>

      {/* Drawer */}
      <NuevaMascotaDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
