import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sun, RefreshCw, Download } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";

const Layout = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const tabs = [
    {
      id: "historical-sales",
      label: "Historical Sales",
      path: "/historical-sales",
    },
    {
      id: "forecast-demand",
      label: "Forecast Demand",
      path: "/forecast-demand",
    },
    {
      id: "inventory-procurement",
      label: "Inventory & Procurement",
      path: "/inventory-procurement",
    },
    { id: "scheduling", label: "Scheduling", path: "/scheduling" },
    {
      id: "supplier-performance",
      label: "Supplier Performance",
      path: "/supplier-performance",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Unified SCM Dashboard
          </h1>
          <p className="text-muted-foreground">
            Comprehensive supply chain management analytics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="outline" size="icon" aria-label="Refresh data">
            <RefreshCw className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </header>

      <Card className="border shadow-sm">
        <div className="border-b px-4 py-2">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  "hover:bg-muted hover:text-foreground",
                  location.pathname === tab.path
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-4">
          <Outlet />
        </div>
      </Card>

      <footer className="mt-6 text-center text-sm text-muted-foreground">
        <p>© 2023 Unified SCM Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
