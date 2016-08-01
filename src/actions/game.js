export const NEXT = 'NEXT';
export const STOP = 'STOP';
export const CLEAR = 'CLEAR';
export const RANDOM_MATRIX = 'RANDOM_MATRIX';

export const stopGame = () => ({ type: STOP });
export const nextGenaration = (frameID = 0) => ({ type: NEXT, frameID });
export const clearMatrix = () => ({ type: CLEAR });
export const randomMatrix = () => ({ type: RANDOM_MATRIX });
