import { useState } from "react";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccseesStep";

export const FeedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Image de Bug",
    },
  },
  IDEIA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Image de Ideia",
    },
  },
  OUTROS: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: "Image de Outros",
    },
  },
};

export type typeFeedback = keyof typeof FeedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<typeFeedback | null>(null);
  const [feedbackSent, setFeedBackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedBackSent(false);
  }
  return (
    <div className="bg-ligth-primary dark:bg-dark-primary p-4 rounded-2xl relative mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              keyValue={feedbackType}
              onRestartFeedback={handleRestartFeedback}
              onFeedBackSent={() => setFeedBackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs flex gap-1 text-ligth-textsecondary dark:text-dark-textsecondary">
        Desevonvidor porkeyValue
        <a
          href="https://acos-services.vercel.app"
          target="_blank"
          className="underline underline-offset-2"
        >
          Acos Services
        </a>
      </footer>
    </div>
  );
}
