import React, { Suspense } from "react";
import Header from "../components/Header";
import SsrNewTask from "./components/SsrNewTask";
import SsrInProgress from "./components/SsrInProgress";
import { SsrDoneTasks } from "./components/SsrDone";
import Loading from "../components/Loading";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex w-full justify-between p-4 gap-4  ">
        <SsrNewTask />
        <Suspense fallback={<Loading />}>
          <SsrInProgress />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <SsrDoneTasks />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
