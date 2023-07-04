
const PageHeader = ({ title, img }: { title: string; img: string }) => {
  return (
    <div
      className="bg-cover py-60 text-center text-white font-poppins"
      style={{ backgroundImage: `url(assets/${img})` }}
    >
      <h1 className="uppercase font-bold text-5xl pt-8 tracking-[6px]">{title}</h1>
    </div>
  );
};

export default PageHeader;
