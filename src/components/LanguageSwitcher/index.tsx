"use client";

import { useRouter, usePathname } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // Obtém o caminho atual que estamos;
  const [currentLocale, setCurrentLocale] = useState<Locale>(
    routing.defaultLocale
  );

  useEffect(() => {
    const localeMatch = pathname.match(/^\/(en|pt)/);
    if (localeMatch) {
      const matchedLocale = localeMatch[1] as Locale; // Type assertion para garantir que é um Locale válido;
      if (routing.locales.includes(matchedLocale)) {
        setCurrentLocale(matchedLocale);
      }
    }
  }, [pathname]);

  const changeLanguage = (locale: string) => {
    if (!routing.locales.includes(locale as Locale)) return; // Evita valores inválidos;
    const newPath = `/${locale}${pathname.replace(/^\/(en|pt)/, "")}`;
    router.push(newPath);
  };

  return (
    <div className="absolute top-14 right-16 max-md:right-10">
      <select
        className="p-2 border rounded max-md:text-[15px] max-md:font-light"
        onChange={(e) => changeLanguage(e.target.value)}
        value={currentLocale} // Agora sempre reflete o idioma atual;
      >
        {routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
