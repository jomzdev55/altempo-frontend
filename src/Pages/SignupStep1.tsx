import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingupTemplate, {
  CardsHunter,
} from "../Components/templates/SingupTemplate";

const SignupStep1 = () => {
  const navigate = useNavigate();
  const [mockData, setMockData] = useState<CardsHunter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDataCardsFake = () => {
    try {
      setMockData([
        {
          id: 1,
          image:
            "https://s3-alpha-sig.figma.com/img/95a2/4b39/c402f88ed2d3b6e9677b3ec04e26979f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jeUAvBIH1Q788Nrxg5g4sZy2Kk00D15MEFvf1hO3GX-wVOtqsqWPMjoU8VT4BNV~-ZNsQopnO~Ouz3DSb24Dh9NU4h~LOxR5HpJfwS2gdx1BgLluH95kWoKD3zcw7HFziJnXqsF5e1P-92BFZKxZ3uqos08OutmOfqAZiSmKjcEZpGHADevnkOJe5xoa2FslJglEtYUCsBo6naZwwR0nnDYSNbE9xR97YXIL4RtucJlRadUBFsrc2dITPrxMdknDkhPPr9~IlbQ5RI5VO6j7Or4M79fIOwNp-fEMuc6d9oxoyId1U5PX-LG8Oph1TpMCjTrp5-7cqNl9waU7kzgjdw__",
          subtitle: "Persona natural ",
          typeCheck: true,
          onClick: () => navigate("/"),
        },
        {
          id: 2,
          image:
            "https://s3-alpha-sig.figma.com/img/f32b/66be/a42f5c3aef55b8840744df0baa8a1ad7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dsaLhbQSgYmsgGPGcJ9IWzCQyUoMplg42egv8WKfy-xzYX5Fc8PnD-kjrP~5f0Puy-x5mFKJMRdNJFSfRiUDG2Fguy-DIGoaRKnL3QJI3-w91ImTcuLSXuhxe4au5FWwns4WmoFZaxIxoAJiqw1vv72LGtrsWyBULvipRR~JhiXipWzhhEIdcw9xH3keRfk53aQEywpZiU2kU-uuN5~cLBoIX1f6bAYnOKW8wvWOKnc5FUp4usuFeglrnwVdwitJyA24inDypKy~E4fqvPy7QExR8RDn8jZdT1XJEjjXf6MuLwFeNrWGkH3lJaXp29EaK4aXcTq0FKZzxO-dELi8Xg__",
          subtitle: "Empresa o institución",
          typeCheck: true,
          onClick: () => navigate("/"),
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataCardsFake();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <SingupTemplate
      steps="1 de 5"
      loading={loading}
      title="Selecciona el tipo de cliente que eres"
      description="Para brindarte servicios idoneos para ti"
      cardHunter={mockData}
      gridClass="md:grid-cols-2"
    />
  );
};

export default SignupStep1;
