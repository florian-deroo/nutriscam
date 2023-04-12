import { conditions } from "@/const";
import { Condition, Feature } from "@/types/GlobalTypes";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

export default function SelectCondition({ addCondition, close }: { addCondition: () => void, close: () => void }) {

	const [feature, setFeature] = useState<Feature>()

	return (
		<div>
			<button
				onClick={() => close()}
				className="absolute top-4 right-4 text-white rounded-md p-2 "
			>
				<RiCloseFill className="text-3xl" />
			</button>

			<div className="flex flex-col relative">
				{conditions.map(condition => <button onClick={() => setFeature(condition)} className="absolute">{condition.displayName}</button>)}
			</div>
		</div>
	)
}