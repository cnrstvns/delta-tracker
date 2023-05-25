import useSWR from 'swr';
import axios from 'axios';

type FlightData = {
  timestamp: Date;
  eta: null;
  flightDuration: number;
  flightNumber: string;
  latitude: number;
  longitude: number;
  noseId: string;
  paState: null;
  vehicleId: string;
  destination: string;
  origin: string;
  flightId: string;
  airspeed: null;
  airTemperature: number;
  altitude: number;
  distanceToGo: null;
  doorState: string;
  groundspeed: number;
  heading: number;
  timeToGo: number;
  wheelWeightState: string;
};

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

export const useFlightData = () => {
  const { data, isLoading } = useSWR<FlightData>('/api', fetcher, {
    refreshInterval: 15_000, // every 15 seconds
  });

  return { data, isLoading };
};
