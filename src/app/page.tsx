import Card from "@/components/Card";
import styles from "./page.module.css";
import { EB_Garamond, Poppins } from "next/font/google";

// className={`${poppins.className} font-normal`}

const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <div className="p-[60px]">
      {/* Cabeçalho */}
      <div className="max-md:flex md:justify-normal max-md:justify-center max-md:items-center">
        <h1
          className={`${poppins.className} font-light italic md:text-[27px] max-md:text-[17px]`}
        >
          writeme.com.br
        </h1>
      </div>

      {/* Frase inicial */}
      <div className="flex flex-col justify-center items-center pt-20">
        <p
          className={`${ebGaramond.className} md:text-[27px] max-md:text-[20px]`}
        >
          "Do mundo pra mente, da mente pras páginas, das páginas pro mundo",
        </p>
        <p
          className={`${ebGaramond.className} font-light md:text-[27px] max-md:text-[20px]`}
        >
          oguedes
        </p>
      </div>

      {/* Opções inicial */}
      <div className="flex md:flex-row max-md:flex-col items-center justify-center gap-12 pt-16 px-5">
        <Card
          pathUrl="/create-book"
          imageUrl="/icon-plus.png"
          content="Escrever algo"
        />
        <Card pathUrl="/lib" imageUrl="/icon-book.png" content="Minhas obras" />
        <Card
          pathUrl="/account"
          imageUrl="/icon-profile.png"
          content="Acessar sua conta"
        />
      </div>
    </div>
  );
}
