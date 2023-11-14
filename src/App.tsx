

function App() {
  return (
    <main className="mx-[1rem] flex flex-col gap-[1rem]">
      {/* nav */}
      <div className="flex justify-between items-center mx-[3rem]">
        <div className="flex justify-center items-center">
          <img src="https://media.licdn.com/dms/image/C510BAQEzP4y4oeD4IA/company-logo_200_200/0/1631369563060?e=1707955200&v=beta&t=eRPP7vUWz6dSrImFSLR7JH7LetvvyacUgnP9OlHOeHU" className="w-[8rem]" />
          {/* <h1>Blue Consultants</h1> */}
        </div>
        <div className="flex gap-[4rem] items-center">
          <h1 className="">Home</h1>
          <h1>Feautre</h1>
          <h1>Benfits</h1>
          <button className="px-6 py-2 w-[8rem] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#336c96]  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Go to App
          </button>
        </div>
      </div>

      {/* middle section */}
      <div className="flex gap-[8rem] items-center justify-around">
        <div className="flex flex-col gap-[2rem] w-[25rem]">
          <div>
            <h1 className="text-[2.5rem] font-bold text-[#15344d]">InterviewGpt</h1>
            <h1 className="text-[1.8rem] font-bold text-[#000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
          </div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil ea pariatur eos odio aliquam repellendus, doloribus quae fugit quam eveniet velit placeat inventore magnam nulla voluptate non amet fugiat.</h1>
          <button className="px-6 py-2 w-[8rem] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#336c96]  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Try Now
          </button>
        </div>
        <div>
          <img src="https://www.bluetickconsultants.com/images/blog/privacy-matters/privacy-designer.webp" className="w-[30rem]" />
        </div>
      </div>


      {/* last section */}
      <div className="flex justify-center items-center mt-[10rem]">
        <div className="flex flex-col gap-[4rem]">
          <ol className="">
            {/* <h3 className="font-medium leading-tight">Personal Info</h3>
            <p className="text-sm">Step details here</p> */}
            <div className="flex items-center">
              <img width="70" height="70" src="https://img.icons8.com/bubbles/50/heart-border.png" alt="heart-border" />
              <div className="flex drop-shadow-2xl rounded-lg">
                <div className="flex justify-center items-center bg-[#75418b] p-[1rem] py-[2rem] rounded-md">
                  <h1 className="text-[#fff]">20-08-2019</h1>
                </div>
                <div className="bg-[#fff] p-[1rem]">
                  <h1 className="text-[#75418b]">Birthday</h1>
                  <h1 className="w-[43rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam perferendis facilis, aliquid, distinctio ipsum est nihil placeat quos iste consectetur soluta? Distinctio at quo neque ad. Corrupti, porro itaque!</h1>
                </div>
              </div>
            </div>

            {/* Repeat the structure for the other list items */}
          </ol>

          <ol className="">
            {/* <h3 className="font-medium leading-tight">Personal Info</h3>
            <p className="text-sm">Step details here</p> */}
            <div className="flex items-center">
              <img width="70" height="70" src="https://img.icons8.com/bubbles/50/heart-border.png" alt="heart-border" />
              <div className="flex drop-shadow-2xl rounded-lg">
                <div className="flex justify-center items-center bg-[#75418b] p-[1rem] py-[2rem] rounded-md">
                  <h1 className="text-[#fff]">20-08-2019</h1>
                </div>
                <div className="bg-[#fff] p-[1rem]">
                  <h1 className="text-[#75418b]">Birthday</h1>
                  <h1 className="w-[43rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam perferendis facilis, aliquid, distinctio ipsum est nihil placeat quos iste consectetur soluta? Distinctio at quo neque ad. Corrupti, porro itaque!</h1>
                </div>
              </div>
            </div>

            {/* Repeat the structure for the other list items */}
          </ol>

          <ol className="">
            {/* <h3 className="font-medium leading-tight">Personal Info</h3>
            <p className="text-sm">Step details here</p> */}
            <div className="flex items-center">
              <img width="70" height="70" src="https://img.icons8.com/bubbles/50/heart-border.png" alt="heart-border" />
              <div className="flex drop-shadow-2xl rounded-lg">
                <div className="flex justify-center items-center bg-[#75418b] p-[1rem] py-[2rem] rounded-md">
                  <h1 className="text-[#fff]">20-08-2019</h1>
                </div>
                <div className="bg-[#fff] p-[1rem]">
                  <h1 className="text-[#75418b]">Birthday</h1>
                  <h1 className="w-[43rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam perferendis facilis, aliquid, distinctio ipsum est nihil placeat quos iste consectetur soluta? Distinctio at quo neque ad. Corrupti, porro itaque!</h1>
                </div>
              </div>
            </div>

            {/* Repeat the structure for the other list items */}
          </ol>


        </div>


      </div>


      {/* footer */}
      <div className="relative mt-16 bg-deep-purple-accent-400">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          {/* <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          /> */}
        </svg>
        <div className="">
          <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 ">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
              <div className="md:max-w-md lg:col-span-2">
                <img src="https://media.licdn.com/dms/image/C510BAQEzP4y4oeD4IA/company-logo_200_200/0/1631369563060?e=1707955200&v=beta&t=eRPP7vUWz6dSrImFSLR7JH7LetvvyacUgnP9OlHOeHU" className="w-[8rem]" />

                <div className="mt-4 lg:max-w-sm">
                  <p className="text-sm text-deep-purple-50">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <p className="mt-4 text-sm text-deep-purple-50">
                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                {/* <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      References
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Cherry
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Web
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      eCommerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Apples
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Brochure
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Nonprofit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Educational
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Business
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Infopreneur
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Forum
                    </a>
                  </li>
                </ul>
              </div> */}
              </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
              <p className="text-sm text-[#000]">
                © Copyright 2020 Lorem Inc. All rights reserved.
              </p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <a
                  href="/"
                  className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}

export default App;
