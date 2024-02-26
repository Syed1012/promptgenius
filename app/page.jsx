import Feed from "@components/Feed";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to "Prompt-Genie"
        <br className="max-md:hidden" style={{ marginTop: "10px" }} />
        <span className="orange_gradient text-center"> AI - Prompts </span>
      </h1>
      <br />
      <p className="desc text-center">
        Introducing Prompt Genie, your gateway to creative inspiration! This
        open-source AI tool is here to help you craft and share imaginative
        prompts effortlessly.
      </p>

      <Feed />
    </section>
  );
};

export default page;
