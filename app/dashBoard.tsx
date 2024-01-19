"use client"
import { useState } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { User } from "./demo";

interface DashboardProps {
    user: User;
}

// passing Props.property
export default function Dashboard({user}: DashboardProps) {
    return (
        <div>
        'Dashboard'
        <Sidebar user={user}></Sidebar>
        <Profile user={user}></Profile>            
        </div>
    );
}

// declare Props.property directly
export function Simpleboard({name}: {name:string}) {
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

interface ChildComponentProps {
    name: string;
}

// declare Props
export function SimplePropsboard(props: ChildComponentProps) {
    console.log(props);
    const {name} = props;
    return (
        <Simpleboard name={name} />
    );
}

// declare a anymous function
interface MyParentProps {
    isParent: boolean;
    changeIsParent: (s: boolean) => void;
}

export function MyParent(){
    const [isParent, setIsParent] = useState(true);

    function SetMy(flag: boolean) : void {
        console.log('calling flag', flag);
        setIsParent(flag);
    }
    return(
        <>
            <Child isParent={isParent} 
            //changeIsParent={_isParent => setIsParent(isParent => !isParent)}/>
            changeIsParent={foo => SetMy(foo)} />
        </>
    );
}

function Child(props: MyParentProps) {
    return(
        <>
        <h3>{props.isParent? "I am the child component of Parent": "There might be a bug"}</h3>
        <button onClick={() => props.changeIsParent(props.isParent)}>Click Me</button>
        <button onClick={e => {
            console.log('click', e);
            props.changeIsParent(false);
        }}>Click You</button>
        </>
    );
}