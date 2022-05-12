import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { typeFeedback, FeedbackTypes } from "..";
import { CloseButton } from "../../Buttons";
import { ScreenShoteButton } from "../ScreenShoteButton";
import { Loading } from "../../Loading";
import { api } from "../../../lib/api";

interface feedbackTypePorps {
  keyValue: typeFeedback;
  onRestartFeedback: () => void;
  onFeedBackSent: () => void;
}

export function FeedbackContentStep({
  keyValue,
  onRestartFeedback,
  onFeedBackSent,
}: feedbackTypePorps) {
  const feedbackInforType = FeedbackTypes[keyValue];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedBack, setIsSendingFeedBack] = useState(false);

  async function handleSubimtFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedBack(true);

    await api.post("/report", {
      type: keyValue,
      comment,
      screenshot,
    });

    setIsSendingFeedBack(false);
    onFeedBackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-ligth-textsecondary hover:text-ligth-textprimary dark:text-dark-textsecondary dark:hover:text-dark-textprimary"
          onClick={onRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex gap-2 items-center text-ligth-textprimary dark:text-dark-textprimary ">
          <img
            src={feedbackInforType.image.source}
            alt={feedbackInforType.image.alt}
            className="w-6 h-6"
          />
          {feedbackInforType.title}
        </span>
        <CloseButton />
      </header>

      <form className="m-4 w-full" onSubmit={handleSubimtFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-ligth-textsecondary dark:text-dark-textsecondary border-ligth-stroke dark:border-dark-stroke bg-transparent rounded-md placeholder:text-center focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte em detalhes o que está acontecendo"
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShoteButton
            screenshot={screenshot}
            onScreenShoteTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedBack}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 text-ligth-secondary"
          >
            {isSendingFeedBack ? <Loading /> : "Enviar Feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
