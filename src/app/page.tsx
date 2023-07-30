"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import landscape1 from "../../public/landscape-1.jpg";
import landscape2 from "../../public/landscape-2.jpg";
import landscape3 from "../../public/landscape-3.jpg";
import landscape4 from "../../public/landscape-4.jpg";
import landscape5 from "../../public/landscape-5.jpg";
import Image from "next/image";

const tabs = [
   {
      key: "all",
      display: "All",
   },
   {
      key: "landscapes",
      display: "Landscapes",
   },
   {
      key: "people",
      display: "People",
   },
];

export default function Home() {
   return (
      <div className="h-full bg-[url('/photographer.jpg')] bg-top bg-cover overflow-auto">
         <header className="bg-stone-900 fixed w-full z-10 flex justify-between items-center px-6 h-[90px]">
            <span className="uppercase py-3 font-medium">
               Photography portfolio
            </span>
            <Link
               href="#"
               className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90"
            >
               Get in touch
            </Link>
         </header>

         <main className="pt-[110px]">
            <div className="flex flex-col items-center ">
               <Tab.Group>
                  <Tab.List className="flex items-center gap-12">
                     {tabs.map(({ display, key }) => (
                        <Tab key={key}>
                           {({ selected }) => (
                              <span
                                 className={classNames(
                                    "uppercase",
                                    selected ? "text-white" : "text-stone-600"
                                 )}
                              >
                                 {display}
                              </span>
                           )}
                        </Tab>
                     ))}
                  </Tab.List>
                  <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
                     <Tab.Panel className="overflow-auto">
                        <Masonry
                           breakpointCols={2}
                           className="flex gap-4"
                           columnClassName=""
                        >
                           <Image src={landscape1} alt="1" className="my-4" />
                           <Image src={landscape2} alt="2" className="my-4" />
                           <Image src={landscape3} alt="3" className="my-4" />
                           <Image src={landscape4} alt="4" className="my-4" />
                           <Image src={landscape5} alt="5" className="my-4" />
                        </Masonry>
                     </Tab.Panel>
                     <Tab.Panel>Landscapes</Tab.Panel>
                     <Tab.Panel>People</Tab.Panel>
                  </Tab.Panels>
               </Tab.Group>
            </div>
         </main>

         <footer className="h-[60px] flex justify-center">Footer</footer>
      </div>
   );
}
