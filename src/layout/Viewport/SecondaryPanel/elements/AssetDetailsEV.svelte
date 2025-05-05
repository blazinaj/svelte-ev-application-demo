<!-- Asset:EV Details Table component -->
<script lang="ts">
  import type { Vehicle } from 'src/types';
  import DataTable from 'src/components/shared/DataTable.svelte';

  const vehicle: Vehicle = {
    id: '13630-0012',
    carType: 'Mitsubishi',
    batteryCapacity: 58.3,
    chargePeak: 10,
    stateOfCharge: 53,
    speed: 35,
    currentLocation: '9 Onsgard Park',
    driver: 'Shir Trusslove',
    odometer: 53871
  };

  const tableData = [
    { label: 'ID', value: vehicle.id },
    { label: 'Car Type', value: vehicle.carType },
    { label: 'Battery Capacity (kWh)', value: vehicle.batteryCapacity },
    { label: 'Charge Peak (kW)', value: vehicle.chargePeak },
    { label: 'State of Charge', value: `${vehicle.stateOfCharge}%` },
    { label: 'Speed (mph)', value: vehicle.speed },
    { label: 'Current Location', value: vehicle.currentLocation },
    { label: 'Driver', value: vehicle.driver },
    { label: 'Odometer', value: vehicle.odometer }
  ];
</script>

<DataTable data={tableData} />