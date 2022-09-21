import { Coordinate } from './interfaces/coordinate';

export class Mower {
    private coordX: number;
    private coordY: number;
    private direction: string;
    private maxX: number;
    private maxY: number;

    // eslint-disable-next-line @typescript-eslint/ban-types
    GET_DIRECTION: { [key: string]: Function } = {
        L: this.getDirectionAfterRotateLeft,
        R: this.getDirectionAfterRotateRight,
    };

    constructor(lawnSize: Coordinate, initPosition: Coordinate, direction: string) {
        this.maxX = lawnSize.x;
        this.maxY = lawnSize.y;
        this.coordX = initPosition.x;
        this.coordY = initPosition.y;
        this.direction = direction;
    }

    isValidMove(position: Coordinate): boolean {
        return position.x >= 0 && position.x <= this.maxX && position.y >= 0 && position.y <= this.maxY;
    }

    getDirectionAfterRotateLeft(directionIndex: number): string {
        return directionIndex > 0 ? DIRECTIONS[directionIndex - 1] : DIRECTIONS[DIRECTIONS.length - 1];
    }

    getDirectionAfterRotateRight(directionIndex: number): string {
        return directionIndex < DIRECTIONS.length - 1 ? DIRECTIONS[directionIndex + 1] : DIRECTIONS[0];
    }

    getDirectionAfterRotate(rotateDirection: string): string {
        const currentIndex: number = DIRECTIONS.indexOf(this.direction);
        return this.GET_DIRECTION[rotateDirection](currentIndex);
    }

    rotate(direction: string): void {
        this.direction = this.getDirectionAfterRotate(direction);
    }

    move(): void {
        switch (this.direction) {
            case 'N': {
                const nextMove: Coordinate = {
                    x: this.coordX,
                    y: this.coordY + 1,
                };

                if (this.isValidMove(nextMove)) {
                    this.coordY += 1;
                }
                break;
            }
            case 'E': {
                const nextMove: Coordinate = {
                    x: this.coordX + 1,
                    y: this.coordY,
                };

                if (this.isValidMove(nextMove)) {
                    this.coordX += 1;
                }
                break;
            }

            case 'S': {
                const nextMove: Coordinate = {
                    x: this.coordX,
                    y: this.coordY - 1,
                };

                if (this.isValidMove(nextMove)) {
                    this.coordY -= 1;
                }
                break;
            }

            case 'W': {
                const nextMove: Coordinate = {
                    x: this.coordX - 1,
                    y: this.coordY,
                };

                if (this.isValidMove(nextMove)) {
                    this.coordX -= 1;
                }
                break;
            }
        }
    }

    public getPosition(): string {
        return `${this.coordX} ${this.coordY} ${this.direction}`;
    }

    public getDirection(): string {
        return this.direction;
    }
}

const DIRECTIONS: Array<string> = ['N', 'E', 'S', 'W'];
