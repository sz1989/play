"use client";
import { useState } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { User } from "./demo";
// -- passing Props.property
interface DashboardProps {
  user: User;
}

export default function Dashboard({ user }: DashboardProps) {
  return (
    <div>
      &apos;Dashboard&apos;
      <Sidebar user={user}></Sidebar>
      <Profile user={user}></Profile>
    </div>
  );
}

// -- declare Props.property directly
export function Simpleboard({ name }: { name: string }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

// -- declare Props
interface ChildComponentProps {
  name: string;
}

export function SimplePropsboard(props: ChildComponentProps) {
  console.log(props);
  const { name } = props;
  return <Simpleboard name={name} />;
}

// declare a anymous function
interface MyParentProps {
  text?: string;
  isParent: boolean;
  changeIsParent: (s: boolean) => void;
}

export function MyParent() {
  const [isParent, setIsParent] = useState<boolean>(true); // useState<boolean|null>
  return (
    <>
      <Child
        isParent={isParent}
        changeIsParent={(arg) => {
          console.log(arg);
          setIsParent(!arg);
        }}
      />
    </>
  );
}

function Child(props: MyParentProps) {
  const [caption, setCaption] = useState("Caption");

  const updateCaption = (e: React.MouseEvent) => {
    setCaption("FOO");
  };
  return (
    <>
      <h3>
        {props.isParent
          ? "I am the child component of Parent"
          : "There might be a bug"}
      </h3>
      <button
        onClick={() => {
          console.log("click");
          props.changeIsParent(props.isParent);
        }}
      >
        Click You
      </button>
      <button onClick={updateCaption}>{caption}</button>
    </>
    // or <button onClick={() => setIsParent(props.isParent)}
  );
}

// or use spread operator ex:
// const toDoItem = { text: "Wash clothes", completed: false}
// return (<ToDoItem {...toDoItem} />);
// use destructing syntax for receiving props

type Icon = "";

export function MyParentErrBoundary(props: any) {
  return (
    <div className="single-task text-bg-danger">
      <b>ERROR PROCESSING ToDo: {JSON.stringify(props)}</b>
    </div>
  );
}
