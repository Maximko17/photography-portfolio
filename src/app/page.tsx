"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Masonry from "react-masonry-css";
import classNames from "classnames";
import Image from "next/image";
import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import bgImage from "../../public/photographer.jpg";
import landscape1 from "../../public/landscape-1.jpg";
import landscape2 from "../../public/landscape-2.jpg";
import landscape3 from "../../public/landscape-3.jpg";
import landscape4 from "../../public/landscape-4.jpg";
import landscape5 from "../../public/landscape-5.jpg";
import { useRef } from "react";

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

const images = [landscape1, landscape2, landscape3, landscape4, landscape5];

export default function Home() {
   const lightGallaryRef = useRef<LightGallery | null>(null);

   return (
      <div className="h-full overflow-auto">
         <header className="fixed w-full z-10 flex justify-between items-center px-6 h-[90px]">
            <span className="uppercase py-3 font-medium">
               Photography portfolio
            </span>
            <Link
               href="#"
               className="rounded-3xl bg-stone-900 text-white px-3 py-2 hover:bg-opacity-90"
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
                        <Masonry breakpointCols={2} className="flex gap-4">
                           {images.map((image, idx) => (
                              <Image
                                 key={image.src}
                                 src={image}
                                 placeholder="blur"
                                 alt="landscape"
                                 className="my-4 hover:opacity-90 cursor-pointer"
                                 onClick={() =>
                                    lightGallaryRef.current?.openGallery(idx)
                                 }
                              />
                           ))}
                        </Masonry>
                        <LightGalleryComponent
                           onInit={(ref) => {
                              if (ref) {
                                 lightGallaryRef.current = ref.instance;
                              }
                           }}
                           speed={500}
                           plugins={[lgThumbnail, lgZoom]}
                           dynamic
                           dynamicEl={images.map((image) => ({
                              src: image.src,
                              thumb: image.src,
                           }))}
                        />
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
