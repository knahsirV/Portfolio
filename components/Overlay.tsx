const Overlay = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 bg-[url('/noise.png')] bg-[size:120px] bg-repeat opacity-5"
      aria-hidden="true"
    />
  );
};

export default Overlay;
