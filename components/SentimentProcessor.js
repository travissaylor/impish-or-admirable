import { useState } from "react"
import { useEffect } from "react"

export default function SentimentProcessor() {
    const [toxicty, setToxicity] = useState()
    const [inputText, setInputText] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState()
    const [reasons, setReasons] = useState([])

    const maxLength = 400
    const threshold = 0.9

    useEffect(() => {
        setToxicity(require("@tensorflow-models/toxicity"))
    }, [])

    const reasonMap = {
        identity_attack: { name: "Identity Attack" },
        insult: { name: "Insulting" },
        obscene: { name: "Obscene Language" },
        severe_toxicity: { name: "Severe Toxicity" },
        sexual_explicit: { name: "Sexually Explicit" },
        threat: { name: "Threatening" },
    }

    const getReasonFromLabel = (reasonLabel) => {
        return reasonMap[reasonLabel].name
    }

    const processText = async (e) => {
        setLoading(true)
        const predictions = await runPredection(inputText)

        const { results: toxicityRes } = predictions.find(
            (prediction) => prediction.label === "toxicity"
        )

        const matches = predictions.filter(
            (prediction) =>
                prediction.results[0].match !== false &&
                prediction.label !== "toxicity"
        )

        setTimeout(() => {
            setLoading(false)
            setResult(toxicityRes[0].probabilities[0])
            setReasons(matches)
        }, 300)
    }

    const runPredection = async (text) => {
        const model = await toxicty.load(threshold)
        const predictions = await model.classify([text])
        return predictions
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
                                style={{ borderTopColor: "transparent" }}
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
                        {reasons.length > 0 && (
                            <div className="w-full bg-white rounded-lg shadow mt-5">
                                <ul className="divide-y-2 divide-gray-100">
                                    <li className="p-3 bg-red-500 rounded-t-lg text-white">
                                        Entry Flags
                                    </li>
                                    {reasons.map((reason, index) => (
                                        <li key={index} className="p-3">
                                            {getReasonFromLabel(reason.label)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
