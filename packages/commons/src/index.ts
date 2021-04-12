export const x = 1;
export const BigInteger = 1n;

export function add(x: number, y?: number): number {
  return x + (y ?? 0);
}
