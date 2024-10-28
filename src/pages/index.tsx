import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

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
    <div className="bg-background min-h-screen flex-col  flex justify-center items-center">
      <div className="gap-4 flex">
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
