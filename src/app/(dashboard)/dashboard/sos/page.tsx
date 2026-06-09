/** @format */

import { ShieldAlert } from "lucide-react";

import { DashboardPlaceholderPage } from "@/features/dashboard/components/dashboard-placeholder-page";

export default function SosPage() {
  return (
    <DashboardPlaceholderPage
      title="SOS Darurat"
      description="Halaman untuk layanan bantuan cepat ketika lansia berada dalam kondisi gawat darurat."
      icon={ShieldAlert}
      status="Prioritas tinggi. Fitur ini akan membutuhkan integrasi kontak darurat dan notifikasi."
    />
  );
}
