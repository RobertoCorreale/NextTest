// @ts-nocheck
import { FiveRockets } from "@/components/FiveRocketsClient";
import { LatestMissionName } from "@/components/LatestMissionName";
import { Suspense } from "react";

export default async function Home() {

    let data = await fetch("https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam", { cache: 'no-store' });
    data = await data.json();


  return (
    <>
        <h1>Amplify è bellissimo</h1>
      <article>
        <h2>
          Latest mission: <LatestMissionName />
        </h2>
      </article>
      <article>
          <div>
              <h1>time: {data && data?.time}</h1>
          </div>
        <Suspense fallback={<div>loading...</div>}>
          <FiveRockets />
        </Suspense>
      </article>
    </>
  );
}
