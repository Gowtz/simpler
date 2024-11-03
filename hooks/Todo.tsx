'use client'
import type { Todo } from "@/lib/types";
import { generateRandomId } from "@/lib/utils";
import { useState } from "react";
export const useTodo = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const addTodo = (content: string) => {
    const newTodo: Todo = {
      id: generateRandomId(),
      content,
      completed: false,
      createAt: new Date(),
    };
    setTodo((prev) => [...prev, newTodo]);
  };
  const updateTodo=(id:string)=>{
    const newTodo = todo.map((ele) => ele.id ===id ? {...ele,completed:!ele.completed}:ele)!
    setTodo([...newTodo])
  }
  return {
    todo,
    addTodo,
    updateTodo
  };
};
