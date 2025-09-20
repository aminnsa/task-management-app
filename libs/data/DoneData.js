import { APIBaseURL } from "@/app/constants";

export const DoneTasksData = async () => {
  const request = await fetch(`${APIBaseURL}`, {
    cache: "no-store",
  });

  if (!request.ok) {
    return null;
  }
  const res = await request.json();

  const DoneData = res.filter((data) => data.isDone === true);

  return DoneData;
};
