"use client";

import { WellbeingScore } from "@/components/dashboard/WellbeingScore";
import { MoodTracker } from "@/components/dashboard/MoodTracker";
import { LearningPathways } from "@/components/dashboard/LearningPathways";
import { SpendingGraph } from "@/components/dashboard/SpendingGraph";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ActionButtons } from "@/components/dashboard/ActionButtons";
import { ChatInterface } from "@/components/chat/ChatInterface";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your financial wellness overview.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <WellbeingScore />
        <div className="space-y-6">
          <MoodTracker />
          <ActionButtons />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SpendingGraph />
        <LearningPathways />
      </div>

      <QuickActions />
    </div>
  );
}