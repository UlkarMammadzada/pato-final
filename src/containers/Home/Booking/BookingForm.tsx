import BlackButton from "../../../components/forms/BlackButton";
import InputField from "../../../components/forms/InputFields";
import SelectField from "../../../components/forms/SelectField";


const BookingForm = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-2 gap-5">
        <InputField id="date" label="Date" type="date" placeholder="Date" />
        <InputField id="name" label="Name" type="name" placeholder="Name" />
        <SelectField
          id="time"
          label="Time"
          optionText={false}
          options={["9:30", "10:00", "11:00", "12:00"]}
        />
        <InputField id="phone" label="Phone" type="tel" placeholder="Phone" />
        <SelectField
          id="person"
          label="Person"
          optionText={true}
          options={[1, 2, 3, 4, 5]}
        />
        <InputField id="email" label="Email" type="email" placeholder="Email" />
      </div>
      <BlackButton text="Book Table" />
    </div>
  );
};

export default BookingForm;
