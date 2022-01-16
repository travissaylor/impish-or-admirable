export default function Hero({ title, description }) {
    return (
        <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
            <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://www.denofgeek.com/wp-content/uploads/2020/06/the-office-dwight-christmas.jpg?resize=768%2C432"
            />
            <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    {title}
                </h1>
                <p className="mb-8 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
