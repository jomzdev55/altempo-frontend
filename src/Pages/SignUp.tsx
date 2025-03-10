import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingupTemplate, {
  CardsHunter,
} from "../Components/templates/SingupTemplate";

const SignUp = () => {
  const navigate = useNavigate();

  const [mockData, setMockData] = useState<CardsHunter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDataCardsFake = () => {
    try {
      setMockData([
        {
          id: 1,
          name: (
            <span>
              Ser <br /> Músico
            </span>
          ),
          image:
            "https://s3-alpha-sig.figma.com/img/d5cd/c0b8/2a0797ada270838b9cb6da95be6be095?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c8jwhPl6je3hfIV2qSn6LfOFhHCX256ZQcz~IYkm8bBq0SLkgVh5fluraCoS7dqYNlX2DtuKte7rZg42GAQ2IJc9PGiW~zSv4oqV66UJBnZtf-0XWzw-ke4759CyFZJ0dAoJaGxgxML5dIZ3Hxwr72fTbV0qUdrzwge~cOeAVyuf3lXG6yRAt8KMi-P9b0OcimFYAiuiWK34aES-4HzG5APu1-qV87-MZTkkrw6fX9Y7YJ8BpAyezf3J7rB1vad~e1DkMqQIpWyvCtEv-cl4NSLE78BUTyi4Rxas6rrpa0oM3liE0m4RzI4t7iP43EC8UF26F9UblezQKw1TKum1ww__",
          onClick: () => navigate("/step-1"),
        },
        {
          id: 2,
          name: (
            <span>
              Ser <br /> Estudiante
            </span>
          ),
          image:
            "https://s3-alpha-sig.figma.com/img/c72b/bcc5/fe67b4519cbf0291fc08308529fd46ae?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r3JSlbWKKNnuKDUJATn8WMoibLAxroCzkRHyG-x0AuupdEeTAjSElAgVRCpk1vVCf9fH1XUjO2SyhXPWqLYDlz7V9906E0nei3H5mFlpL~1N2DiEk5QsorGRled77skWiGbilZAz23l7elR5bCeBu6KGlNBK6Dd0Yfrk4J3rUKSUkbl6X~nwjOcJHqmbjr2jPSdLyVIHyFFkjbGR7VGvK66chRvoIHVrT4WN2tXiUCv6548JhAEV~dLmYp3Q3e~onxLizYPoKfm0slTRe65zBrZ-lAsrERKk2zrCbe9jyopddrC-be2dY6sCB27-YwN0~mxzdafmP1sWiInv8FqRtA__",
          onClick: () => navigate("/step-1"),
        },
        {
          id: 3,
          name: (
            <span>
              Ser Talent
              <br /> Hunter
            </span>
          ),
          image:
            "https://s3-alpha-sig.figma.com/img/5f90/0af0/b13d117ab76ecc9cf8608b30440f37ab?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WVspn-Q41etTOT9KEj~-Xx5fpU3pMEOFvevMDExQDG7Kt7kEGL8PR9psOBHVaLs0~49MeSNw1scBY2jYiXcJrn15NexxTryHaVWWO6FfDzN2AL3bP93p8s6z6j7a0LsoYA5x-azT5kuYyLmX2g2EgvSZZAEKx1j56FDngtjCJcjyvwd68nN3stZeCv1WST31vugW2RdJ5cyFHw1zY1YIM0PaDf0FrDBcfknAyvFL7QzivP3n6bKZ6HmGivj4KKfg9vgTlKU9BG~JT~m5B758Rcr7G-uVRAKyfd-7xdkcXIEPVhas54Ppvi1MC2Revk7gNfX7-dlRz~MuBiRNXgu61w__",
          onClick: () => navigate("/step-1"),
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
      title="¿Cuál es tu pasión?"
      description="Antes de iniciar a crear una cuenta, selecciona que tipo de usuario eres para poder completar la información que te solicitamos."
      cardHunter={mockData}
    />
  );
};

export default SignUp;
