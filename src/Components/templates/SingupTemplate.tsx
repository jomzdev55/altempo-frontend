import Header from "../../Components/organisms/Header";
import CardHunter from "../../Components/molecules/CardHunter";
import Text from "../../Components/atoms/Text";
import Load from "../molecules/Load";

export type CardsHunter = {
  id: number;
  name?: React.ReactNode;
  subtitle?: string;
  image: string;
  typeCheck?: boolean;
  // onCheck?: () => void;
  onClick: () => void;
};

interface SingupStepsProps {
  loading: boolean;
  title: string;
  description: string;
  cardHunter: CardsHunter[];
  gridClass?: string;
  steps?: string;
}

const SingupTemplate = ({
  loading,
  title,
  description,
  cardHunter,
  gridClass,
  steps,
}: SingupStepsProps) => {
  const baseClasses = "md:container md:mx-auto md:pt-[20px]";
  const sizeClass = gridClass
    ? "md:max-w-[500px] lg:max-w-[550px] xl:max-w-[500px]"
    : "lg:max-w-[900px] xl:max-w-[1100px]";
  const finalClassGrid1 = `${baseClasses} ${sizeClass}`;

  const baseClasses2 = "grid gap-4 p-4 md:p-0";
  const gridLayout = gridClass ? gridClass : "md:grid-cols-3";
  const finalClass2 = `${baseClasses2} ${gridLayout}`;

  const TitleCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Text
      color="white"
      family="inter"
      size="heading2"
      weight="bold"
      className="flex title-card-hunter p-4 items-end flex-row w-full leading-[50px] hover:leading-[40px] hover:transition-all h-full"
    >
      {children}
    </Text>
  );

  return (
    <div className="simple-step-template dark:bg-gray-800 flex flex-1 flex-col justify-between h-screen before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-[100%] before:h-[400px] before:bg-[url('./Assets/png/bg-radial-vector.png')] before:bg-cover">
      {loading ? (
        <>
          <Header />

          <Load
            title="Buscando tu servicio ideal"
            description="Estamos encontrando tu servicio , espera un momento."
            loading={loading}
          />
        </>
      ) : (
        <div>
          <Header />
          <div className="md:container md:mx-auto lg:max-w-[800px] xl:max-w-[1000px] sm:pt-[60px] md:pt-[120px] pl-4 pr-4 pb-4 pt-[60px]">
            {steps && <Text weight="extraLight">{steps}</Text>}
            <h1 className="font-montserrat font-semibold text-heading-2 text-accent dark:text-white">
              {title}
            </h1>
            <Text color="disabled" size="heading6">
              {description}
            </Text>
          </div>
          <div className={finalClassGrid1}>
            <div className={finalClass2}>
              {cardHunter.map((card: CardsHunter) => (
                <CardHunter
                  id={card.id}
                  key={card.id}
                  name={<TitleCard>{card.name}</TitleCard>}
                  image={card.image}
                  onClick={card.onClick}
                  subtitle={card.subtitle}
                  typeCheck={card.typeCheck}
                  // onCheck={card.onCheck}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="footer p-4">
        <Text align="center">
          Todos los derechos reservados, {new Date().getFullYear()}®
        </Text>
      </div>
    </div>
  );
};

export default SingupTemplate;
