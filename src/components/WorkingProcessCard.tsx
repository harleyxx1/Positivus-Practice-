import { WorkingProcessType } from "../lib/types"
import Icon from "./Icon";
import add from '../assets/icons/add.svg';
import minus from '../assets/icons/minus.svg';
import { useState } from "react";
import { cn } from "../lib/utils";

interface WorkingProcessCardProps {
  item: WorkingProcessType
}

const WorkingProcessCard = (props: WorkingProcessCardProps) => {
  const [open, setOpen] = useState(false);

  const { item } = props;

  const onPressClick = () => {
    setOpen(!open);
  }

  const containerClassname = cn('transition-all ease-in-out duration-500 py-10 px-[60px] rounded-[35px] border border-customDark shadow-[0_3px_0_0] bg-customGrey', open && 'bg-customGreen')
  const bodyClassname = cn('transition-all overflow-hidden ease-in-out duration-500 max-h-0 opacity-0', open && 'max-h-screen opacity-1')

  return (
    <div className={containerClassname}>
      <div className="flex flex-row justify-between gap-3 items-center">
        <div className="flex flex-row gap-8 items-center">
          <span className="font-bold text-[30px]">0{item.id + 1}</span>
          <span className="font-bold text-[20px]">{item.title}</span>
        </div>
        <button onClick={onPressClick}>
          <Icon source={open ? minus : add} customImageClassName={open ? 'h-[5px] w[-20px]' : ''} customContainerClassname="bg-white border border-black" />
        </button>
      </div>
      <div className={bodyClassname}>
        <div className="w-full bg-black h-[1px] border-r my-[15px]" />
        <span>{item.body}</span>
      </div>
    </div >
  )
}

export default WorkingProcessCard