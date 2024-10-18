import { useState } from "react";




export default function RandomColor() {
const [typeOfColor, setTypeOfColor] = useState('hex')
const [color, setColor] = useState('#000000')

function handleCreateRandomHexColor() {

}

function handleCreateRandomRgbColor() {

}

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: color,
    }}>
      <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
      <button onClick={() => setColor('rgb')}>Generate RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
    </div>
  );
}
