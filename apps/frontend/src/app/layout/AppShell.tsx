import { ReactNode } from "react";
import { BottomTabBar } from "./BottomTabBar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-dvh bg-[#f6f3ef] text-[#2a1f1a]">
      {/* Mobile-first container */}
      <div className="mx-auto w-ful max-w-[520px]">
        <main className="px-4 pb-[calc(84px+env(safe-area-inset-bottom))] pt-4">
          {children}
        </main>
      </div>
      {/* Fixed bottom nav */}
      <div className="fixed inset-x-0 bottom-0">
        <div className="mx-auto w-full max-w-[520px] px-4 pb-[env(safe-area-inset-bottom)]">
          <BottomTabBar />
        </div>
      </div>
    </div>
  );
}
