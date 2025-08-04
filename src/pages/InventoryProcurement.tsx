import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";

const InventoryProcurement = () => {
  return (
    <div className="w-full p-4 bg-background space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Inventory & Procurement</h2>
        <div className="flex items-center space-x-2">
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
          <div className="text-xl font-medium mb-4">Reorder Chart</div>
          <div className="h-80 w-full bg-muted/20 flex items-center justify-center border rounded-md">
            Chart: SKU vs Reorder Point
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">Lead Time by SKU</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Chart: Lead Time by SKU
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">Inventory Alerts</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Table: Inventory Alerts
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-medium">Production Schedule</div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
          <div className="border rounded-md p-4 bg-muted/10 h-60 flex items-center justify-center">
            Table: Production Schedule
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryProcurement;
