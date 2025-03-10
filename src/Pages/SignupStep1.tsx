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
          onClick: () => navigate("/"),
          subtitle: "Persona natural ",
        },
        {
          id: 2,
          image:
            "https://s3-alpha-sig.figma.com/img/c72b/bcc5/fe67b4519cbf0291fc08308529fd46ae?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r3JSlbWKKNnuKDUJATn8WMoibLAxroCzkRHyG-x0AuupdEeTAjSElAgVRCpk1vVCf9fH1XUjO2SyhXPWqLYDlz7V9906E0nei3H5mFlpL~1N2DiEk5QsorGRled77skWiGbilZAz23l7elR5bCeBu6KGlNBK6Dd0Yfrk4J3rUKSUkbl6X~nwjOcJHqmbjr2jPSdLyVIHyFFkjbGR7VGvK66chRvoIHVrT4WN2tXiUCv6548JhAEV~dLmYp3Q3e~onxLizYPoKfm0slTRe65zBrZ-lAsrERKk2zrCbe9jyopddrC-be2dY6sCB27-YwN0~mxzdafmP1sWiInv8FqRtA__",
          onClick: () => navigate("/"),
          subtitle: "Empresa o institución",
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
      loading={loading}
      title="Selecciona el tipo de cliente que eres"
      description="Para brindarte servicios idoneos para ti"
      cardHunter={mockData}
      gridClass="md:grid-cols-2"
    />
  );
};

export default SignupStep1;
