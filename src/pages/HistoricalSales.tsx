import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api, apiCall } from "@/lib/api";

const HistoricalSales = () => {
  const periods = ["Monthly", "Quarterly", "Yearly"];
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSalesData = async () => {
    setLoading(true);
    const data = await apiCall(() => api.getHistoricalSales(selectedPeriod));
    setSalesData(data);
    setLoading(false);
  };

  const handleRefresh = async () => {
    await apiCall(() => api.refreshData("historical-sales"));
    fetchSalesData();
  };

  const handleExport = async () => {
    const blob = await apiCall(() => api.exportData("historical-sales"));
    if (blob) {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `historical-sales-${selectedPeriod.toLowerCase()}.csv`;
      a.click();
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, [selectedPeriod]);

  return (
    <div className="w-full p-4 bg-background space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Historical Sales</h2>
        <div className="flex items-center space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period} value={period}>
                  {period}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            onClick={handleRefresh}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
          <Button variant="outline" size="icon" onClick={handleExport}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="w-full">
        <CardContent className="p-6">
          <div className="text-xl font-medium mb-4">Sales Visualization</div>
          <div className="h-80 w-full bg-muted/20 flex items-center justify-center border rounded-md">
            {loading ? (
              <div className="text-muted-foreground">Loading sales data...</div>
            ) : (
              <div className="text-muted-foreground">
                Chart Area: Sales by Region (Data from
                http://localhost:3000/api/historical-sales)
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">Monthly Sales Trend</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Line Chart: Monthly Sales Trend
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">Sales Distribution</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Pie Chart: Sales by Category
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-medium">AI-Generated Insights</div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
          <div className="border rounded-md p-4 bg-muted/10">
            <p className="text-muted-foreground">
              Sales have increased by 15% compared to the previous period, with
              the highest growth in the Western region (23%). The Electronics
              category shows the strongest performance with a 31% increase
              year-over-year.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoricalSales;
