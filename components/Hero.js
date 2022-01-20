import Image from "next/image"

export default function Hero({ title, description }) {
    return (
        <div className="container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
            <div className="xl:w-3/5 lg:w-2/3 md:w-5/6 w-full h-80 xl:h-96 mb-10 rounded relative">
                <Image
                    src="https://www.denofgeek.com/wp-content/uploads/2020/06/the-office-dwight-christmas.jpg"
                    alt="Belsnickel"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    {title}
                </h1>
                <p className="mb-8 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
