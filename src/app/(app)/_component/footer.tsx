import { GithubLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

export default function Footer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"footer">) {
  return (
    <footer className={cn("mx-auto mt-16 max-w-3xl", className)} {...props}>
      <div className="border-t border-t-neutral-900 pb-20 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">Home</Link>
            <Link href="/">Posts</Link>
            <Link href="/">Photos</Link>
          </div>
          <div>
            <p className="text-sm select-none text-neutral-600">
              Seek beauty in small moments
            </p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <MapPin size={15} weight="fill" className="text-neutral-600" />
            <p className="text-sm text-neutral-500">Made in Bangladesh</p>
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              <GithubLogo
                size={15}
                weight="duotone"
                className="text-neutral-500"
              />
              <Link
                href="https://github.com/ahm0xc/portfolio"
                target="_blank"
                className="text-sm text-neutral-500"
              >
                ahm0xc/portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
