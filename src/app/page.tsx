import { Container } from "../components/common/container";

export default function HomePage() {
  return (
    <main>
      <Container className="py-40">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          Welcome to CBS Software
        </span>

        <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight">
          Transforming Businesses Through Smart
          Digital Solutions
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-600">
          Helping startups, SMEs, and enterprises
          establish a powerful digital presence with
          websites, mobile apps, custom software,
          eCommerce solutions, and digital marketing.
        </p>
      </Container>
    </main>
  );
}