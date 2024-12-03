import { useEffect, useState } from "react";
import "./Sheet.css";

const Sheet = () => {
  const [sheet, setSheet] = useState([]);

  useEffect(() => {
    generateSheet();
  }, []);

  const generateNumber = (min, max, usedNumbers) => {
    let number;
    do {
      number = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(number));
    return number;
  };

  const generateSheet = () => {
    let newSheet = [];
    let usedNumbers = [];

    for (let row = 0; row < 5; row++) {
      newSheet[row] = [];

      for (let column = 0; column < 5; column++) {
        if (row === 2 && column === 2) {
          newSheet[row][column] = "FREE";
          continue;
        }
        const min = column * 15 + 1; //1,16,31,46,61
        const max = min + 14; //15,30,45,60,75
        const number = generateNumber(min, max, usedNumbers);

        newSheet[row][column] = number;
        usedNumbers.push(number);
      }
    }
    setSheet(newSheet);
  };

  return (
    <table id="sheet">
      <tbody>
        {sheet.map((row, rowIndex) => (
          <tr id="row" key={rowIndex}>
            {row.map((column, columnIndex) => (
              <td id="column" key={columnIndex}>
                {column}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Sheet;
