import React from "react";
import * as fs from "fs/promises";
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
          {data.map((p, i) => {
            return (
              <div
                key={`photo${i}`}
                className={cn("mt-1.5", i === 0 && "mt-0")}
              >
                <img src={p.photo_url} className="h-auto w-full" alt="" />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
