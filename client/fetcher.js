import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest); // 인자가 하나 또는 두개가 들어올수있는 처리
  // ex) get은 하나로 보통 받고 post나 put은 data({~~}) 이런식으로 두개를 받음
  return res.data;
};

export default fetcher;
