import { writeFile, readFile } from "fs/promises";

const dumpFile = "./data/dump.json";
const dataFile = "./data/data.json";
const collectionFile = "./data/collection.json";

const encoding = "utf-8";

const writeJSONtoFile = (path, data) => writeFile(path, JSON.stringify(data));

const getCurrentDump = async () => {
  const data = await readFile(dumpFile, encoding);
  return JSON.parse(data);
};

const getCollection = async () => {
  const data = await readFile(collectionFile, encoding);
  return JSON.parse(data);
};

const saveDump = (data) => writeJSONtoFile(dumpFile, data);

const saveData = (data) => writeJSONtoFile(dataFile, data);

export { writeJSONtoFile, getCurrentDump, getCollection, saveDump, saveData };
