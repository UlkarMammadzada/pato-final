import { Dribbble, Facebook, Twitter } from "react-feather";

const SosialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
        <Dribbble />
        <Facebook />
        <Twitter />
    </div>
  );
};

export default SosialIcons;
