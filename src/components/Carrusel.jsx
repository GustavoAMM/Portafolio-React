import "./style/carrusel.css"
import Card from './Card'


function Carrusel() {
  return (
    <div className="container-main rounded-3xl p-4 items-center">
      <h1 className="text-white text-center font-mono font-bold text-3xl my-8">Proj<span style={{ color: "crimson" }}>ects</span></h1>
      <div className="container-card grid grid-cols-3 justify-items-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>

  );
}
export default Carrusel;