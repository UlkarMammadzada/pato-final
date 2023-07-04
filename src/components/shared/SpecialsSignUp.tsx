import BlackButton from "../forms/BlackButton";
import Input from "../forms/Input";


const SpecialsSignUp = () => {
  return (
    <div className="bg-[#ececec] py-20">
      <div className="flex gap-6 items-center justify-center flex-col md:flex-row text-center">
        <h3 className="text-2xl font-medium text-[#333] font-poppins">SPECIALS SIGN UP</h3>
        <Input type="email" placeholder="Email Address" />
        <BlackButton text="Sign-Up" />
      </div>
    </div>
  );
};

export default SpecialsSignUp;
