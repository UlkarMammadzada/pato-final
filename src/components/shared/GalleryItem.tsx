const GalleryItem = ({ img }: { img: string }) => {
  return (
    <div className="relative">
      <img className="w-full" src={`assets/${img}`} alt="" />
      <div className="absolute w-full h-full top-0 left-0 transition-all hover:bg-[#ec1d25] hover:opacity-70"></div>
    </div>
  );
};
export default GalleryItem;
