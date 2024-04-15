import React from "react";

const SodaText = ({ Label }: { Label: string }) => {
  return (
    <div className="flex w-min flex-col pl-[10vw]">
      {Label.split(" ").map((label: string) => (
        <div
          className="pointer-events-none text-[20vw] leading-[15vw] tracking-wide text-white "
          key={label}
        >
          <span className="pointer-events-none absolute z-[999] opacity-40">
            {label}
          </span>
          {label}
        </div>
      ))}
    </div>
  );
};

export default SodaText;
