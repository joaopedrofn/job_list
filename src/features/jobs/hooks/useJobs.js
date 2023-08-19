import { useQuery } from "@tanstack/react-query";
import fetchJobs from "../queries/fetchJobs";

const useJobs = () => useQuery(["jobs"], fetchJobs);

export default useJobs;
