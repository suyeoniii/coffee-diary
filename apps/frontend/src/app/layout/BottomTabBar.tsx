import { BookOpen, Coffee, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

function TabItem({
  to,
  label,
  icon: Icon,
}: {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2",
          "transition",
          isActive ? "bg-white/70 shadow-sm" : "opacity-70 hover:opacity-100",
        ].join(" ")
      }
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs">{label}</span>
    </NavLink>
  );
}

export function BottomTabBar() {
  return (
    <nav className="mb-3 rounded-3xl bg-white/60 p-2 shadow-md backdrop-blur">
      <div className="flex item-stretch gap-2">
        <TabItem to="/recipes" label="Recipes" icon={BookOpen} />
        <TabItem to="/beans" label="Beans" icon={Coffee} />
        <TabItem to="/settings" label="Settings" icon={Settings} />
      </div>
    </nav>
  );
}
