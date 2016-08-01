export const CELL_CHANGED = 'CELL_CHANGED';

export const cellChanged = (x, y) => ({ type: CELL_CHANGED, x, y });
