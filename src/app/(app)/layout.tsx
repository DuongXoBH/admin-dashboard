import Dashboard from "@/components/common/dashboard/dashboard";

    
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}
