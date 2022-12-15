import "./style/Body.css"

function Text() {
  return (
    <div className="h-full rounded-3xl" style={{ background: "#191724" }}>
       <h1 className="text-white text-center font-mono font-bold text-3xl pt-10">
          Conact <span style={{ color: "crimson" }}>me</span>
        </h1>
      <p className="text-white text-justify px-8 texto-body pt-10 text-lg">
        I'm seeking out opportunities to collaborate with
        companies / agencies / individuals, not just work for them. I want to bring
        my programming experience to the table where we can work together to
        solve real problems in a way that optimizes all of our respective
        experience and knowledge.
      </p>
    </div>
  );
}
export default Text;
