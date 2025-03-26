import "./Marquee.css";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track text-[240px] font-heading uppercase tracking-tight text-black">
        <span className="mr-16">Collection of the best natural snacks</span>
        <span className="mr-16">Collection of the best natural snacks</span>
      </div>
    </div>
  );
};

export default Marquee;
