import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { DeleteFeedback } from "../Buttons";
import { Loading } from "../Loading";

interface DataProps {
  type: string;
  comment: string;
  screenshot: string;
}

export function Container() {
  const [data, setData] = useState<DataProps>();
  useEffect(() => {
    const fetchData = async () => {
      await api
        .get("/")
        .then((res) => setData(res.data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [data]);

  return (
    <>
      <div className="w-full px-40 py-12 flex flex-col">
        <div className="h-32 rounded-lg bg-ligth-secondary dark:bg-dark-secondary"></div>
        <div className="my-8 grid grid-cols-3 gap-8">
          {!data ? (
            <Loading />
          ) : (
            Object.entries(data).map(([key, value]) => {
              return (
                <div
                  className="h-[310px] rounded-lg bg-ligth-secondary dark:bg-dark-secondary p-4 flex flex-col gap-2 relative"
                  key={key}
                >
                  <div className="flex gap-2 justify-items-center bg-ligth-shover dark:bg-dark-shover p-2 rounded">
                    <h2 className="font-bold">Tipo Report:</h2>{" "}
                    <span>{value.type}</span>
                  </div>
                  <div className="flex flex-col bg-ligth-shover dark:bg-dark-shover p-2 rounded h-32">
                    <h2 className="font-bold">Comentario:</h2>{" "}
                    <span>{value.comment}</span>
                  </div>
                  {value.screenshot && (
                    <div className="flex flex-col items-center">
                      <h2 className="font-bold">Imagen:</h2>
                      <img className="w-28 rounded" src={value.screenshot} />
                    </div>
                  )}
                  <DeleteFeedback id={value.id} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
