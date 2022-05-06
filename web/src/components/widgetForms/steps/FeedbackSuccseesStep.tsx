import { CloseButton } from "../../Buttons";
import SuccessImgurl from "../../../assets/success.svg";

interface FeedBackSuccessProps {
    onFeedbackRestart : () => void;
}

export function FeedbackSuccessStep({
    onFeedbackRestart
}: FeedBackSuccessProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className="flex flex-col items-center py-10 w-[340px">
                <img src={SuccessImgurl} alt="Image Success" />
                <span className="text-xl mt-2">Agradeçemos seu FeedBack</span>
                <button
                    type="button"
                    onClick={onFeedbackRestart}
                    className="py-2 px-6 mt-6 bg-zinc-600 border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500  disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    Quero enviar outro Feedback
                </button>
            </div>
        </>
    );
}
