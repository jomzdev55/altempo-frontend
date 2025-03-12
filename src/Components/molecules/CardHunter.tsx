import Text from "../atoms/Text";

const CardHunter = ({ name, image, subtitle, onClick }: CardsHunter) => {
  return (
    <div className="flex flex-col items-start">
      <div
        className="card-hunter h-[414px] hover:!h-[450px] relative w-full bg-cover bg-center bg-no-repeat rounded-2xl z-10 hover:shadow-lg hover:shadow-blue-300"
        onClick={onClick}
        style={{
          backgroundImage: `url(${image})`,
          transition: "height 0.5s",
        }}
      >
        <div className="relative w-full hover:cursor-pointer h-full">
          {name}
        </div>
      </div>
      <Text color="accent" weight="normal" className="pt-2">
        {subtitle}
      </Text>
    </div>
  );
};

export default CardHunter;
