type OrderType = { [key: string]: string };

export const selectedQuery = (query: string) =>
  query.split(",").reduce((a, v) => ({ ...a, [v]: true }), {});

export const orderedQuery = (query: string, orderArray: OrderType[]) => {
  const sortLists = query.split(",");
  sortLists.forEach((sl) => {
    const obj: OrderType = {};

    const fields = sl.split(".");
    obj[fields[0]] = fields[1] || "asc";
    orderArray = [...orderArray, obj];
  });
  return orderArray;
};
