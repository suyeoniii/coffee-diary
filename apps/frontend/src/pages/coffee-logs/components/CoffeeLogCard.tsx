import { Link } from "react-router-dom";
import { formatCardDate } from "../../../lib/date";
import { Circle } from "lucide-react";

type CoffeeLogCardProps = {
  log: {
    id: number;
    title: string;
    subtitle?: string;
    dripper?: string;
    brewedAt: string;
    rating?: number;
    note?: string;
    tags?: string[];
  };
  onClick?: (id: number) => void;
};

export function CoffeeLogCard({ log }: CoffeeLogCardProps) {
  return (
    <Link to={`/logs/${log.id}`}>
      <div className="my-3 rounded-xl border border-[var(--border)] bg-white/80 p-5">
        <div className="mb-2 flex items-start justify-between">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-black">{log.title}</h2>
            <h3 className="text-md text-left text-[var(--muted-foreground)]">
              {log.subtitle}
            </h3>
          </div>
          <p className="text-sm text-[var(--muted-foreground)]">
            {formatCardDate(log.brewedAt)}
          </p>
        </div>
        <p className="mb-3 text-left text-sm whitespace-pre-line text-[var(--muted-foreground)]">
          {log.note}
        </p>
        {/* rating */}
        {log.rating && (
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={
                  i < log.rating! ? "text-[var(--primary)]" : "text-gray-300"
                }
              >
                <Circle className="h-2 w-2 fill-current" />
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
