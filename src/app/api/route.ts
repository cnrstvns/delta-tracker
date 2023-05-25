import axios from 'axios';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const response = await axios
    .get('https://wifi.delta.com/api/flight-data')
    .then((response) => response.data);

  return NextResponse.json(response);
};
