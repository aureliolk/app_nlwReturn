import { FeedbackTypes, typeFeedback } from "..";
import { CloseButton } from "../../Buttons";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: typeFeedback) => void;
}

export function FeedbackTypeStep({
    onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
    return (
        <>
            <header className="text-xl leading-6">
                Deixe seu Feedback
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(FeedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg w-24 flex-1 flex flex-col items-center gap-2 p-4 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            onClick={() =>
                                onFeedbackTypeChanged(key as typeFeedback)
                            }
                        >
                            <img
                                src={value.image.source}
                                alt={value.image.alt}
                            />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
