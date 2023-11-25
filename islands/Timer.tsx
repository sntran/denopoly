import { difference } from "$std/datetime/difference.ts";
import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

interface TimerProps {
  end: Date;
}

export default function Timer(props: TimerProps) {
  const days = useSignal(0);
  const hours = useSignal(0);

  const now = new Date();
  const end = new Date(props.end);

  useEffect(() => {
    const timer = setInterval(() => {
      now.setSeconds(now.getSeconds() + 1);

      const remaining = difference(now, end, {
        units: ["days", "hours"]
      });

      days.value = remaining.days!;
      hours.value = remaining.hours! - remaining.days! * 24;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <span>
      Time left: <time datetime={`PT${days}D${hours}H`}>{`${days}d ${hours}h`}</time>
    </span>
  );
}
