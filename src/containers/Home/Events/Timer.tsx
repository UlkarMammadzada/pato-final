import { useEffect, useState } from "react";

const Timer = ({ deadline }: { deadline: string }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between my-8">
      <TimeItem data={days} type="Days" />
      <TimeItem data={hours} type="Hours" />
      <TimeItem data={minutes} type="Minutes" />
      <TimeItem data={seconds} type="Seconds" />
    </div>
  );
};

export default Timer;

const TimeItem = ({ data, type }: { data: number; type: string }) => {
  return (
    <div className="flex flex-col">
      <span className="text-[#ec1d25] text-6xl font-medium">{data}</span>
      <span className="text-[#999] uppercase font-medium text-sm">{type}</span>
    </div>
  );
};
