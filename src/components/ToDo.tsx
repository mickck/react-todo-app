import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoState } from "../atoms";

function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDO) => toDO.id === id);
      // const oldToDo = oldToDos[targetIndex];
      const newTodo = { text, id, category: name as any };

      return [...oldToDos.slice(0, targetIndex), newTodo, ...oldToDos.slice(targetIndex + 1)];
    });
  };

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDO) => toDO.id === id);

      return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button name='DELETE' onClick={onDelete}>
        ❌
      </button>
    </li>
  );
}

export default ToDo;
