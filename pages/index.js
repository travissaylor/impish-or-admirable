import Head from "next/head"
import Image from "next/image"
import Hero from "../components/Hero"
import SentimentProcessor from "../components/SentimentProcessor"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-gray-600 body-font bg-gray-100">
            <Head>
                <title>Impish or Admirable</title>
                <meta
                    name="description"
                    content="Cheer or fear? Belsnickel is here! The Belsnickel will decide if you are impish or admirable using text sentiment artificial intelligence."
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    property="og:title"
                    content="Impish or Admirable"
                />
                <meta
                    property="og:description"
                    content="Cheer or fear? Belsnickel is here! The Belsnickel will decide if you are impish or admirable using text sentiment artificial intelligence."
                />
                <meta
                    property="og:image"
                    content="https://www.denofgeek.com/wp-content/uploads/2020/06/the-office-dwight-christmas.jpg"
                />
            </Head>
            <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                <Hero
                    title="Impish or Admirable"
                    description="The belsnickel will decide if you are impish or admirable."
                />
                <SentimentProcessor />
            </div>
        </div>
    )
}
