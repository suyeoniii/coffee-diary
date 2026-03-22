import { ArrowLeft, Ellipsis, EllipsisVertical, Pen } from "lucide-react";
import { useState } from "react";

export const CoffeeLogDetailPage = () => {
  const coffeeLog = {
    id: 1,
    title: "Ethiopia Yirgacheffe",
    dripper: "Hario V60",
    brewedAt: "2024-06-01T08:00:00.000Z",
    rating: 4,
    note: "Bright acidity with floral notes. Loved the aroma!",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMoreOptions = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete = (id: number) => {
    alert(`Delete log with id: ${id}`);
    // Implement actual delete logic here (e.g., API call)
  };

  return (
    <div>
      <div className="position:sticky relative top-0 mb-6 flex items-center justify-between">
        <button
          className="flex items-center gap-2 text-sm font-semibold text-[var(--muted-foreground)]"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          <span>Back</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm text-[var(--muted-foreground)] focus:outline-none"
          onClick={handleMoreOptions}
        >
          <Ellipsis className="h-4 w-4" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-10 right-2 w-40 rounded-md border border-[var(--border)] bg-white shadow-lg">
            <button
              type="button"
              className="hover:rounded-mdfocus:outline-none flex w-full items-center gap-2 px-4 py-2 text-sm text-[var(--muted-foreground)]"
            >
              <Pen className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-[var(--muted-foreground)] hover:rounded-md focus:outline-none"
              onClick={() => handleDelete(coffeeLog.id)}
            >
              <EllipsisVertical className="h-4 w-4" />
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>
      <span className="text-[var(--muted-foreground)]">
        {new Date(coffeeLog.brewedAt).toLocaleDateString()}
      </span>
      <h1 className="mb-2 text-2xl font-bold">{coffeeLog.title}</h1>
      <div className="mb-2 text-[var(--muted-foreground)]">Brew Setup</div>
      <div className="mb-2 flex items-center gap-1">
        <div className="rounded-lg border border-[var(--border)] bg-white/80 px-4 py-2 text-[var(--muted-foreground)]">
          <span className="text-sm">Dripper</span>
          <div className="text-[var(--secondary-foreground)]">Hario V60</div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-white/80 px-4 py-2 text-[var(--muted-foreground)]">
          <span className="text-sm">Filter</span>
          <div className="text-[var(--secondary-foreground)]">Hario</div>
        </div>
      </div>
      <div className="mb-2 text-[var(--muted-foreground)]">Parameters</div>
      <div className="mb-4 flex justify-between gap-1 text-center text-sm text-[var(--muted-foreground)]">
        <span className="rounded-lg bg-[var(--secondary)] px-4 py-2">
          <span className="font-bold text-[var(--secondary-foreground)]">
            20
          </span>
          g Dose
        </span>
        <span className="rounded-lg bg-[var(--secondary)] px-4 py-2">
          <span className="font-bold text-[var(--secondary-foreground)]">
            300
          </span>
          g Water
        </span>
        <span className="rounded-lg bg-[var(--secondary)] px-4 py-2">
          <span className="font-bold text-[var(--secondary-foreground)]">
            93
          </span>
          °C Temp
        </span>
        <span className="rounded-lg bg-[var(--secondary)] px-4 py-2">
          <div className="font-bold text-[var(--secondary-foreground)]">
            3:30
          </div>
          Time
        </span>
      </div>
      <div className="text-[var(--muted-foreground)]">Pour Steps</div>
      <div className="my-2 rounded-xl border border-[var(--border)] bg-white/80">
        <div className="border-b border-[var(--border)] p-4">
          <span className="flex justify-between">
            <span>
              <span className="me-2 rounded-full bg-[var(--secondary)] px-2 py-1 text-[var(--muted-foreground)]">
                1
              </span>
              <span>70g</span>
            </span>
            <span className="text-[var(--muted-foreground)]">0:00</span>
          </span>
        </div>
        <div className="border-b border-[var(--border)] p-4">
          <span className="flex justify-between">
            <span>
              <span className="me-2 rounded-full bg-[var(--secondary)] px-2 py-1 text-[var(--muted-foreground)]">
                2
              </span>
              <span className="">50g</span>
            </span>
            <span className="text-[var(--muted-foreground)]">0:45</span>
          </span>
        </div>
        <div className="border-b border-[var(--border)] p-4">
          <span className="flex justify-between">
            <span>
              <span className="me-2 rounded-full bg-[var(--secondary)] px-2 py-1 text-[var(--muted-foreground)]">
                3
              </span>
              <span>60g</span>
            </span>
            <span className="text-[var(--muted-foreground)]">1:20</span>
          </span>
        </div>
        <div className="border-b border-[var(--border)] p-4">
          <span className="flex justify-between">
            <span>
              <span className="me-2 rounded-full bg-[var(--secondary)] px-2 py-1 text-[var(--muted-foreground)]">
                4
              </span>
              <span>60g</span>
            </span>
            <span className="text-[var(--muted-foreground)]">2:00</span>
          </span>
        </div>
        <div className="p-4">
          <span className="flex justify-between">
            <span>
              <span className="me-2 rounded-full bg-[var(--secondary)] px-2 py-1 text-[var(--muted-foreground)]">
                5
              </span>
              <span>60g</span>
            </span>
            <span className="text-[var(--muted-foreground)]">2:45</span>
          </span>
        </div>
      </div>
      <div className="mb-2 text-[var(--muted-foreground)]">Notes</div>
      <div className="mb-4 rounded-xl border border-[var(--border)] bg-white/80 p-4 whitespace-pre-line text-[var(--secondary-foreground)]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  );
};
