import axios from "axios";

const fetchJobs = async ({ signal }) =>
  (
    await axios.get(
      "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json",
      { signal }
    )
  ).data;

export default fetchJobs;
