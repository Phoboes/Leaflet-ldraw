import dynamic from "next/dynamic";

import Head from "next/head";
import Image from "next/image";
// import Map from "../Components/Map/Map";
const Map = dynamic(() => import("../Components/Map/Map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Map />
    </div>
  );
}
