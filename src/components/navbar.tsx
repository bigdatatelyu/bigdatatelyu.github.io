'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

export default function Navbar() {
  const pathname = usePathname();
  const baseStyle =
    'flex items-center py-6 font-semibold transition-colors hover:text-emerald-500';
  const activeStyle = 'text-emerald-500';

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/90">
      <div className="container mx-auto flex items-center justify-between md:px-32">
        <Link href="/" className="flex gap-2 py-6 text-2xl font-bold">
          <Image
            src="/logos/bigdata.png"
            alt="bigdata"
            width={40}
            height={40}
            className="h-10 w-10"
          />

          <div className="flex flex-col">
            <h1 className="-mb-1 text-base">BIG DATA</h1>
            <h1 className="text-xs text-slate-900/60 dark:text-white/60">
              Laboratory
            </h1>
          </div>
        </Link>

        {/* mobile navigation */}
        <section className="flex gap-2 lg:hidden">
          <ModeToggle />
          <Button
            variant="outline"
            className="space-y-2 bg-white/50 dark:bg-slate-800/50"
            onClick={() => setIsNavOpen((prev) => !prev)}
            name="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-slate-600 dark:text-slate-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>

          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className={
              isNavOpen
                ? 'showMenuNav bg-white dark:bg-slate-900'
                : 'hideMenuNav'
            }
          >
            <div className="absolute right-0 top-0">
              <Button
                variant="outline"
                className="mr-8 mt-5"
                onClick={() => setIsNavOpen(false)}
                name="close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-600 dark:text-slate-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>
            <ul className="flex min-h-[250px] flex-col items-center justify-center gap-8">
              <li>
                <a
                  href="/"
                  className={twMerge(
                    baseStyle,
                    'py-0',
                    pathname === '/' ? activeStyle : ''
                  )}
                >
                  home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className={twMerge(
                    baseStyle,
                    'py-0',
                    pathname === '/projects' ? activeStyle : ''
                  )}
                >
                  projects
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className={twMerge(baseStyle, pathname === '/' ? activeStyle : '')}
          >
            home
          </Link>
          <Link
            href="/about"
            className={twMerge(
              baseStyle,
              pathname === '/about' ? activeStyle : ''
            )}
          >
            about
          </Link>
          <Link
            href="/researches"
            className={twMerge(
              baseStyle,
              pathname === '/researches' ? activeStyle : ''
            )}
          >
            researches
          </Link>
          <Link
            href="/members"
            className={twMerge(
              baseStyle,
              pathname === '/members' ? activeStyle : ''
            )}
          >
            our teams
          </Link>
          <div className="py-6">
            <ModeToggle />
          </div>
        </div>
      </div>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  );
}
