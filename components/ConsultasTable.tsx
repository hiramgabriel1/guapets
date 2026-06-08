"use client";

import { useState } from "react";
import { Icon } from "./Icon";

interface Servicio {
  name: string;
}

interface Medicamento {
  name: string;
  dosis: string;
}

interface Consulta {
  cve: string;
  fecha: string;
  mascota: string;
  motivo: string;
  diagnostico: string;
  costo: string;
  estado: "Abierta" | "Cerrada";
  detalles: {
    veterinario: string;
    duracion: string;
    peso: string;
    temperatura: string;
  };
  servicios: Servicio[];
  medicamentos: Medicamento[];
  pago: "Pagado" | "Pendiente";
}

const consultas: Consulta[] = [
  {
    cve: "C-001",
    fecha: "15 Ene 2025",
    mascota: "Firulais",
    motivo: "Vacunación anual",
    diagnostico: "Estado general bueno, se aplica vacuna séxtuple",
    costo: "$350",
    estado: "Abierta",
    detalles: { veterinario: "Dr. García", duracion: "30 min", peso: "25 kg", temperatura: "38.5°C" },
    servicios: [{ name: "Vacunación" }, { name: "Revisión general" }],
    medicamentos: [{ name: "Antiparasitario", dosis: "1 tableta cada 3 meses" }],
    pago: "Pendiente",
  },
  {
    cve: "C-002",
    fecha: "14 Ene 2025",
    mascota: "Mishi",
    motivo: "Control general",
    diagnostico: "Sin anomalías detectadas, peso estable",
    costo: "$200",
    estado: "Cerrada",
    detalles: { veterinario: "Dr. García", duracion: "20 min", peso: "4.2 kg", temperatura: "38.8°C" },
    servicios: [{ name: "Consulta general" }],
    medicamentos: [],
    pago: "Pagado",
  },
  {
    cve: "C-003",
    fecha: "13 Ene 2025",
    mascota: "Rocky",
    motivo: "Desparasitación",
    diagnostico: "Parásitos intestinales leves, tratamiento iniciado",
    costo: "$180",
    estado: "Abierta",
    detalles: { veterinario: "Dr. García", duracion: "25 min", peso: "18 kg", temperatura: "39.0°C" },
    servicios: [{ name: "Desparasitación" }, { name: "Análisis fecal" }],
    medicamentos: [{ name: "Pyrantel", dosis: "5mg/kg cada 15 días" }, { name: "Fenbendazol", dosis: "50mg/kg por 3 días" }],
    pago: "Pagado",
  },
  {
    cve: "C-004",
    fecha: "12 Ene 2025",
    mascota: "Luna",
    motivo: "Revisión dental",
    diagnostico: "Acumulación de sarro, se recomienda limpieza profesional",
    costo: "$420",
    estado: "Cerrada",
    detalles: { veterinario: "Dr. García", duracion: "45 min", peso: "3.8 kg", temperatura: "38.6°C" },
    servicios: [{ name: "Limpieza dental" }, { name: "Radiografía dental" }],
    medicamentos: [{ name: "Meloxicam", dosis: "0.1mg/kg por 5 días" }],
    pago: "Pagado",
  },
  {
    cve: "C-005",
    fecha: "11 Ene 2025",
    mascota: "Toby",
    motivo: "Cirugía menor",
    diagnostico: "Extracción de quiste sebáceo, procedimiento exitoso",
    costo: "$900",
    estado: "Abierta",
    detalles: { veterinario: "Dr. García", duracion: "90 min", peso: "30 kg", temperatura: "38.2°C" },
    servicios: [{ name: "Cirugía menor" }, { name: "Biopsia" }, { name: "Anestesia" }],
    medicamentos: [{ name: "Amoxicilina", dosis: "20mg/kg cada 12h por 7 días" }, { name: "Metamizol", dosis: "25mg/kg cada 8h" }],
    pago: "Pendiente",
  },
];

