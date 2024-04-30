import { useEffect, useState } from "react";

interface Props {
  hour: number;
  min: number;
  sec: number;
}

const useCountDown = ({ hour, min, sec }: Props) => {
  const [timer, setTimer] = useState<number>(hour * 3600 + min * 60 + sec);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) return prevTimer - 1;
        else {
          clearInterval(interval);
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  const h = Math.floor(timer / 3600);
  const m = Math.floor((timer % 3600) / 60);
  const s = timer % 60;

  const formattedHours = h > 0 ? h.toString().padStart(2, "0") : "00";
  const formattedMinutes = m > 0 ? m.toString().padStart(2, "0") : "00";
  const formattedSeconds = s > 0 ? s.toString().padStart(2, "0") : "00";

  return [formattedHours, formattedMinutes, formattedSeconds];
};

export default useCountDown;
