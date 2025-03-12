import { useState } from "react";
import Checkbox from "../atoms/Checkbox";
import Text from "../atoms/Text";
import { CardsHunter } from "../templates/SingupTemplate";

const CardHunter = ({
  name,
  image,
  subtitle,
  typeCheck = false,
  onClick,
}: CardsHunter) => {
  const [onCheck, setOnCheck] = useState(false);

  const baseClasses =
    "card-hunter relative w-full bg-cover bg-center bg-no-repeat rounded-2xl z-10 hover:shadow-lg hover:shadow-blue-300";
  const heightClass = typeCheck
    ? "h-[414px] hover:border-[2px] hover:border-secondary3"
    : "h-[414px] hover:!h-[450px]";
  const finalClass = `${baseClasses} ${heightClass}`;

  return (
    <div className="flex flex-col items-start">
      <div
        className={finalClass}
        onClick={
          typeCheck
            ? () => {
                setTimeout(() => {
                  onClick();
                }, 1000);
              }
            : onClick
        }
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

export default CardHunter;
