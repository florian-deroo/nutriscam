import { Condition, Display } from "@/types/GlobalTypes";
import axios from "axios";
import { useQuery } from "react-query";

const useExplore = (conditions : Condition[]) => {

	const explore = useQuery(
		["explore", conditions],
		() => {
			return axios<Display[]>({
				method: "get",
				url: "/explore",
			})
				.then((r) => r.data)
				.catch((e) => {
					throw new Error(e);
				});
		},
		{
			cacheTime: 10,
		}
	);
	if (explore.data)
		return explore.data

	return [];
};

export default useExplore;