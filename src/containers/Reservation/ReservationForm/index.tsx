import BlackButton from "../../../components/forms/BlackButton";
import InputField from "../../../components/forms/InputFields";
import SelectField from "../../../components/forms/SelectField";
import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";

const ReservationForm = () => {
  return (
    <>
      <div className="text-center">
        <Text text="Reservation" color="red" />
        <Title text="BOOK TABLE" color="black" />
      </div>
      <div className="flex flex-col">
        <div className="container m-auto gap-6 grid md:grid-cols-2 lg:grid-cols-3">
          <InputField
            id="date"
            label="Date"
            type="date"
            placeholder="Select Date"
          />
          <SelectField
            id="time"
            label="Time"
            optionText={false}
            options={["9:30", "10:00", "11:00", "12:00"]}
          />
          <SelectField
            id="person"
            label="Person"
            optionText={true}
            options={[1, 2, 3, 4, 5]}
          />
          <InputField id="name" label="Name" type="name" placeholder="Name" />
          <InputField id="phone" label="Phone" type="tel" placeholder="Phone" />
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Email"
          />
        </div>
        <BlackButton className="self-center mt-10" text="Book Table" />
      </div>
    </>
  );
};

export default ReservationForm;
