import { lazy } from "react";
import Sidebar from "./Sidebar";
import SuspenseExample from "./SuspenseExample";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  MyParent,
  MyParentErrBoundary,
  SimplePropsboard,
  Simpleboard,
} from "./dashBoard";

// const noPage = lazy(() => import('./Sidebar'));  // lazy load

function fallbackRender(error: Error) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const parent = { name: "David" };

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      PLAYGROUND
      {/* <Sidebar user={{ name: "abc" }} /> */}
      <SuspenseExample />
      {/* <Sidebar user={{name: 'David'}} />
      <Simpleboard name="xx" />
      <SimplePropsboard name="Calling from Props" />
      <ErrorBoundary errorUI={<MyParentErrBoundary {...parent} />}>
        <MyParent />
      </ErrorBoundary> */}
    </main>
  );
}
