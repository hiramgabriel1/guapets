import { Icon } from "./Icon";

interface PetStatsProps {
  total: number;
  dogs: number;
  cats: number;
  others: number;
}

export function PetStats({ total, dogs, cats, others }: PetStatsProps) {
  const stats = [
    { icon: "paw-print" as const, label: "Total Mascotas", value: total.toLocaleString() },
    { icon: "paw-print" as const, label: "Perros", value: dogs.toLocaleString() },
    { icon: "paw-print" as const, label: "Gatos", value: cats.toLocaleString() },
    { icon: "paw-print" as const, label: "Otros", value: others.toLocaleString() },
  ];

  return (
    <div className="flex gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-2 rounded-full px-4 py-2.5"
          style={{
            background: "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: "0 4px 16px rgba(56, 189, 248, 0.08)",
          }}
        >
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full"
            style={{ background: "rgba(56, 189, 248, 0.12)" }}
          >
            <Icon name={stat.icon} size={12} className="text-primary" />
          </div>
          <span className="text-sm text-slate-500">{stat.label}</span>
          <span className="text-sm font-bold text-foreground">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
