"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui";

import { useModalStore } from "@/hooks";

const SignOutDialog: React.FC = () => {
   const { isOpen, onClose } = useModalStore();

   const handleSignOut = async () => {
      await signOut();

      return onClose();
   };

   return (
      <Transition appear show={isOpen} as={Fragment}>
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
               <div className="fixed inset-0 bg-black bg-opacity-25 z-[125]" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto z-[150]">
               <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-xl font-semibold leading-6">
                           Payment successful
                        </Dialog.Title>
                        <div className="my-4">
                           <p className="text-base">Are you sure you want to sign out?</p>
                        </div>

                        <div className="mt-2 join justify-end w-full gap-2">
                           <Button
                              className="h-10 min-h-fit py-2 px-3"
                              variant="error"
                              onClick={handleSignOut}
                           >
                              Yes, sign out
                           </Button>

                           <Button
                              className="h-10 min-h-fit py-2 px-3"
                              variant="neutral"
                              outline
                              onClick={onClose}
                           >
                              Cancel
                           </Button>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
};

export default SignOutDialog;
