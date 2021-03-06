import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dailog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return<Transition.Root show={open} as={Fragment}>
    <Dailog   as = 'div' className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}
    >
      <h1>Hello World</h1>
      
    
       <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
          as={Fragment} enter = "ease-out duration-300" enterFrom="opacity-100" leave="ease-in duration-200"  leaveFrom="opacity-100" leaveTo="opacity-0">


                <Dailog.Overlay className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />
          </Transition.Child>

          
       </div>
    </Dailog>
  </Transition.Root>;
}

export default Modal;
