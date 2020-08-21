export const idGenerator = (initId: number): (() => number) => {
  let id = initId;
  const nextId = (): number => {
    id++;
    return id;
  };
  return nextId;
};
