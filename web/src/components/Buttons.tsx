import { ChatTeardropDots, Trash, X } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { WidgetForm } from "./widgetForms";
import { api } from "../lib/api";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  function toogleWidgetOpen() {
    setIsWidgetOpen(!isWidgetOpen);
  }
  return (
    <div className="absolute bottom-5 right-5 flex flex-col items-end">
      {/* {isWidgetOpen ?  <span>Container</span> : null} */}
      {isWidgetOpen && <span>Container</span>}
      <button
        onClick={toogleWidgetOpen}
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center justify-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>
    </div>
  );
}
export function WidgetWithPopover() {
  return (
    <Popover className="fixed bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col items-end ">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center justify-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5  absolute text-ligth-textsecondary hover:text-ligth-textprimary dark:text-dark-textsecondary dark:hover:text-dark-textprimary"
      title="Close Form Feedback"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}

interface DeleteFeedbackProps {
  id: string;
}

export function DeleteFeedback(id: DeleteFeedbackProps) {
  async function DeleteFeedback() {
    await api
      .delete("/delete/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(id);
  }

  return (
    <button type="button" onClick={DeleteFeedback}>
      <Trash />
    </button>
  );
}
