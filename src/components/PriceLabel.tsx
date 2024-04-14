const SodaDescription = ({
  description,
  price,
}: {
  description: string;
  price: string;
}) => {
  return (
    <div className="absolute bottom-[10%] right-[10%] h-[200px] w-[400px] rounded-xl bg-black/50 p-8 tracking-wider text-white outline outline-white">
      <p className="mb-4 text-xl font-bold tracking-wider">
        Description:
        <br />
        <span className="font-normal tracking-normal">{description}</span>
      </p>
      <p className="text-xl ">Price: ${price}</p>
    </div>
  );
};

export default SodaDescription;
