import { Icon } from "./Icon";

interface Pet {
  name: string;
  breed: string;
  owner: string;
  gender: "Macho" | "Hembra";
  type: "dog" | "cat";
}

const pets: Pet[] = [
  { name: "Firulais", breed: "Labrador", owner: "Carlos R...", gender: "Macho", type: "dog" },
  { name: "Mishi", breed: "Siamés", owner: "Ana Torres", gender: "Hembra", type: "cat" },
  { name: "Rocky", breed: "Bulldog", owner: "José López", gender: "Macho", type: "dog" },
  { name: "Luna", breed: "Persa", owner: "María Ruiz", gender: "Hembra", type: "cat" },
];

export function RecentPets() {
  return (
    <div
      className="flex flex-col rounded-xl p-5"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 4px 16px rgba(56, 189, 248, 0.06)",
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Mascotas Recientes</h3>
        <button className="flex items-center gap-1 text-xs font-medium text-primary">
          Ver todas
          <Icon name="chevron-right" size={12} />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {pets.map((pet) => (
          <div key={pet.name} className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ background: "rgba(56, 189, 248, 0.1)" }}
            >
              <Icon
                name={pet.type === "dog" ? "paw-print" : "paw-print"}
                size={16}
                className="text-primary"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-sm font-semibold text-foreground">{pet.name}</span>
              <span className="truncate text-xs text-slate-500">
                {pet.breed} · {pet.owner}
              </span>
            </div>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                pet.gender === "Macho"
                  ? "bg-blue-50 text-blue-600"
                  : "bg-pink-50 text-pink-500"
              }`}
            >
              {pet.gender}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
