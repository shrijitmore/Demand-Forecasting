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

const SupplierPerformance = () => {
  const suppliers = ["Supplier A", "Supplier B", "Supplier C"];

  return (
    <div className="w-full p-4 bg-background space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Supplier Performance</h2>
        <div className="flex items-center space-x-2">
          <Select defaultValue="Supplier A">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Supplier" />
            </SelectTrigger>
            <SelectContent>
              {suppliers.map((supplier) => (
                <SelectItem key={supplier} value={supplier}>
                  {supplier}
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
          <div className="text-xl font-medium mb-4">Delivery Performance</div>
          <div className="h-80 w-full bg-muted/20 flex items-center justify-center border rounded-md">
            Pie Chart: On-Time vs Late Delivery
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">Supplier Metrics</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Metrics: Lead Time, OTD %, Fulfillment %, Quality Score
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">Alternate Suppliers</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Table: Alternate Suppliers
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-medium">AI Insight for SKU</div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
          <div className="border rounded-md p-4 bg-muted/10">
            <p className="text-muted-foreground">
              Supplier A has shown consistent improvement in delivery times,
              reducing average lead time by 2.3 days over the past quarter.
              Quality scores have improved by 7% with a reduction in defect rate
              from 1.2% to 0.8%.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplierPerformance;
