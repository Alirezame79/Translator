import axios from "axios";
import { useRef, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

interface Result {
  language: string,
  sentences: number[]
}

export default function BreakSentences() {
  const paragraphRef = useRef<HTMLTextAreaElement>(null)
  const permanentResult = useRef<Result>();
  const [result, setResult] = useState<Result | null>(null);

  async function submitClicked(e: any) {
    e.preventDefault();
    
    console.log(paragraphRef?.current?.value)
    if (paragraphRef?.current?.value === "") {
      toast.error("Paragraph field can't be empty.")
    }

    const options = {
      method: 'POST',
      url: 'https://microsoft-translator-text.p.rapidapi.com/BreakSentence',
      params: {
        'api-version': '3.0'
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '86daca9d1fmshb2eeb57f7e677d9p182f67jsncf9d222a6dd5',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      data: [
        {
          Text: paragraphRef?.current?.value
        }
      ]
    };
    
    try {
      const response = await axios.request(options);
      console.log(response);
      if (response.status !== 200) {
        toast.error("Something wrong happened.")
        return;
      }
      console.log(response.data);
      permanentResult.current = {
        language: response.data[0].detectedLanguage.language,
        sentences: response.data[0].sentLen
      }
      setResult(permanentResult.current)
    } catch (error) {
      console.error(error);
    }
  }

  function textAreaChanged() {
    setResult(null)
  }

  return (
    <div className=" min-h-screen bg-slate-100">
      <div><Toaster /></div>
      <h1 className="pt-32 pb-10 text-center text-5xl font-bold">Break Sentences</h1>
      <form className="bg-white shadow-md rounded-lg w-1/2 m-auto px-8 pt-6 pb-4 mb-6 flex flex-col gap-5" onSubmit={submitClicked}>
        <textarea ref={paragraphRef} onChange={textAreaChanged} className="bg-slate-100 outline-slate-400 shadow-md min-h-48 h-fit w-full p-2" placeholder="Enter the paragraph here ..." />
        <button className="px-5 py-2.5 mr-5 text-lg rounded-lg text-center w-fit self-end bg-slate-400 hover:bg-slate-300" onClick={submitClicked}>Confirm</button>
      </form>
      {result !== null && <div className="bg-white shadow-md rounded-lg w-1/2 m-auto px-8 pt-6 pb-4 mb-12 flex flex-col gap-5">
        <>
          {result.sentences.map((eachSentence, index, array)=> {
            let start = 0;
            for (let i = 0; i < index; i++) {
              start += array[i];
            }
            return (
              <div className="bg-slate-200 p-3 flex justify-between" key={index}>
                <p>{paragraphRef?.current?.value.substring(start, start + eachSentence)}</p>
                <svg className="cursor-pointer" onClick={() => {
                  {/* @ts-ignore */}
                    navigator.clipboard.writeText(paragraphRef?.current?.value.substring(start, start + eachSentence))
                    toast.success("Text copied successfuly.")
                  }} height="22px" version="1.1" viewBox="0 0 21 22" width="21px" xmlns="http://www.w3.org/2000/svg"><title/>
                  <desc/><defs/><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#000000" id="Core" transform="translate(-86.000000, -127.000000)"><g id="content-copy" transform="translate(86.500000, 127.000000)">
                  <path d="M14,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 L2,16 L2,2 L14,2 L14,0 L14,0 Z M17,4 L6,4 C4.9,4 4,4.9 4,6 L4,20 C4,21.1 4.9,22 6,22 L17,22 C18.1,22 19,21.1 19,20 L19,6 C19,4.9 18.1,4 17,4 L17,4 Z M17,20 L6,20 L6,6 L17,6 L17,20 L17,20 Z" id="Shape"/></g></g></g></svg>
              </div>
            )
          })}
        </>
      </div>}
    </div>
  )
}