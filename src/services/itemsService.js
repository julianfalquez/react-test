import { get } from "./http";

const getItems = async () => {
  return get(
    "https://my-json-server.typicode.com/luribeto/reactjs-course-data/products"
  );
};

const groupByCategory = (itemsStore) => {
  const groupByCategory = itemsStore.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, []);
  return groupByCategory;
};

export { getItems, groupByCategory };
