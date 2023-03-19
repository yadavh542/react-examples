import React from "react";
import { useState } from "react";
import Onetree from "./Onetree";

const Tree = () => {
  const data = [
    {
      label: "Node 1",
      children: [
        {
          label: "Node 1.1",
          children: [{ label: "Node 1.1.1" }, { label: "Node 1.1.2" }],
        },
        { label: "Node 1.2" },
      ],
    },
    { label: "Node 2" },
  ];

  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center', margin:'20px'}}>
      {data.map((node) => (
        <Onetree key={node.label} {...node} />
      ))}
    </div>
  );
};

export default Tree;
