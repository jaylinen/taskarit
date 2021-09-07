import axios from "axios";

let axiosConfig = {
  headers: {
    "User-Agent": undefined,
  },
};

const requestDump = () =>
  axios.get(
    "https://www.akuankka.fi/api/v2/issues?limit=1000&order=-number&publication=4&offset=0&maxNumber=3999&minNumber=1",
    axiosConfig
  );

export { requestDump };
