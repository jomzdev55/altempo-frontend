type CardsHunter = {
  id: number;
  name?: React.ReactNode;
  subtitle?: string;
  image: string;
  onClick: () => void;
};

interface CardHunterCheck extends CardsHunter {
  typeCheck: boolean;
}
