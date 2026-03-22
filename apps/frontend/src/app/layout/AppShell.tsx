import { ReactNode } from "react";
import { BottomTabBar } from "./BottomTabBar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[#2a1f1a]">
      {/* Mobile-first container */}
      <div className="mx-auto w-full max-w-[520px]">
        <main className="px-5 pt-10 pb-[calc(84px+env(safe-area-inset-bottom))]">
          {children}
        </main>
      </div>
      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[520px] -translate-x-1/2">
        <div className="mx-auto w-full max-w-[520px] px-4 pb-[env(safe-area-inset-bottom)]">
          <BottomTabBar />
        </div>
      </div>
    </div>
  );
}
