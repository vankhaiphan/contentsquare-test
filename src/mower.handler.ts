import { Mower } from './mower';

export class MowerHandler {
    private mower: Mower;

    constructor(mower: Mower) {
        this.mower = mower;
    }

    applyInstructions(instructions: string[]) {
        instructions.forEach((command: string) => {
            switch (command) {
                case 'L':
                case 'R':
                    this.mower.rotate(command);
                    break;
                case 'F':
                    this.mower.move();
                    break;
            }
        });
    }
}
