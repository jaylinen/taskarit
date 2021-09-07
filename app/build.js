import * as R from "ramda";
import { default as hash } from "object-hash";

import { getCurrentDump, getCollection, saveDump, saveData } from "./file.js";
import { requestDump } from "./api.js";

const debug = true;

const getLatestDump = () => requestDump().then(({ data: { items } }) => items);

const getDump = async () => {
  const currentDump = await getCurrentDump();
  const currentHash = hash(currentDump);
  let data = currentDump;

  if (debug) {
    return data;
  }

  const newDump = await getLatestDump();
  const newHash = hash(newDump);

  if (newHash !== currentHash) {
    await saveDump(newDump);
    data = newDump;
  }

  return data;
};

const mapCollectionItem = ([index, status]) => ({
  index,
  status,
});

const mapCollection = R.compose(R.map(mapCollectionItem), Object.entries);

const mergeItem = R.curry((dump, item) => {
  const orig = R.find(R.propEq("display_name", item.index), dump);

  return { ...item, orig };
});

const mergeDumpToData = (collection, dump) =>
  mapCollection(collection).map(mergeItem(dump));

const getData = async () => {
  const dump = await getDump();
  const collection = await getCollection();

  return mergeDumpToData(collection, dump);
};

const updateData = async () => {
  const data = await getData();

  await saveData(data);
};

await updateData();
