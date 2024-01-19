import { MyParent, SimplePropsboard, Simpleboard } from "./dashBoard";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      PLAYGROUND
      <Simpleboard  name="xx" />
      <SimplePropsboard name="Calling from Props" />
      <MyParent />
    </main>
  )
}
