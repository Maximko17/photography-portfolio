"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";

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
      <div className="flex flex-col h-full bg-[url('/photographer.jpg')] bg-top bg-cover">
         <header className="flex justify-between px-6">
            <div className="py-3">Photography portfolio</div>
            <Link
               href="#"
               className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90"
            >
               Get in touch
            </Link>
         </header>

         <main className="grow">
            <div className="flex flex-col items-center h-full">
               <Tab.Group>
                  <Tab.List className="flex items-center gap-4">
                     {tabs.map(({ display, key }) => (
                        <Tab key={key}>
                           {({ selected }) => (
                              <span
                                 className={
                                    selected ? "text-white" : "text-stone-600"
                                 }
                              >
                                 {display}
                              </span>
                           )}
                        </Tab>
                     ))}
                  </Tab.List>
                  <Tab.Panels className="h-full bg-stone-200 bg-opacity-20 max-w-[900px] w-full p-2 sm:p-4 my-6">
                     <Tab.Panel>All</Tab.Panel>
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
