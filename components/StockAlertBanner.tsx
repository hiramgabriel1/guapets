import { Icon } from "./Icon";

interface StockAlertBannerProps {
  criticalCount: number;
  lowCount: number;
}

export function StockAlertBanner({ criticalCount, lowCount }: StockAlertBannerProps) {
  if (criticalCount === 0 && lowCount === 0) return null;

  return (
    <div
      className="flex items-center gap-3 rounded-xl px-5 py-3"
      style={{
        background: criticalCount > 0
          ? "rgba(254, 226, 226, 0.7)"
          : "rgba(254, 243, 199, 0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: criticalCount > 0
          ? "1px solid rgba(252, 165, 165, 0.5)"
          : "1px solid rgba(253, 224, 71, 0.5)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
        style={{
          background: criticalCount > 0
            ? "rgba(239, 68, 68, 0.15)"
            : "rgba(245, 158, 11, 0.15)",
        }}
      >
        <Icon
          name={criticalCount > 0 ? "alert-triangle" : "alert-circle"}
          size={16}
          className={criticalCount > 0 ? "text-red-500" : "text-amber-500"}
        />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">
          {criticalCount > 0
            ? `${criticalCount} medicamento${criticalCount > 1 ? "s" : ""} agotado${criticalCount > 1 ? "s" : ""}`
            : `${lowCount} medicamento${lowCount > 1 ? "s" : ""} con stock bajo`}
        </p>
        <p className="text-xs text-slate-500">
          {criticalCount > 0
            ? "Reabastece los productos agotados para evitar interrupciones."
            : "Considera reabastecer los productos con stock bajo."}
        </p>
      </div>
      <button className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-slate-50">
        Ver detalles
      </button>
    </div>
  );
}
