import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5d266a547c54223008cbb6cbdf962825",
    language: "ko-KR",
  },
});

export default instance;
