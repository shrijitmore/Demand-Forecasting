import React from "react";
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

const ForecastDemand = () => {
  const products = ["Product A", "Product B", "Product C"];
  const frequencies = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="w-full p-4 bg-background space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Forecast Demand</h2>
        <div className="flex items-center space-x-2">
          <Select defaultValue="Product A">
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
          <Select defaultValue="Weekly">
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
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
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
            Line Chart: Forecasted vs Actual Demand
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
