import Link from "next/link";
import { Notepad } from "@phosphor-icons/react/dist/ssr";

export default async function Home() {
  return (
    <main className="mx-auto max-w-[760px] pt-32  ">
      <div className="divide-y divide-neutral-800">
        <div className="gap-3 pb-8">
          <section className="grid [grid-template-columns:1fr_2fr]">
            <div>
              <p className="text-lg text-white">Saif Ahmed</p>
              <p className="text-neutral-400">Web Engineer</p>
            </div>
            <div className="space-y-6">
              <p>
                Hello, hey, gude. I’m Ahmed, a product developer at{" "}
                <Link href="https://jokuh.com?ref=ahm" target="_blank">
                  Jokuh
                </Link>
                , working on collaboration and AI.
              </p>
              <p>
                Previously, I was a technology intern at{" "}
                <Link href="https://knockbot.net?ref=ahm">
                  Knockbot Studios
                </Link>{" "}
                in Bangladesh, NY, and graduated from the University of Rajshahi
                Sciences in EEE, Bangladesh.
              </p>
              <p>
                I believe in intuition, just enough research, and using
                aesthetics as a driver of great products. Hence, I deeply value
                high-quality software, visual design, and product-led growth.
              </p>
              <p>
                Check out some mildly interesting things I coded on{" "}
                <Link href="https://github.com/ahm0xc" target="_blank">
                  GitHub
                </Link>{" "}
                or view my retweets on{" "}
                <Link href="https://twitter.com/ahm0xc" target="_blank">
                  Twitter
                </Link>
                . You can also{" "}
                <Link href="mailto:ahmed@jokuh.com">email me</Link>.
              </p>
            </div>
          </section>
        </div>
        <div className="space-y-5 pb-8 pt-6">
          <section className="grid gap-3 [grid-template-columns:1fr_2fr]">
            <div>
              <p className="text-neutral-400">2024</p>
            </div>
            <div>
              <div>
                <p>
                  Sr. Web Developer, Collaboration & AI{" "}
                  <Link href="https://jokuh.com" target="_blank">
                    Jokuh
                  </Link>
                </p>
                <span className="text-sm text-neutral-400">London, UK</span>
              </div>
            </div>
          </section>
          <section className="grid gap-3 [grid-template-columns:1fr_2fr]">
            <div>
              <p className="text-neutral-400">2019</p>
            </div>
            <div>
              <div>
                <p>
                  Product Designer, Extensibility & Core Experience{" "}
                  <Link href="https://knockbot.net" target="_blank">
                    Knockbot
                  </Link>
                </p>
                <span className="text-sm text-neutral-400">
                  Berlin, Germany
                </span>
              </div>
            </div>
          </section>
          <section className="grid gap-3 [grid-template-columns:1fr_2fr]">
            <div>
              <p className="text-neutral-400">2018</p>
            </div>
            <div>
              <div>
                <p>
                  Technology Intern{" "}
                  <Link href="https://knockbot.net" target="_blank">
                    Knockbot
                  </Link>
                </p>
                <span className="text-sm text-neutral-400">
                  Berlin, Germany
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="gap-3 pb-8 pt-6">
          <section className="grid [grid-template-columns:1fr_2fr]">
            <div>
              <p className="text-neutral-400">Posts</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Notepad size={15} weight="fill" className="text-neutral-500" />
                <Link href="/">The Art of Scoping</Link>
              </div>
              <div className="flex items-center gap-1">
                <Notepad size={15} weight="fill" className="text-neutral-500" />
                <Link href="/">Avoiding font piracy on Github & Netlify</Link>
              </div>
              <div className="flex items-center gap-1">
                <Notepad size={15} weight="fill" className="text-neutral-500" />
                <Link href="/">Don&apos;t ship Mediocre</Link>
              </div>
              <div className="mt-2">
                <Link href="/" className="text-sm text-neutral-400">
                  view all
                </Link>
              </div>
            </div>
          </section>
        </div>
        <div className="gap-3 pb-8 pt-6">
          <section className="grid [grid-template-columns:1fr_2fr]">
            <div>
              <p className="text-neutral-400">Writing</p>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col">
                <Link href="/">Creating an accessible color palette</Link>
                <span className="mt-0.5 text-sm text-neutral-400">
                  Life at Notion · Feb 19, 2022
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="gap-3 pb-8 pt-6">
          <section className="grid [grid-template-columns:1fr_2fr]">
            <div>
              <p className="text-neutral-400">Reading</p>
            </div>
            <div className="space-y-2">
              <Link href="https://literal.club/ahm0xc/book/the-time-machine-djekw" target="_blank" className="flex items-center gap-4 no-underline">
                <img
                  src="https://assets.literal.club/1/cksrjf38j308021957fwivvw3m.jpg?size=600"
                  className="h-auto w-12"
                  alt=""
                />
                <div>
                  <p>The Time Machine</p>
                  <p className="text-sm text-neutral-400">H.G. Wells</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
