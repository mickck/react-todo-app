import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoryState, toDoSeletor } from "../atoms";
import ToDo from "./ToDo";
import CreateToDo from "./CreateTodo";
import styled from "styled-components";

function ToDoList() {
  /*  just only using a value and choose toDo, doing and done */
  const toDos = useRecoilValue(toDoSeletor);
  /*  */
  const setCategory = useSetRecoilState(categoryState);
  // const [isActive, setIsActive] = useState(false);
  const [currentClick, setCurrentClick] = useState("btn1");

  const onInput = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCategory(event.currentTarget.value as any);
    setCurrentClick(event.currentTarget.id);
  };
  useEffect(() => {
    const allBtnArr = ["btn1", "btn2", "btn3"];
    const nonTargetedBtnArr = allBtnArr.filter((item) => item !== currentClick);
    document.getElementById(currentClick)!.classList.add("active");
    nonTargetedBtnArr.map((btn) => {
      document.getElementById(btn)!.classList.remove("active");
      return null;
    });
  }, [currentClick]);
  const ButtonWrapper = styled.form`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;

    .active {
      border: 2px solid black;
      background-color: teal;
      color: white;
    }
  `;

  const Buttons = styled.button`
    margin-right: 5px;
    text-align: center;
    font-size: 20px;
    color: white;
    background-color: tomato;
    width: 150px;
    padding: 0.4em 0.2em;
    border: 1px solid #999;
    font-family: inherit;
    appearance: none;
  `;

  return (
    <div>
      <h1>To Dos</h1>

      <ButtonWrapper>
        <Buttons id='btn1' className='active' value={Categories.TO_DO} onClick={onInput}>
          To Do
        </Buttons>
        <Buttons id='btn2' value={Categories.DOING} onClick={onInput}>
          Doing
        </Buttons>
        <Buttons id='btn3' value={Categories.DONE} onClick={onInput}>
          Done
        </Buttons>
      </ButtonWrapper>
      <hr />
      <CreateToDo></CreateToDo>
      <hr />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
export default ToDoList;
