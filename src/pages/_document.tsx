import { Navbar } from "@/components/navbar/navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="antialiased"> 
        <Navbar />
        <Main />
       
        <NextScript />
      </body>
    </Html>
  );
}
