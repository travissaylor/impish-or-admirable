export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg
                        version={1.0}
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 500 500"
                        xmlSpace="preserve"
                        className="w-28 h-28 text-white p-2 rounded-full"
                        stroke="currentColor"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#030001"
                            d="M154.339,367.035c-0.222,0-0.443,0-0.665,0
	c-4.814-3.742-15.087-6.621-16.937-12.953c-1.367-4.676-1.214-10.869-1.661-16.604c-1.272-16.355-1.262-35.52-2.989-51.477
	c-0.479-4.432-3.166-8.756-4.981-12.953c-4.348-10.057-7.968-21.961-8.967-34.871c0-6.863,0-13.727,0-20.592
	c1.164-17.739,5.991-36.068,12.289-51.808c13.085-32.709,34.604-58.893,71.402-68.413c14.914-3.859,37.772-5.331,47.158,3.32
	c2.58,2.379,3.465,5.654,5.977,8.635c15.244-9.898,44.222-5.082,58.784,0.996c26.987,11.263,42.96,32.879,54.133,59.779
	c5.651,13.611,10.99,29.265,12.952,44.17c2.648,20.125-0.192,40.119-5.979,54.467c-1.93,4.781-5.573,9.439-6.643,14.279
	c-1.114,5.053-1.073,11.465-1.327,17.27c-0.538,12.225-1.471,23.707-2.324,35.203c-0.452,6.066-0.202,12.436-0.997,17.934
	c-0.384,2.65-5.755,6.674-8.303,8.303c-3.348,2.141-6.866,4.639-10.627,4.65c0.709-16.385,9.373-31.545,10.627-47.824
	c0.549-7.127-0.032-16.133-0.332-22.584c-0.092-1.965,0.279-5.186-1.662-6.309c-1.394-0.801-3.766-0.113-5.313,0
	c-0.402,6.742,1.755,14.211,0.334,20.59c-3.101,13.92-19.692,14.855-35.536,15.609c-10.108,0.482-20.462-0.053-27.564-3.32
	c-14.443-6.646-20.503-20.193-22.915-34.873c-6.996-1.963-18.83-2.645-25.239,0.334c-0.764,3.377-0.923,6.701-1.993,9.961
	c-3.148,9.602-10.451,19.551-19.594,24.246c-8.155,4.186-18.496,3.652-30.554,3.652c-9.192,0-20.051-1.357-25.904-4.65
	c-9.957-5.598-8.079-18.355-7.639-31.549c-1.928,0.268-4.298-0.42-5.313,0c-1.505,9.502-2.717,18.559-1.66,28.561
	c0.765,7.242,4.006,15.801,5.645,23.912C151.25,348.205,155.939,361.125,154.339,367.035z M306.109,205.963
	c-1.421-22.556-15.221-34.29-28.56-44.834c-7.729-6.11-16.038-11.218-28.894-9.963c-16.721,1.632-31.561,12.758-39.521,23.579
	c-10.627,14.449-14.853,36.538-11.291,58.12c-7.655-8.789-9.937-23.984-11.956-37.861c-2.033,0.684-1.776,3.442-2.325,5.313
	c-0.559,1.907-1.489,3.948-1.993,5.978c-4.125,16.623-0.482,37.275,9.631,44.503c1.065,0.762,2.96,1.27,3.321,2.658
	c-9.606-1.133-13.928-7.549-19.594-12.621c0.948,6.699,8.039,9,10.627,12.953c-12.011-4.023-20.253-13.637-21.254-28.562
	c-0.452-6.736,1.943-13.37,0.996-19.596c-2.673,3.587-3.652,10.911-3.986,17.604c-0.375,7.524,0.642,14.852,0.997,19.593
	c-3.187-2.902-2.712-9.465-5.314-12.952c-0.769,11.946-2.208,22.054-6.31,29.89c-0.918,1.756-2.689,3.438-3.321,5.314
	c-1.978,5.883-0.693,12.699-1.66,19.262c1.502,0.711,4.271,0.156,6.31,0.332c1.11-1.115,1.434-4.9,2.657-6.975
	c5.304-8.994,19.385-9.289,34.207-9.963c37.514-1.703,78.325-2.023,115.572-0.33c20.015,0.908,40.409,0.469,42.51,16.936
	c1.634,0.541,5.34,0.541,6.974,0c-0.903-5.988,0.601-12.225-0.995-17.934c-0.607-2.174-2.532-4.16-3.654-6.309
	c-3.514-6.734-5.501-15.18-6.31-24.246c-0.125-1.404,0.88-3.79-0.996-4.981c-2.357,5.394-3.823,13.447-8.967,14.946
	c2.832-5.1,7.357-16.797,3.652-23.913c-1.668,13.499-6.429,25.674-16.604,29.557c1.799-3.418,6.403-5.752,4.979-11.291
	c-1.651,0.981-2.458,2.792-3.652,4.318c-3.439,4.393-7.838,8.75-14.28,8.967c16.088-12.79,16.726-50.915,2.989-66.754
	c0.591,10.094,0.771,23.786-4.65,29.889C305.436,213.123,306.332,209.492,306.109,205.963z M259.283,268.398
	c-5.894,0-12.229,0.467-17.934,0c-5.432-0.443-15.874-1.441-17.934,1.328c6.785,1.85,11.899,5.371,13.617,12.289
	c6.844-0.645,17.698-1.922,24.907,0.332c2.062-4.695,4.28-8.859,8.967-10.959c1.586-0.713,3.643-0.324,4.981-1.992
	C271.545,267.607,265.368,268.398,259.283,268.398z M155.335,281.684c-0.725,1.959-0.726,4.445-0.996,7.307
	c-0.65,6.859-2.269,18.195,0,23.578c3.765,8.936,16.536,9.764,28.561,10.961c9.064,0.9,18.652,0.9,26.236-1.328
	c9.888-2.908,18.456-12.145,22.251-20.924c2.181-5.045,4.972-15.486,2.656-21.586c-3.633-9.576-23.616-9.486-37.859-9.301
	C177.571,270.635,159.639,270.049,155.335,281.684z M265.926,279.025c-3.476,7.189,1.369,21.242,4.316,26.236
	c2.852,4.836,7.983,10.502,12.953,13.617c9.247,5.797,25.329,5.605,39.852,3.984c13.354-1.486,22.751-3.762,23.248-17.268
	c0.266-7.254-0.724-20.969-2.989-25.572c-4.939-10.035-26.297-10.373-41.845-9.633C284.984,271.176,270.316,269.943,265.926,279.025
	z"
                        />
                    </svg>
                    <span class="ml-3 text-xl">Belsnickeltron</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="https://github.com/travissaylor/impish-or-admirable" target="_blank" className="mr-5 hover:text-gray-900 cursor-pointer flex items-center">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-8 h-8"
                            viewBox="0 0 30 30"
                        >
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                        </svg>
                        <span className="ml-1">GitHub</span>
                    </a>
                </nav>
            </div>
        </header>
    )
}
