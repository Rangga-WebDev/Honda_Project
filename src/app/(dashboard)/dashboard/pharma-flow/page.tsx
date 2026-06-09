/** @format */

import { Pill } from "lucide-react";

import { DashboardPlaceholderPage } from "@/features/dashboard/components/dashboard-placeholder-page";

export default function PharmaFlowPage() {
  return (
    <DashboardPlaceholderPage
      title="PharmaFlow"
      description="Halaman untuk mengelola nama obat, dosis, jadwal konsumsi, status sudah diminum, dan riwayat penggunaan obat."
      icon={Pill}
    />
  );
}
