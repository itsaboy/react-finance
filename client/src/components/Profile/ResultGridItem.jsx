import React from "react";

export default function ResultGridItem({ title, data }) {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-green-800">{title}</h3>
      <p>{data}</p>
    </div>
  );
}
