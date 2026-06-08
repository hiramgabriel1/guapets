import { Icon } from "./Icon";

interface PaymentSummaryChipsProps {
  todayTotal: string;
  pendingTotal: string;
  monthTotal: string;
}

export function PaymentSummaryChips({ todayTotal, pendingTotal, monthTotal }: PaymentSummaryChipsProps) {
  const chips = [
    { icon: "credit-card" as const, label: "Total Recaudado Hoy", value: todayTotal },
    { icon: "clock" as const, label: "Pagos Pendientes", value: pendingTotal },
    { icon: "calendar" as const, label: "Total del Mes", value: monthTotal },
  ];

  return (
    <div className="flex gap-3">
      {chips.map((chip) => (
        <div
          key={chip.label}
          className="flex items-center gap-3 rounded-full px-5 py-3"
          style={{
            background: "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: "0 4px 16px rgba(56, 189, 248, 0.08)",
          }}
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full"
            style={{ background: "rgba(56, 189, 248, 0.12)" }}
          >
            <Icon name={chip.icon} size={16} className="text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">{chip.label}</span>
            <span className="text-base font-bold text-foreground">{chip.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
