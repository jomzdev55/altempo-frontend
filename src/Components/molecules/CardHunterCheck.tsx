import { useState } from "react";
import Checkbox from "../atoms/Checkbox";
import Text from "../atoms/Text";

interface CardHunterCheckProps extends CardsHunter {
  typeCheck: boolean;
}

const CardHunterCheck = ({
  name,
  image,
  subtitle,
  typeCheck = false,
  onClick,
}: CardHunterCheckProps) => {
  const [onCheck, setOnCheck] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <div
        className="card-hunter relative w-full bg-cover bg-center bg-no-repeat h-[414px] hover:border-[2px] hover:border-secondary3 rounded-2xl z-10 hover:shadow-lg hover:shadow-blue-300"
        onClick={() => {
          setTimeout(() => {
            onClick();
          }, 1000);
        }}
        style={{
          backgroundImage: `url(${image})`,
          transition: "height 0.5s",
          border: onCheck ? "2px solid #33CCCC" : "",
        }}
      >
        <div className="relative w-full hover:cursor-pointer h-full">
          {name}
        </div>
        {typeCheck && (
          <div className="absolute top-3 right-3 p-2">
            <Checkbox
              checked={onCheck}
              onChange={() => setOnCheck((prev) => !prev)}
            />
          </div>
        )}
      </div>
      <Text color="accent" weight="normal" className="pt-2">
        {subtitle}
      </Text>
    </div>
  );
};

export default CardHunterCheck;
