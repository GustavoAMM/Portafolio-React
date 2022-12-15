import "./style/carrusel.css";
import Card from "./Card";
import { Input } from "@chakra-ui/react";

function Carrusel() {
  return (
    <div className="container-main rounded-3xl p-4 items-center">
      <h1 className="text-white text-center font-mono font-bold text-3xl my-4">
        Proj<span style={{ color: "crimson" }}>ects</span>
      </h1>
      <Input placeholder="Categoria" className="text-white my-2" />
      <div className="container-card grid grid-cols-3 justify-items-center">
        <Card
          tag={["js", "java", "python"]}
          title="Proyecto UPQ"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem vel laborum, eum soluta reiciendis possimus at ratione in, et ut sit ipsam quis error odit officia ex? Cupiditate, quis."
        />
        <Card
          tag={["Rust", "NestJs"]}
          title="Task list"
          description="Loremet ut sit ipsam quis error odit officia ex? Cupiditate, quis."
        />
        <Card
          tag={["C++", "Arch", "Bash","Ubuntu"]}
          title="Portafolio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem vel laborum, eum soluta"
        />
        <Card
          tag={["C++"]}
          title="Portafolio version 2 react"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem vel laborum, eum soluta"
        />
      </div>
    </div>
  );
}
export default Carrusel;
