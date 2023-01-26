const Card = () => {
  return (
    <div className="h-52 w-80 flex flex-col p-4 text-sm rounded-md gap-y-1 relative bg-neutral-900/[.75] drop-shadow-2xl border">
      <p className="font-bold">
        Mainstage{" "}
        <span className="font-extralight text-xs">
          | 12.30 PM - 1.25 PM EST
        </span>
      </p>
      <p className="font-bold text-lg">Keynote</p>
      <p className="font-extralight text-xs">
        Steve Jobs, Apple | Jeff Bezos, Amazon
      </p>
      <p className="font-semibold absolute bottom-5">View in schedule &gt;</p>
    </div>
  );
};

export default Card;
