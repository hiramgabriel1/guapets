import { Icon } from "./Icon";

interface StatCardProps {
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  value: string;
}

export function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div
      className="flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 4px 16px rgba(56, 189, 248, 0.08)",
      }}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
        <Icon name={icon} size={12} />
      </div>
      <span className="text-slate-500">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}
