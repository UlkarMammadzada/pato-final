import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";
import BookingForm from "./BookingForm";

const Booking = () => {
  return (
    <div className="py-32 px-6 bg-[#eeeeee]">
      <div className="container m-auto grid md:grid-cols-2 gap-20">
        <div className="">
          <div className="text-center">
            <Text text="Reservation" color="red" />
            <Title text="BOOK TABLE" color="black" />
          </div>
          <BookingForm/>
        </div>
        <div className="overflow-hidden rounded-lg w-[70%] m-auto">
            <img className="transition-all hover:scale-125 object-cover" src="assets/booking-1.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
