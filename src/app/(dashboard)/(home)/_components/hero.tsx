import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="bg-primary bg-opacity-20 py-24 md:py-48 w-full mx-auto px-2">
      <div className="max-w-5xl px-6 lg:px-8 w-full mx-auto">
        <div className="flex items-center flex-col gap-y-12 justify-between lg:flex-row-reverse lg:gap-x-12">
          <Image
            src="/hero.jpeg"
            alt="Hero"
            sizes="100vw"
            className="w-full h-auto rounded-2xl max-w-md"
            width={500}
            height={400}
          />
          <div className="lg:mr-12">
            <h1 className="text-3xl md:text-6xl font-bold">BigFood 🍲</h1>
            <p className="py-6 text-xl md:text-3xl">
              Rendi la Tua Filiera Alimentare Trasparente e Sicura.
            </p>
            <div>
              <h3 className="text-xl md:text-2xl">
                Rendi la Tua Filiera Alimentare Trasparente e Sicura
              </h3>
              <p className="py-4 text-lg md:text-xl">
                BigFood, la piattaforma SaaS che ti consente di tracciare ogni passo del viaggio dei tuoi prodotti alimentari, dalla fattoria alla tavola.
              </p>
              <p className="py-4 text-lg md:text-xl">
                Con BigFood, puoi garantire la massima trasparenza e sicurezza alimentare grazie a una soluzione digitale semplice da usare e adatta a qualsiasi tipo di azienda.
              </p>
              <Button asChild>
                <Link href="/#pricing">Inizia Ora</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};