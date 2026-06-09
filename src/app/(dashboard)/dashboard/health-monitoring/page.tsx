/** @format */

import { HeartPulse } from "lucide-react";

import { DashboardPlaceholderPage } from "@/features/dashboard/components/dashboard-placeholder-page";

export default function HealthMonitoringPage() {
  return (
    <DashboardPlaceholderPage
      title="Monitoring Kesehatan"
      description="Halaman untuk mencatat dan memantau tekanan darah, gula darah, berat badan, status harian, dan indikator kesehatan lansia."
      icon={HeartPulse}
    />
  );
}
