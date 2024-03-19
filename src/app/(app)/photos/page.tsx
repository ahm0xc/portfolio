import React from "react";
import Image from "next/image";
import sharp from "sharp";
import { getPlaiceholder } from "plaiceholder";
import * as fs from "node:fs/promises";
import path from "node:path";

import { cn } from "~/lib/utils";

interface Photo {
  title: string;
  photo_url: string;
}

export default async function PhotosPage() {
  const fileContent = await fs.readFile(
    process.cwd() + "/src/data/photos.json",
    "utf8",
  );
  const data = JSON.parse(fileContent) as Photo[];

  return (
    <main className="pt-32">
      <div>
        <section className="column-1 gap-x-1.5 px-2 md:columns-2 lg:columns-3">
          {data.map(async (p, i) => {
            const src = path.join(process.cwd() + `/public/${p.photo_url}`);
            const buffer = await fs.readFile(src);
            const { base64 } = await getPlaiceholder(buffer);
            const metadata = await sharp(src).metadata();

            return (
              <div
                key={`photo${i}`}
                className={cn("mt-1.5", i === 0 && "mt-0")}
              >
                <Image
                  src={p.photo_url}
                  width={metadata.width}
                  height={metadata.height}
                  placeholder="blur"
                  blurDataURL={base64}
                  className="h-auto w-full"
                  alt=""
                />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
