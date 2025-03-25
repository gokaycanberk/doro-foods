const Marquee = () => {
  return (
    <div className="w-full bg-white overflow-hidden border-y border-gray-200 py-2">
      <div className="animate-marquee whitespace-nowrap flex gap-8 text-[220px] font-medium text-gray-800 uppercase tracking-wide">
        <span>
          Browse our selection of premium quality snacks, nuts, and dried
          fruits.
        </span>
      </div>
    </div>
  );
};

export default Marquee;
