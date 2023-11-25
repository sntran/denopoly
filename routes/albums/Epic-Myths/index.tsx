import { RouteContext } from "$fresh/server.ts";
import Timer from "../../../islands/Timer.tsx";
import StickerSet from "../../../islands/StickerSet.tsx";
import { Progress } from "../../../components/Progress.tsx";
import { slugify } from "../../../deps.ts";

const SETS = [
  "Adventures of Thor",
  "The Argonauts",
  "Bake-danuki",
  "Romulus and Remus",
  "Robin Hood",
  "Trojan Horse",
  "String of Fate",
  "Ulysses' Travels",
  "Pied Piper",
  "El Dorado",
  "The Great Race",
  "The Lost City",
  "King Arthur",
  "Paul Bunyan",
  "Nessie",
  "Bermuda Triangle",
  "Lizard Man",
  "Midas Touch",
  "Sasquatch",
  "Acalica",
  "Hua Mulan",
];

const ENDDATE = new Date("2023-12-01T00:00:00");
const TOTAL = 189;

export const name = "Epic Myths";
export const description = `Epic Myths is a fourth sticker album in Monopoly Go. These set of stickers are based of myths and folktales from different cultures and regions. Every set of stickers will have one golden sticker each. Completing this album will be awarded with 15,000 dice rolls, 13,900,000,000 cash, and a hammer token`;

export default function Album(request: Request, ctx: RouteContext) {
  const collected = 174;

  return (<>
    <main class="relative w-full h-full bg-[#fceab4]">
      <header class="px-8 py-2 border-b-4 border-b-white bg-[#fceab4]">
        <img
          src={`/albums/${slugify(name)}/cover.svg`}
          alt={`${name} cover`}
          title={description}
        />

        <div class="flex gap-4 items-center font-bold text-xl">
          <Timer end={ENDDATE} />
          <Progress value={collected} max={TOTAL} class="flex-1" />
        </div>
      </header>

      <ul class="p-8 grid grid-cols-3 gap-4">
      {SETS.map((name, index) =>
        <li>
          <StickerSet
            name={name} description={`Set ${index + 1}/${SETS.length}`}
            previous={SETS[index - 1]} next={SETS[index + 1]}
          />
        </li>
      )}
      </ul>
    </main>
  </>);
}
