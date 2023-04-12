import SelectCondition from "@/components/SelectCondition";
import Background from "@/components/containers/Background";
import { usePopUpContext } from "@/components/containers/PopUpContainer";
import { Condition } from "@/types/GlobalTypes";
import { useState } from "react";

export default function Explore() {

	const [conditions, setConditions] = useState<Condition[]>([])

	const popUp = usePopUpContext()

	return (
		<div className="w-full max-w-[650px] h-fit z-50 items-center justify-center flex flex-col gap-4 mt-10">

			<div>
				{conditions.length == 0 ? <span>Aucune condition sur la recherche</span> :
					(
						<div className="flex flex-row gap-4">
							{
								conditions.map(condition => (
									<div className="button-1">
										<span>{condition.feature.displayName} : {condition.selected} : {condition.value}</span>
									</div>
								))
							}
						</div>
					)

				}
			</div>
			<button onClick={() => popUp.setPopUp(<SelectCondition />)} className="button-2">
				Ajouter une condition
			</button>
		</div>
	)
}