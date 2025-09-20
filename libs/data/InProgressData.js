const { APIBaseURL } = require("@/app/constants");

export const SsrInprogressData = async () => {
  const request = await fetch(`${APIBaseURL}`, {
    cache: "no-store",
  });

  if (!request.ok) {
    null;
  }
  const res = await request.json();
  const InprogressData = res.filter((data) => data.isDone === false);
  return InprogressData;
};
