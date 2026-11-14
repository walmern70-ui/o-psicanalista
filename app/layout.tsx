import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "O Psicanalista | Psicanálise, reflexão e autoconhecimento",
  description: "Um assistente educativo de Psicanálise para refletir sobre emoções, relações, desejos e comportamento humano.",
  keywords: ["psicanalista online", "psicanálise", "autoconhecimento", "Freud", "inconsciente", "emoções"],
  openGraph: { title: "O Psicanalista", description: "Um espaço digital de reflexão e conhecimento psicanalítico.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
