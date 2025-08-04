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

const Scheduling = () => {
  const operators = ["Operator A", "Operator B", "Operator C"];

  return (
    <div className="w-full p-4 bg-background space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Scheduling & Operators</h2>
        <div className="flex items-center space-x-2">
          <Select defaultValue="Operator A">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Operator" />
            </SelectTrigger>
            <SelectContent>
              {operators.map((operator) => (
                <SelectItem key={operator} value={operator}>
                  {operator}
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
          <div className="text-xl font-medium mb-4">Operator Workload</div>
          <div className="h-80 w-full bg-muted/20 flex items-center justify-center border rounded-md">
            Bar Chart: Operator Workload
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">Station Load</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Bar Chart: Station Load
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="text-xl font-medium mb-4">Attendance Log</div>
            <div className="h-60 w-full bg-muted/20 flex items-center justify-center border rounded-md">
              Table: Attendance Log
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-medium">AI Insights by Operator</div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
          <div className="border rounded-md p-4 bg-muted/10">
            <p className="text-muted-foreground">
              Operator A has maintained a 98% attendance rate and completed 127
              units this month, which is 15% above average. Their efficiency
              score is in the top 10% of all operators.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scheduling;
