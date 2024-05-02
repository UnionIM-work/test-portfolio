import { data } from "../../../../data.ts";

const About = () => {
  return (
    <div className={"mt-[60px]"} id={"about"}>
      <div className={"flex justify-between"}>
        <div className={"flex flex-col justify-between gap-[30px]"}>
          <div>
            <h2 className={"text-xl"}>Hello I am</h2>
            <h1 className={"text-2xl font-bold"}>
              {data.full_name.toUpperCase()}
            </h1>
            <h2 className={"text-xl"}>Front-end developer </h2>
          </div>
          <p className={"max-w-[300px]"}>
            Building dynamic web apps with React and TypeScript for seamless
            user experiences.
          </p>
        </div>
        <img
          src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-front-end-development-developer-occupation-black-line-pencil-drawing-vector-picture-image_8416891.png"
          alt="Illustration"
          className={"md:max-w-[400px] md:block hidden"}
        />
      </div>
    </div>
  );
};

export default About;
