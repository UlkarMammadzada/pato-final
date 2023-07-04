import PageHeader from "../../components/shared/PageHeader";
import InfoReservation from "./InfoReservation";
import ReservationForm from "./ReservationForm";

const ReservationContainer = () => {
  return (
    <>
      <PageHeader img="bg-title-page-2.webp" title="reservation" />
      <div className="bg-[#efefef] py-32 px-6">
        <ReservationForm />
        <InfoReservation/>
      </div>
    </>
  );
};

export default ReservationContainer;
