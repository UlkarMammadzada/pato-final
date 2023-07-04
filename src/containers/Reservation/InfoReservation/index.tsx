const InfoReservation = () => {
  return (
    <div className="container m-auto mt-24 grid md:grid-cols-2 gap-24">
      <div>
        <h1 className="font-medium font-poppins text-2xl text-[#333] uppercase mb-7">
          reserve by phone
        </h1>
        <p className="text-base text-[#666]">
          Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl
          sed, tincidunt lectus. Nulla vulputate , lectus vel volutpat
          efficitur, orci lacus sodales sem, sit amet quam:{" "}
          <span className="text-[#ec1d25]">(001) 345 6889</span>
        </p>
      </div>
      <div>
        <h1 className="font-medium font-poppins text-2xl text-[#333] uppercase mb-7">
          for event booking
        </h1>
        <p className="text-base text-[#666]">
          Donec feugiat ligula rhoncus:
          <span className="text-[#ec1d25]"> (001) 345 6889 </span>, varius nisl
          sed, tinci-dunt lectus sodales sem.
        </p>
      </div>
    </div>
  );
};

export default InfoReservation;
