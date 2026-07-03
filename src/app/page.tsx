import Image from "next/image";
import { Container } from "./components/common/container";

export default function Home() {
  return (
    <main>
      <Container className="py-32">
        <h1 className="text-6xl font-bold">
          CBS Software
        </h1>

        <p className="mt-6 text-xl text-slate-600">
          Transforming Businesses Through Smart Digital Solutions
        </p>

      </Container>
    </main>
  );
}
