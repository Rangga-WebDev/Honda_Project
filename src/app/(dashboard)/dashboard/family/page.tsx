/** @format */

import { UsersRound } from "lucide-react";

import { DashboardPlaceholderPage } from "@/features/dashboard/components/dashboard-placeholder-page";

export default function FamilyPage() {
  return (
    <DashboardPlaceholderPage
      title="Keluarga"
      description="Halaman untuk menghubungkan keluarga, caregiver, dan lansia agar pemantauan kondisi harian lebih mudah dilakukan."
      icon={UsersRound}
    />
  );
}
