import Feed from "@components/Feed";
const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text_center">
          Discover and Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Popmptopia is an open-source AI prompting tool for modern world to
          dicover, create and share create prompts.
        </p>
        <Feed />
      </section>
    </div>
  );
};

export default Home;
