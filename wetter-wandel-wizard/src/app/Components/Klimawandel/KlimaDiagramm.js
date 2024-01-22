import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const getData = async (location) => {
  try {
    const res = await fetch(`/api/stats/${location}`);
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};

export default function StatsPage() {
  const [dataW, setDataW] = useState({});
  const [loc, setLoc] = useState("Deutschland");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(loc);
        setDataW(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [loc]);

  const output = dataW.Date ? dataW.Date.map(entry => ({
    Jahr: entry.Year,
    Wärme: entry.temp,
  })) : [];

  const countryn = dataW.country;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 ">
      <div className="w-4/5 border-2 border-border rounded-xl">
        <h1 className="text-2xl mb-4 text-center text-gray-800 font-bold text-white">Statistik (50 Jahre): {countryn}</h1>
        <input
          type="text"
          className="w-full h-10 px-4 rounded-lg text-sm border border-gray-300 focus:outline-none"
          placeholder="Suche"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setLoc(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <div className="bg-white p-4 rounded-lg mt-4 shadow-md">
          <ResponsiveContainer width="100%" height={450}>
            <LineChart
              data={output}
              margin={{ top: 20, right: 50, bottom: 50, left: 0 }}
            >
              <Line type="monotone" dataKey="Wärme" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="Jahr" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
