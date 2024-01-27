import { FaCheck } from 'react-icons/fa6';



export default function List({ list }: { list: string }) {
  return (
    <div className="text-slate-600  flex gap-5 items-center">
    {/* circlel */}
    <div className="h-5 w-5 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs">
        <FaCheck />
    </div>
    {/*  */}
    {/* <p>{props.list}</p> */}
    <p className="text-sm">{list}</p>
</div>
  )
}
 


 