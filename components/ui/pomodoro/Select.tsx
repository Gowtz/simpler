import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatTime } from "@/lib/utils";
const TIME = [5,900, 1800, 2700, 3600, 5400, 7200];
//@ts-ignore
export default function SelectTime({ setTime }:any) {
  const handleChange = (value:string) => {
    setTime(parseInt(value))
  };
  return (
    <>
      <Select 
        onValueChange={handleChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="00:00" />
        </SelectTrigger>
        <SelectContent>
          {TIME.map((ele) => (
            <SelectItem key={ele} value={ele.toString()}>
              {formatTime(ele)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
