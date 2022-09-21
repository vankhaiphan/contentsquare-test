import * as fs from 'fs';
import * as path from 'path';
import { Mower } from './mower';
import { MowerHandler } from './mower.handler';
import { Coordinate } from './interfaces/coordinate';

const input: string[] = fs.readFileSync(path.resolve(__dirname, '../input.txt'), { encoding: 'utf-8' }).split('\n');
const lawn = input[0].split(' ');
const lawnSize: Coordinate = {
    x: parseInt(lawn[0]),
    y: parseInt(lawn[1]),
};

for (let i = 1; i < input.length; i += 2) {
    const position = input[i].split(' ');
    const initPosition: Coordinate = {
        x: parseInt(position[0]),
        y: parseInt(position[1]),
    };
    const direction: string = position[2];
    const instructions: string[] = input[i + 1].split('');
    const mower = new Mower(lawnSize, initPosition, direction);
    const mowerHandler = new MowerHandler(mower);
    mowerHandler.applyInstructions(instructions);
    console.log(mower.getPosition());
}
