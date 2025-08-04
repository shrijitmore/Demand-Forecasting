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

const ForecastDemand = () => {
  const products = ["Product A", "Product B", "Product C"];
  const frequencies = ["Daily", "Weekly", "Monthly"];
  const [selectedProduct, setSelectedProduct] = useState("Product A");
  const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchForecastData = async () => {
    setLoading(true);
    const data = await apiCall(() =>
      api.getForecastDemand(selectedProduct, selectedFrequency),
    );
    setForecastData(data);
    setLoading(false);
  };

  const handleRefresh = async () => {
    await apiCall(() => api.refreshData("forecast-demand"));
    fetchForecastData();
  };

  const handleExport = async () => {
    const blob = await apiCall(() => api.exportData("forecast-demand"));
    if (blob) {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `forecast-demand-${selectedProduct}-${selectedFrequency}.csv`;
      a.click();
    }
  };

  useEffect(() => {
    fetchForecastData();
  }, [selectedProduct, selectedFrequency]);

  return (
    <div className="w-full p-4 bg-background space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Forecast Demand</h2>
        <div className="flex items-center space-x-2">
          <Select value={selectedProduct} onValueChange={setSelectedProduct}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Product" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product} value={product}>
                  {product}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={selectedFrequency}
            onValueChange={setSelectedFrequency}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Frequency" />
            </SelectTrigger>
            <SelectContent>
              {frequencies.map((frequency) => (
                <SelectItem key={frequency} value={frequency}>
                  {frequency}
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
          <div className="text-xl font-medium mb-4">
            Forecasted vs Actual Demand
          </div>
          <div className="h-80 w-full bg-muted/20 flex items-center justify-center border rounded-md">
            {loading ? (
              <div className="text-muted-foreground">
                Loading forecast data...
              </div>
            ) : (
              <div className="text-muted-foreground">
                Line Chart: Forecasted vs Actual Demand (Data from
                http://localhost:3000/api/forecast-demand)
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">
              Reorder Point & Safety Stock
            </div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Line Chart: Forecasted Reorder Point & Safety Stock
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">EOQ and Demand</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Line Chart: EOQ and Demand
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-medium">Forecasted Demand Table</div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </Button>
          </div>
          <div className="border rounded-md p-4 bg-muted/10 h-60 flex items-center justify-center">
            Table: Forecasted Demand Data
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForecastDemand;
