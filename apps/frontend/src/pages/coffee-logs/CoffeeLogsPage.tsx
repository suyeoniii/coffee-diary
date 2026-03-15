import { Plus } from "lucide-react";
import { CoffeeLogCard } from "./components/CoffeeLogCard";
import { mockCoffeeLogs } from "./mock";
import { useEffect, useState } from "react";
import { fetchCoffeeLogs } from "../../app/api/logs";
import { BrewLog } from "../../types/log";

export function CoffeeLogsPage() {
  const [logs, setLogs] = useState<BrewLog[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await fetchCoffeeLogs();
        console.log(data);
        setLogs(data);
      } catch (error) {
        console.error("Error fetching coffee logs:", error);
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="flex h-full flex-col gap-6">
      <header className="flex h-full flex-col items-center justify-center gap-4">
        <div className="flex w-full max-w-md items-center justify-between">
          <h1 className="text-2xl font-bold">My Coffee Log</h1>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#5b3922] px-4 py-3 text-sm font-semibold text-white hover:bg-[#4a2d1a] focus:outline-none"
            onClick={() => (window.location.href = "/logs/new")}
          >
            <Plus className="mr-1 h-4 w-4" />
            <span>New Log</span>
          </button>
        </div>
      </header>
      <div className="text-center text-sm text-gray-500">
        {logs.map((log) => (
          <CoffeeLogCard key={log.id} log={log}></CoffeeLogCard>
        ))}
        {mockCoffeeLogs.map((log) => (
          <CoffeeLogCard key={log.id} log={log}></CoffeeLogCard>
        ))}
      </div>
    </div>
  );
}
