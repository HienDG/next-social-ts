"use client";

import React, { Fragment } from "react";
import { HashLoader } from "react-spinners";
import { Dialog, Transition } from "@headlessui/react";

import { useModalStore } from "@/hooks";

interface LoadingModalProps {
   show?: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ show = false }) => {
   const { isOpen } = useModalStore();

   return (
      <Transition appear show={show || isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-[100]" onClose={() => {}}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-gray-700 opacity-80 z-[200]" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto z-[400]">
               <div className="flex items-center justify-center min-h-full p-4 text-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel className="flex flex-col gap-5 text-white">
                        <HashLoader size={50} color="#fff" />
                        <p>Loading....</p>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
};
export default LoadingModal;
