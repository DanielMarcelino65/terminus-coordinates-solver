import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Image from 'next/image';

type Coordinates = {
  x: number;
  y: number;
  z: number;
};

export default function Home() {
  const [coordinates, setCoordinates] = useState<Coordinates>(
    {} as Coordinates
  );

  function getCoordinates({ x, y, z }: Coordinates): Coordinates {
    return {
      x: 2 * x + 11,
      y: 2 * z + y - 5,
      z: y + z - x,
    };
  }

  function handleCalculate() {
    const result = getCoordinates(coordinates);

    alert(`X: ${result.x}, Y: ${result.y}, Z: ${result.z}`);
  }

  return (
    <div className="bg-background min-h-screen flex-col flex justify-center items-center">
      <div className="z-10 absolute md:left-2 top-4 flex flex-col items-center">
        <div className="h-64 md:h-96">
          <Image
            src="/respectiveValues.png"
            width={200}
            height={200}
            alt="Values"
            className="h-full w-auto"
          />
        </div>
        <div>
          <label className="text-end mt-2">
            Thanks <span className="font-bold">@HayashiXPG</span> for the Image
          </label>
        </div>
      </div>
      <div className="gap-4 flex flex-col md:flex-row mt-16">
        <Input
          type="X"
          value={coordinates.x ? String(coordinates.x) : ''}
          onChange={(e) => {
            setCoordinates({ ...coordinates, x: Number(e) });
          }}
        />
        <Input
          type="Y"
          value={coordinates.y ? String(coordinates.y) : ''}
          onChange={(e) => {
            setCoordinates({ ...coordinates, y: Number(e) });
          }}
        />
        <Input
          type="Z"
          value={coordinates.z ? String(coordinates.z) : ''}
          onChange={(e) => {
            setCoordinates({ ...coordinates, z: Number(e) });
          }}
        />
      </div>
      <Button onClick={handleCalculate}>Calculate</Button>
    </div>
  );
}
