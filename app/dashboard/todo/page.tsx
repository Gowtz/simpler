"use client";
import React, { useRef } from "react";
import { useTodo } from "@/hooks/Todo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
export default function Page() {
  const { todo,updateTodo, addTodo } = useTodo();
  const ref = useRef("");
  return (
    <div className="main mt-20 h-full w-full flex flex-col items-center">
      <div className="inputArea w-[300px] md:w-[500px]">
        <h1 className="my-3 text-xl ">Add a Todo</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          {/*@ts-ignore*/}
            addTodo(ref.current.value);
          {/*@ts-ignore*/}
            ref.current.value = "";
          }}
        >
          {/*@ts-ignore*/}
          <Input ref={ref} className="my-5" />
          <Button>Add todo</Button>
        </form>
      </div>

      <div className="todolist w-[300px] md:w-[500px] my-5">
        {todo.map((ele) => (
          <div key={ele.id}>
          <Card
            key={ele.id}
            className=" flex justify-between items-center py-3 px-5 m-2"
          >
              {!ele.completed?
            <span>{ele.id}</span>:
                <span><del>{ele.content}</del></span>
              }
            <Checkbox checked={ele.completed} onCheckedChange={()=>updateTodo(ele.id)} />
          </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
