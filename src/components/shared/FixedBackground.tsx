const FixedBackground = ({
  img,
  children
}: {
  img: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="py-40 text-center bg-cover bg-fixed min-h-full" style={{ backgroundImage: `url(assets/${img})` }}>{children}</div>
  );
};

export default FixedBackground;
