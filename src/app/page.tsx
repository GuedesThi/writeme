import styles from "./page.module.css";
import { EB_Garamond, Poppins } from "next/font/google";

// className={`${geistSans.variable} ${geistMono.variable} antialiased`}

const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"], // Defina os pesos que deseja usar
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <div className="p-[60px]">
      {/* Cabeçalho */}
      <div>
        <h1 className={`${poppins.className} font-light italic text-[27px]`}>
          writeme.com.br
        </h1>
      </div>

      {/* Frase inicial */}
      <div className="flex flex-col justify-center items-center pt-24">
        <p className={`${ebGaramond.className} text-[27px]`}>
          "Do mundo pra mente, da mente pras páginas, das páginas pro mundo",
        </p>
        <p className={`${ebGaramond.className} font-light text-[27px]`}>
          oguedes
        </p>
      </div>

      {/* Opções inicial */}
      <div className="flex items-center"></div>
    </div>
  );
}
