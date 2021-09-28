type OrderType = { [key: string]: string };

export const selectQuery = (query: string) =>
  query.split(",").reduce((a, v) => ({ ...a, [v]: true }), {});

export const orderQuery = (query: string, orderArray: OrderType[]) => {
  const sortLists = query.split(",");
  sortLists.forEach((sl) => {
    const obj: OrderType = {};

    const fields = sl.split(".");
    obj[fields[0]] = fields[1] || "asc";
    orderArray = [...orderArray, obj];
  });
  return orderArray;
};
