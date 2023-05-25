'use client';

import { useFlightData } from '@/app/_hooks/use-flight-data';
import { Time } from '@/app/_components/time';
import { Card } from '@/app/_components/card';

export default function Home() {
  const { data } = useFlightData();

  if (!data) return 'Loading...';

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-neutral-900">
      <div className="absolute w-full flex items-center p-4 top-0 h-12 font-regular bg-neutral-800">
        <div>
          Latest update:{' '}
          <span className="font-mono">{data.timestamp.toString()}</span>
        </div>
      </div>

      <div className="flex flex-col max-w-lg space-y-4">
        <div>
          <span>You are on&nbsp;</span>
          <span className="font-bold">{data.flightNumber}</span>
          &nbsp;from&nbsp;
          <span className="font-bold">{data.origin}</span>
          <span>&nbsp;to&nbsp;</span>
          <span className="font-bold">{data.destination}</span>, expected to
          take&nbsp;
          <Time minutes={data.flightDuration} postfix="." />
          <span>
            &nbsp;There are{' '}
            <Time minutes={data.timeToGo} postfix=" remaining." />
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 grid-rows-2">
          <Card title="Identifier" data={data.flightNumber} />
          <Card title="From" data={data.origin} />
          <Card title="To" data={data.destination} />

          <Card title="Door is" data={data.doorState} />
          <Card title="Ground Speed" data={data.groundspeed} unit="mph" />
          <Card
            title="Altitude"
            data={data.altitude.toLocaleString()}
            unit="feet"
          />
        </div>
      </div>
    </div>
  );
}
