import Loader from "@/components/Loader";

const HomePage = () => {
  return (
    <section className="h-screen w-screen grid place-items-center">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="capitalize">coming soon...</h1>
        <Loader />
      </div>
    </section>
  );
};

export default HomePage;
