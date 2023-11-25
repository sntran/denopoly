import { Progress } from "../components/Progress.tsx";
import { slugify } from "../deps.ts";

interface SetProps {
  name: string;
  description: string;
  previous?: string;
  next?: string;
}

export default function StickerSet(props: SetProps) {
  const { name, description, previous, next } = props;
  const slug = slugify(name);

  // When the trigger is inside the popovertarget, it doesn't close the popover
  // when changing to previous or next. This is a workaround.
  function close() {
    document.getElementById(slug)?.hidePopover();
  }

  return <>
    <button popovertarget={`${slugify(name)}`} popovertargetaction="show">
      <svg viewBox="0 0 230 230" class="w-full h-auto">
        <title>{name}</title>
        <use href={`/albums/Epic-Myths/${slug}.svg#${slug}`} />
      </svg>
    </button>

    <Progress value="9" max="9" class="block mt-4 mx-auto w-3/4 font-bold text-xl" />

    <dialog
      id={`${slugify(name)}`}
      popover="auto"
      class="
        popover-open:flex flex-col h-full
        max-w-5xl h-full overflow-visible bg-transparent backdrop:bg-black/75
      "
    >
      <div class="mt-auto mx-auto bg-white animate-popover-close popover-open:animate-popover-open">
        <figure class="grid m-4 bg-[#efebd6]">
          <img
            src={`/albums/Epic-Myths/${slug}.svg`}
            width="640"
            class="row-start-1 col-start-1 m-4 border-2 border-[#e5d9b0]"
          />

          <figcaption class="row-start-1 col-start-1 self-end mb-4 p-2 text-center font-bold text-lg">
            {description}
          </figcaption>
        </figure>
      </div>

      <div
        class="
          mt-auto mx-[calc(50%-50vw)] px-[calc(50vw-50%)]
          sticky bottom-0
          flex justify-center gap-8
          p-8 bg-[#efebd6]
        "
      >
        <button
          popovertarget={previous && `${slugify(previous)}`}
          popovertargetaction="show"
          onClick={close}
        >Previous</button>
        <button
          popovertarget={`${slugify(name)}`}
          popovertargetaction="hide"
        >Close</button>
        <button
          popovertarget={next && `${slugify(next)}`}
          popovertargetaction="show"
          onClick={close}
        >Next</button>
      </div>
    </dialog>
  </>
}
