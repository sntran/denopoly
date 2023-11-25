import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Progress(props: JSX.HTMLAttributes<HTMLProgressElement>) {
  const { value, max, class: className = "", disabled } = props;
  return (
    <progress
      value={value}
      max={max}
      disabled={!IS_BROWSER || props.disabled}
      class={`
        appearance-none
        progress-bar:h-8
        progress-bar:rounded-full progress-value:rounded-full
        progress-bar:bg-[#625c44] progress-value:bg-[#32c7fc]

        relative
        after:content-[attr(value)'_/_'attr(max)]
        after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2
        after:text-white
        ${className}
      `}
    ></progress>
  );
}
