const API_BASE_URL = "http://localhost:3000";

// API utility functions
export const api = {
  // Historical Sales endpoints
  getHistoricalSales: async (period: string = "Monthly") => {
    const response = await fetch(
      `${API_BASE_URL}/api/historical-sales?period=${period}`,
    );
    return response.json();
  },

  getSalesMetrics: async () => {
    const response = await fetch(`${API_BASE_URL}/api/sales-metrics`);
    return response.json();
  },

  getSalesInsights: async () => {
    const response = await fetch(`${API_BASE_URL}/api/sales-insights`);
    return response.json();
  },

  // Forecast Demand endpoints
  getForecastDemand: async (
    product: string = "Product A",
    frequency: string = "Weekly",
  ) => {
    const response = await fetch(
      `${API_BASE_URL}/api/forecast-demand?product=${product}&frequency=${frequency}`,
    );
    return response.json();
  },

  getReorderPoints: async (product: string) => {
    const response = await fetch(
      `${API_BASE_URL}/api/reorder-points?product=${product}`,
    );
    return response.json();
  },

  getEOQData: async (product: string) => {
    const response = await fetch(
      `${API_BASE_URL}/api/eoq-data?product=${product}`,
    );
    return response.json();
  },

  // Inventory & Procurement endpoints
  getInventoryData: async () => {
    const response = await fetch(`${API_BASE_URL}/api/inventory`);
    return response.json();
  },

  getLeadTimes: async () => {
    const response = await fetch(`${API_BASE_URL}/api/lead-times`);
    return response.json();
  },

  getInventoryAlerts: async () => {
    const response = await fetch(`${API_BASE_URL}/api/inventory-alerts`);
    return response.json();
  },

  getProductionSchedule: async () => {
    const response = await fetch(`${API_BASE_URL}/api/production-schedule`);
    return response.json();
  },

  // Scheduling endpoints
  getOperatorWorkload: async (operator: string = "Operator A") => {
    const response = await fetch(
      `${API_BASE_URL}/api/operator-workload?operator=${operator}`,
    );
    return response.json();
  },

  getStationLoad: async () => {
    const response = await fetch(`${API_BASE_URL}/api/station-load`);
    return response.json();
  },

  getAttendanceLog: async () => {
    const response = await fetch(`${API_BASE_URL}/api/attendance-log`);
    return response.json();
  },

  getOperatorInsights: async (operator: string) => {
    const response = await fetch(
      `${API_BASE_URL}/api/operator-insights?operator=${operator}`,
    );
    return response.json();
  },

  // Supplier Performance endpoints
  getSupplierPerformance: async (supplier: string = "Supplier A") => {
    const response = await fetch(
      `${API_BASE_URL}/api/supplier-performance?supplier=${supplier}`,
    );
    return response.json();
  },

  getDeliveryPerformance: async (supplier: string) => {
    const response = await fetch(
      `${API_BASE_URL}/api/delivery-performance?supplier=${supplier}`,
    );
    return response.json();
  },

  getSupplierMetrics: async (supplier: string) => {
    const response = await fetch(
      `${API_BASE_URL}/api/supplier-metrics?supplier=${supplier}`,
    );
    return response.json();
  },

  getAlternateSuppliers: async () => {
    const response = await fetch(`${API_BASE_URL}/api/alternate-suppliers`);
    return response.json();
  },

  getSupplierInsights: async (supplier: string) => {
    const response = await fetch(
      `${API_BASE_URL}/api/supplier-insights?supplier=${supplier}`,
    );
    return response.json();
  },

  // Common endpoints
  refreshData: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}/api/refresh/${endpoint}`, {
      method: "POST",
    });
    return response.json();
  },

  exportData: async (endpoint: string, format: string = "csv") => {
    const response = await fetch(
      `${API_BASE_URL}/api/export/${endpoint}?format=${format}`,
    );
    return response.blob();
  },
};

// Error handling wrapper
export const apiCall = async <T>(
  apiFunction: () => Promise<T>,
): Promise<T | null> => {
  try {
    return await apiFunction();
  } catch (error) {
    console.error("API call failed:", error);
    return null;
  }
};
