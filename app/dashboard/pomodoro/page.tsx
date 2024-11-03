"use client";

import SelectTime from "@/components/ui/pomodoro/Select";
import { usePomodoro } from "@/hooks/Pomodoro";
import { Button } from "@/components/ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatTime } from "@/lib/utils";

export default function Page() {
  const {
    time,
    selectTime,
    handleReset,
    setSelectTime,
    handlePause,
    isProgress,
    isDone,
  } = usePomodoro();
  return (
    <div className="h-full w-full flex flex-col gap-10 items-center justify-center">
      {/* Input */}
      <div className="input flex gap-5 items-center">
        <h3>Select Time</h3>
        <SelectTime setTime={setSelectTime} selectTime={selectTime} />
        <Button onClick={handlePause}>
          {!isProgress ? <Play /> : <Pause />}
        </Button>
        <Button onClick={handleReset}>
          <RotateCcw />
        </Button>
      </div>

      {/* Timer running*/}

      <Card className=" w-[300px] h-[200px] text-center flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl">{formatTime(time)}</h1>
      </Card>
      {isDone && (
        <Card className="px-5 py-3 bg-green-300 text-green-700">
          Times up !!!
        </Card>
      )}
    </div>
  );
}
