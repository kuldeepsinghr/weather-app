import React from "react";
import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TempratureAndDetails from "./components/TempratureAndDetails";
import ForeCast from "./components/ForeCast";

function App() {
  return (
    <>
    <div className="max-w-screen-md m-auto mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Input/>
      <TimeAndLocation/>
      <TempratureAndDetails/>
      {/* <ForeCast title={'hourly forecast'}/> */}
      {/* <ForeCast title={'daily forecast'}/> */}
    </div>
    </>
  );
}

export default App;
