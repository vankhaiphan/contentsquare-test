import { Mower } from '../src/mower';
import { MowerHandler } from '../src/mower.handler';

describe('Mower Checker', () => {
    it('exists', () => {
        const mower = new Mower({ x: 5, y: 5 }, { x: 1, y: 2 }, 'N');
        expect(mower).toBeDefined();
    });

    describe('apply instruction on init position (1, 2, N)', () => {
        let mower: Mower;

        beforeEach(() => {
            mower = new Mower({ x: 5, y: 5 }, { x: 1, y: 2 }, 'N');
        });

        it('should be able to turn left', () => {
            mower.rotate('L');
            const direction = mower.getDirection();
            expect(direction).toBe('W');
        });

        it('should be able to turn right', () => {
            mower.rotate('R');
            const direction = mower.getDirection();
            expect(direction).toBe('E');
        });

        it('should be able to move forward', () => {
            mower.move();
            const direction = mower.getDirection();
            expect(direction).toBe('N');
        });

        it('should be able to not move forward', () => {
            mower = new Mower({ x: 1, y: 2 }, { x: 1, y: 2 }, 'N');
            mower.move();
            expect(mower.getPosition()).toBe('1 2 N');
        });
    });
});

describe('Mower Handler Checker', () => {
    it('exists', () => {
        const mower = new Mower({ x: 5, y: 5 }, { x: 1, y: 2 }, 'N');
        const mowerHandler = new MowerHandler(mower);
        expect(mowerHandler).toBeDefined();
    });

    describe('apply instructions on init position (1, 2, N)', () => {
        let mower: Mower;
        let mowerHandler: MowerHandler;

        beforeEach(() => {
            mower = new Mower({ x: 5, y: 5 }, { x: 1, y: 2 }, 'N');
            mowerHandler = new MowerHandler(mower);
        });

        it('should be able to call rotate left', () => {
            const spy = jest.spyOn(mower, 'rotate');
            mowerHandler.applyInstructions(['L']);
            expect(spy).toBeCalled();
        });

        it('should be able to call rotate right', () => {
            const spy = jest.spyOn(mower, 'rotate');
            mowerHandler.applyInstructions(['R']);
            expect(spy).toBeCalled();
        });

        it('should be able to call move', () => {
            const spy = jest.spyOn(mower, 'move');
            mowerHandler.applyInstructions(['F']);
            expect(spy).toBeCalled();
        });

        it('should be able to not call rotate or move', () => {
            const spy = jest.spyOn(mower, 'move');
            mowerHandler.applyInstructions(['N']);
            expect(spy).not.toBeCalled();
        });
    });
});
