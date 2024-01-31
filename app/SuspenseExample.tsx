import React, { Suspense } from "react";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function GetData() {
  await delay(2000);
  const resp = await fetch("http://localhost:3000/api/users");
  const data = await resp.json();
  console.log(data);
}

// GetData();
const SuspenseExample = () => {
  return (
    <div>
      <h1 className="mb-4 text-1xl">Suspense Example with Data Fetching</h1>
      <Suspense fallback="Loading ...">
        <ul>GetData();</ul>
      </Suspense>
    </div>
  );
};

export default SuspenseExample;