export function ConsultasTable() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (cve: string) => {
    setExpandedId(expandedId === cve ? null : cve);
  };

  return (
    <div
      className="rounded-xl border"
      style={{
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 8px 32px rgba(56, 189, 248, 0.1)",
      }}
    >
      {/* Header */}
      <div className="border-b border-slate-100 px-6 pt-5 pb-3">
        <div
          className="grid text-xs font-semibold uppercase tracking-wide text-slate-500"
          style={{ gridTemplateColumns: "80px 120px 1fr 1fr 1fr 80px 100px 40px" }}
        >
          <span>CVE</span>
          <span>Fecha</span>
          <span>Mascota</span>
          <span>Motivo</span>
          <span>Diagnóstico</span>
          <span>Costo</span>
          <span>Estado</span>
          <span />
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {consultas.map((c, index) => {
          const isExpanded = expandedId === c.cve;
          return (
            <div key={c.cve}>
              <button
                onClick={() => toggleExpand(c.cve)}
                className={`grid w-full items-center px-6 py-3.5 text-left transition-colors ${
                  isExpanded ? "bg-blue-50/50" : index % 2 === 1 ? "bg-blue-50/30" : ""
                } hover:bg-blue-50/40`}
                style={{
                  gridTemplateColumns: "80px 120px 1fr 1fr 1fr 80px 100px 40px",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <span className="font-mono text-xs text-slate-400">{c.cve}</span>
                <span className="text-sm text-slate-500">{c.fecha}</span>
                <span className="text-sm font-semibold text-foreground">{c.mascota}</span>
                <span className="truncate text-sm text-slate-500">{c.motivo}</span>
                <span className="truncate pr-4 text-sm text-slate-500">{c.diagnostico}</span>
                <span className="text-sm font-semibold text-foreground">{c.costo}</span>
                <span>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      c.estado === "Abierta"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {c.estado}
                  </span>
                </span>
                <div className="flex justify-center">
                  <Icon
                    name="chevron-right"
                    size={14}
                    className={`text-slate-400 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                  />
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div
                  className="border-t border-slate-100 bg-blue-50/30 px-6 py-5"
                  style={{ borderBottom: "1px solid #f1f5f9" }}
                >
                  {/* Two column details */}
                  <div className="mb-4 grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Detalles de la consulta
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <span className="text-xs text-slate-400">Veterinario</span>
                          <p className="text-sm font-medium text-foreground">{c.detalles.veterinario}</p>
                        </div>
                        <div>
                          <span className="text-xs text-slate-400">Duración</span>
                          <p className="text-sm font-medium text-foreground">{c.detalles.duracion}</p>
                        </div>
                        <div>
                          <span className="text-xs text-slate-400">Peso</span>
                          <p className="text-sm font-medium text-foreground">{c.detalles.peso}</p>
                        </div>
                        <div>
                          <span className="text-xs text-slate-400">Temperatura</span>
                          <p className="text-sm font-medium text-foreground">{c.detalles.temperatura}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Pago
                      </h4>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                          c.pago === "Pagado"
                            ? "bg-green-50 text-green-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            c.pago === "Pagado" ? "bg-green-500" : "bg-amber-500"
                          }`}
                        />
                        {c.pago}
                      </span>
                    </div>
                  </div>

                  {/* Servicios */}
                  {c.servicios.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Servicios
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {c.servicios.map((s) => (
                          <span
                            key={s.name}
                            className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700"
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Medicamentos */}
                  {c.medicamentos.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Medicamentos
                      </h4>
                      <div className="space-y-1.5">
                        {c.medicamentos.map((m) => (
                          <div key={m.name} className="flex items-center gap-2">
                            <Icon name="pill" size={14} className="text-slate-400" />
                            <span className="text-sm font-medium text-foreground">{m.name}</span>
                            <span className="text-sm text-slate-500">— {m.dosis}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-6 py-3.5">
        <span className="text-xs text-slate-400">Mostrando 5 de 248 consultas</span>
        <div className="flex items-center gap-1">
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400">
            <Icon name="chevron-left" size={13} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-medium text-primary-foreground">
            1
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-medium text-slate-500">
            2
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-medium text-slate-500">
            3
          </button>
          <span className="px-1 text-xs text-slate-400">...</span>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-xs font-medium text-slate-400">
            50
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400">
            <Icon name="chevron-right" size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
