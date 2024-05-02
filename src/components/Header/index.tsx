import { data } from "../../../data.ts";
import { Button } from "@/components/ui/button.tsx";

const Header = () => {
  return (
    <header className={"shadow"}>
      <div className={"flex justify-between p-5 max-w-[1000px] mx-auto"}>
        <h1 className={"md:mb-0 text-2xl"}>{data.name.toUpperCase()}</h1>
        <nav className="">
          <Button asChild variant={"transparent"}>
            <a href="#about">About</a>
          </Button>
          <Button asChild variant={"transparent"}>
            <a href="#projects">Projects</a>
          </Button>
          <Button asChild variant={"transparent"}>
            <a href="#contact">Contact</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
