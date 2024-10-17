/**
 * This component is used to display children based on a condition.
 *
 * @param children - children to display if condition is true
 * @param condition - condition to display children
 * @returns children or null
 */
export function DisplayChildren({
  children,
  condition,
}: {
  children: React.ReactNode;
  condition: boolean | null | undefined | number | string;
}) {
  return condition ? children : null;
}
