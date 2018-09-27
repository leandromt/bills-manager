import axios from "axios";

export const findAll = async () =>
  await axios.get("http://localhost:9000/api/bills/");
