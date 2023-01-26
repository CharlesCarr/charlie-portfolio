import Card from "../Card";
import Header from "../Header";

const Landing = () => {
  return (
    <div className="min-h-screen max-h-screen w-full max-w-screen px-20 bg-gradient-one bg-center bg-cover">
      <Header />

      <div className="h-5/6 w-full flex flex-col items-start">
        <h1 className="mt-24 text-5xl text-white">Full stack software developer,</h1>
        <h1 className="mt-2 text-5xl text-white">based in NYC</h1>

        <div className="mt-32 flex gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Landing;
