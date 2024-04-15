const SodaDescription = ({
  description,
  price,
}: {
  description: string;
  price: string;
}) => {
  return (
    <div className="absolute bottom-[17.5%] right-[50%] h-[175px] w-[300px] translate-x-[50%] rounded-xl bg-black/50 p-8 tracking-wider text-white outline outline-white sm:bottom-[10%] sm:right-[10%] sm:h-[200px] sm:w-[400px] sm:translate-x-0">
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
