/** @format */

import { Dumbbell } from "lucide-react";

import { DashboardPlaceholderPage } from "@/features/dashboard/components/dashboard-placeholder-page";

export default function BrainGymPage() {
  return (
    <DashboardPlaceholderPage
      title="Brain Gym"
      description="Halaman panduan latihan brain gym bertahap, dilengkapi instruksi sederhana, timer, dan progres latihan."
      icon={Dumbbell}
    />
  );
}
