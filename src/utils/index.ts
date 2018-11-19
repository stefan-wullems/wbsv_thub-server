export function prepare(o): string {
  o._id = o._id.toString();
  return o;
}
