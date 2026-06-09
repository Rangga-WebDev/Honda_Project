/** @format */

import { BrainCircuit } from "lucide-react";

import { DashboardPlaceholderPage } from "@/features/dashboard/components/dashboard-placeholder-page";

export default function CogniSyncPage() {
  return (
    <DashboardPlaceholderPage
      title="CogniSync"
      description="Halaman untuk latihan harian, permainan memori, senam jari, dan tantangan logika yang membantu meningkatkan fokus dan koordinasi."
      icon={BrainCircuit}
    />
  );
}
