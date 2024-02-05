'use client'
import React, { Suspense } from "react";

interface MyData{
  id: number,
  name: string
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));



const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
]

const SuspenseExample = () => {

  // throw Promise.resolve('test');
const myGetData = async function GetData(): Promise<MyData[]>{
  // await delay(6000);
  const resp = await fetch("http://localhost:3000/api/users"); //, { cache: 'no-store'}); // server side rending
  const data = await resp.json();
  console.log(data);
  return data;
}
  const data = myGetData;
  const listItems = data.map(v => <li key={v.id}>{v.name}</li>);

  return (
    <div>
      <h1 className="mb-4 text-1xl">Suspense Example with Data Fetching</h1>
      <Suspense fallback={<div className="text-2xl">Loading...</div>}>
        <ul>{listItems}</ul>
      </Suspense>
    </div>
  );
};

export default SuspenseExample;
