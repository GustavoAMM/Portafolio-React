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
          description="Lorem "
          banner='https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg'
        />
        <Card
          tag={["Rust", "NestJs"]}
          title="Task list"
          description="Proyecto personal creado con herramientas de react para poder aprender dicha tecnologia"
          banner="https://raw.githubusercontent.com/GustavoAMM/Wallpapers/main/banner.jpg?token=GHSAT0AAAAAAB3SG72F2WRZZC2PPO3P3CGGY43NGOQ"
        />
        <Card
          tag={["C++", "Arch", "Bash","Ubuntu"]}
          title="Portafolio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem vel laborum, eum soluta"
          banner="https://raw.githubusercontent.com/GustavoAMM/Wallpapers/main/background-black.jpg?token=GHSAT0AAAAAAB3SG72FJXDYFGPMKAEUI2N6Y43NKCQ"
        />
        <Card
          tag={["C++"]}
          title="Portafolio version 2 react"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem vel laborum, eum soluta"
          banner="https://raw.githubusercontent.com/GustavoAMM/Wallpapers/main/icono.png?token=GHSAT0AAAAAAB3SG72F3YA7WWMHRASSGUBEY43NKRQ"
        />
      </div>
    </div>
  );
}
export default Carrusel;
