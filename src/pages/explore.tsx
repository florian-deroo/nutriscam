import SelectCondition from "@/components/SelectCondition";
import Table from "@/components/Table";
import Background from "@/components/containers/Background";
import { usePopUpContext } from "@/components/containers/PopUpContainer";
import useExplore from "@/hooks/useExplore";
import { Condition } from "@/types/GlobalTypes";
import { useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
export default function Explore() {
  const [conditions, setConditions] = useState<Condition[]>([]);

  const popUp = usePopUpContext();
  const explore = useExplore(conditions);

  useEffect(() => {
    console.log(explore);
  }, [explore]);

  return (
    <div className="w-full pb-40 max-w-[1200px] h-fit z-50 items-center justify-center flex flex-col gap-4 mt-10">
      <div>
        {conditions.length == 0 ? (
          <span>Aucune condition sur la recherche</span>
        ) : (
          <div className="flex flex-row flex-wrap gap-4">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="button-1 flex flex-row items-center justify-center"
              >
                <span className="flex flex-row items-center justify-center gap-2">
                  {condition.feature.displayName} <AiOutlineArrowRight />{" "}
                  {condition.selected} <AiOutlineArrowRight />
                  {condition.value}
                </span>
                <button
                  className="ml-4"
                  onClick={() =>
                    setConditions(
                      conditions.filter(
                        (e) =>
                          !(
                            e.feature == condition.feature &&
                            e.selected == condition.selected &&
                            e.value == condition.value
                          )
                      )
                    )
                  }
                >
                  <RiCloseFill className="text-3xl" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() =>
          popUp.setPopUp(
            <SelectCondition
              close={() => popUp.setPopUp(undefined)}
              addCondition={(condition: Condition) =>
                setConditions((p) => [...p, condition])
              }
            />
          )
        }
        className="button-2"
      >
        Ajouter une condition
      </button>
			<Table data={explore}/>
    </div>
  );
}
