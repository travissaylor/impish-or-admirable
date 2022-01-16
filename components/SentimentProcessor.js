import { useState } from "react"
import { useEffect } from "react"

export default function SentimentProcessor() {
    const [ml5, setMl5] = useState()
    const [inputText, setInputText] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState()

    const maxLength = 400;

    useEffect(() => {
        setMl5(require("ml5"))
    }, [])

    const processText = async (e) => {
        setLoading(true)
        const prediction = await runPredection(inputText)
        console.log({ prediction, inputText })
        setTimeout(() => {
            setLoading(false)
            setResult(prediction.score)
        }, 300)
    }

    const runPredection = async (text) => {
        console.log({ ml5 })
        const sentiment = await ml5.sentiment("movieReviews")
        console.log({ sentiment })
        await sentiment.ready

        return sentiment.predict(text)
    }

    return (
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
            <div className="flex flex-col relative w-full max-w-xl rounded-lg overflow-hidden mx-auto">
                <textarea
                    maxLength={maxLength}
                    className="block w-full h-40 mt-1 py-2 px-3 rounded-md focus:outline-none"
                    disabled={loading}
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                />
                <span className="absolute px-2 py-1 text-xs text-white bg-blue-500 rounded right-2 bottom-2">
                    {maxLength - inputText.length}
                </span>
            </div>
            <div className="m-4 flex justify-center">
                <button
                    onClick={processText}
                    disabled={loading}
                    className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 disabled:bg-slate-500 rounded text-lg"
                >
                    {loading ? (
                        <div>
                            <div
                                style={{borderTopColor: "transparent"}}
                                className="w-7 h-7 border-4 border-white border-solid rounded-full animate-spin"
                            ></div>
                        </div>
                    ) : (
                        "Process Text"
                    )}
                </button>
            </div>
            {result && (
                <>
                    <div className="relative pt-1 w-full mt-10">
                        <div
                            className={`overflow-hidden h-auto mb-4 text-xs flex rounded ${
                                result > 0.5 ? "bg-green-200" : "bg-red-200"
                            }`}
                        >
                            <div
                                style={{ width: `${result * 100}%` }}
                                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                                    result > 0.5 ? "bg-green-500" : "bg-red-500"
                                }`}
                            >
                                {Math.round(result * 100)}
                                {"%"}
                            </div>
                        </div>
                    </div>
                    <div className="my-5 flex flex-col items-center">
                        <p className="text-xl text-center">
                            Cheer or fear? Belsnickel is here! I judge this text
                            as ...{" "}
                        </p>
                        <h1 className="text-3xl">
                            {result >= 0.8 || result <= 0.2 ? "Very" : ""}{" "}
                            {result >= 0.5 ? "Admirable" : "Impish"}
                        </h1>
                    </div>
                </>
            )}
        </div>
    )
}
