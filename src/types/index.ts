// Common types used across the application
export interface Vehicle {
  id: string;
  carType: string;
  batteryCapacity: number;
  chargePeak: number;
  stateOfCharge: number;
  speed: number;
  currentLocation: string;
  driver: string;
  odometer: number;
}

export interface GridStats {
  ridesToday: number;
  electricVehicles: number;
  totalVehicles: number;
  totalCostSavings: string;
}

export interface BatteryStats {
  currentLevel: number;
  historicalData: number[];
}