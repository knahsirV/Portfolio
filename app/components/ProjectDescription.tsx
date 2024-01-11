"use client";
import { useState } from "react";

const ProjectDescription = ({ description }: { description: string }) => {
  const [expanded, setExpanded] = useState(false);
  const canExpland = description?.length > 160;
  return (
    <>
      <p
        className={` mb-1 ${
          !expanded && "line-clamp-3"
        } text-sm font-medium leading-loose text-zinc-50`}
      >
        {description}
      </p>
      <button
        className={`mb-4 block text-sm font-extrabold ${
          !canExpland && "invisible"
        } text-zinc-600 transition duration-300 hover:text-zinc-50 `}
        onClick={() => setExpanded(!expanded)}
      >
        view {expanded ? "less" : "more"}
      </button>
    </>
  );
};

export default ProjectDescription;
