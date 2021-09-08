import React from "react";

import { Item } from "./item";

import data from "../data/data.json";

const List = () => <dl>{data.map(Item)}</dl>;

export { List };
