type Position = {
  class: string;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
};

export const awayPositionsDefault: Position[] = [
  { class: "goalkipper", bottom: 25, left: 130 },
  { class: "defender1", bottom: 105, left: 130 },
  { class: "defender2", bottom: 130, left: 25 },
  { class: "defender3", bottom: 130, right: 30 },
  { class: "striker1", bottom: 192, right: 135 },
];

export const awayPositionsCustom: Position[] = [
  { class: "goalkipper", bottom: 25, left: 130 },
  { class: "defender1", bottom: 108, left: 130 },
  { class: "defender2", bottom: 100, left: 25 },
  { class: "defender3", bottom: 100, right: 30 },
  { class: "striker1", bottom: 190, right: 70 },
  { class: "striker2", bottom: 190, left: 70 },
];

export const homePositionsDefault: Position[] = [
  { class: "goalkipper", top: 25, left: 130 },
  { class: "defender1", top: 105, left: 130 },
  { class: "defender2", top: 130, left: 25 },
  { class: "defender3", top: 130, right: 30 },
  { class: "striker1", top: 192, right: 135 },
];

export const homePositionsCustom: Position[] = [
  { class: "goalkipper", top: 25, left: 130 },
  { class: "defender1", top: 108, left: 130 },
  { class: "defender2", top: 100, left: 25 },
  { class: "defender3", top: 100, right: 30 },
  { class: "striker1", top: 190, right: 70 },
  { class: "striker2", top: 190, left: 70 },
];

export const getAwayPositions = (formation: string): Position[] => {
  return formation === "5 vs 5 (default)" ? awayPositionsDefault : awayPositionsCustom;
};

export const getHomePositions = (formation: string): Position[] => {
  return formation === "5 vs 5 (default)" ? homePositionsDefault : homePositionsCustom;
};

export const getStyle = (pos: Position, isAway = false): Record<string, string> => {
  return isAway
    ? {
        bottom: pos.bottom !== undefined ? `${pos.bottom}px` : "",
        left: pos.left !== undefined ? `${pos.left}px` : "",
        right: pos.right !== undefined ? `${pos.right}px` : "",
      }
    : {
        top: pos.top !== undefined ? `${pos.top}px` : "",
        left: pos.left !== undefined ? `${pos.left}px` : "",
        right: pos.right !== undefined ? `${pos.right}px` : "",
      };
};
