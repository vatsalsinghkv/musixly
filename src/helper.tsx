/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

export const getId = (): string => {
  return `id${Math.random().toString(16).slice(2)}`;
};

export const trimTo = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return `${text.slice(0, length)}...`;
};
