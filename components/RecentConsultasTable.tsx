import { GlassCard } from "./GlassCard";

interface Consulta {
  cve: string;
  mascota: string;
  especie: string;
  motivo: string;
  estado: "Abierta" | "Cerrada";
  costo: string;
}

const consultas: Consulta[] = [
  { cve: "C-001", mascota: "Firulais", especie: "Perro", motivo: "Vacunación", estado: "Abierta", costo: "$350" },
  { cve: "C-002", mascota: "Mishi", especie: "Gato", motivo: "Control general", estado: "Cerrada", costo: "$200" },
  { cve: "C-003", mascota: "Rocky", especie: "Perro", motivo: "Desparasitación", estado: "Abierta", costo: "$180" },
  { cve: "C-004", mascota: "Luna", especie: "Gato", motivo: "Revisión dental", estado: "Cerrada", costo: "$420" },
  { cve: "C-005", mascota: "Toby", especie: "Perro", motivo: "Cirugía menor", estado: "Abierta", costo: "$900" },
];

export function RecentConsultasTable() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <h3 className="text-sm font-semibold text-foreground">Consultas Recientes</h3>
        <button className="flex items-center gap-1 text-xs font-medium text-primary">
          Ver todas
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18l6-6l-6-6" />
          </svg>
        </button>
      </div>

      <div className="px-6 pt-3 pb-2">
        <div
          className="grid text-xs font-semibold uppercase tracking-wide text-slate-400"
          style={{ gridTemplateColumns: "80px 1fr 80px 1fr 100px 80px" }}
        >
          <span>CVE</span>
          <span>Mascota</span>
          <span>Especie</span>
          <span>Motivo</span>
          <span>Estado</span>
          <span className="text-right">Costo</span>
        </div>
      </div>

      <div className="flex flex-col">
        {consultas.map((c, index) => (
          <div
            key={c.cve}
            className="grid items-center px-6 py-3"
            style={{
              gridTemplateColumns: "80px 1fr 80px 1fr 100px 80px",
              borderBottom: index < consultas.length - 1 ? "1px solid #f1f5f9" : "none",
            }}
          >
            <span className="font-mono text-xs text-slate-400">{c.cve}</span>
            <span className="text-sm font-semibold text-foreground">{c.mascota}</span>
            <span className="text-sm text-slate-500">{c.especie}</span>
            <span className="text-sm text-slate-500">{c.motivo}</span>
            <span>
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  c.estado === "Abierta"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {c.estado}
              </span>
            </span>
            <span className="text-right text-sm font-semibold text-foreground">{c.costo}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
