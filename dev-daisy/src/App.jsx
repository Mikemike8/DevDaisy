import React from 'react'
import './App.css'

export default function App() {
  const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];
  return (
    <div>



  <header className="container mx-auto flex w-full items-center justify-between py-4 px-6">
      {/* Logo */}
      <a href="#">
        <div className="w-full text-center text-lg font-extrabold sm:w-fit sm:text-left">
          <span className="text-orange-600">Dev</span>

          <span className="dark:text-slate-400">Heart</span>
        </div>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden bg-white text-base dark:bg-slate-900 sm:block">
        <ul className="flex items-center space-x-2">
          <li className="group relative">
            <a
              href="/"
              className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
            >
              Home
            </a>
          </li>
          <li className="group relative">
            <a
              href="#"
              className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
            >
              Services
            </a>
            <ul className="invisible absolute z-30 space-y-2 rounded-lg border border-slate-50 bg-white p-4 opacity-0 shadow-xl transition-opacity delay-75 ease-in-out group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
              <li>
                <a
                  href="#"
                  className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                >
                  Business Line of Credit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                >
                  SBA Loan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                >
                  Revenue Based Financing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                >
                  Invoice Factoring
                </a>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <a
              href="/about"
              className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
            >
              About
            </a>
          </li>
          <li className="group relative">
            <a
              href="/contact"
              className="block whitespace-nowrap px-2 py-2 text-sm text-slate-900 transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="block text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 sm:hidden"
        title="Open navigation menu"
      >
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          width="1.2em"
          height="1.2em"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile Nav */}
      <nav className="fixed -right-2/3 top-0 z-20 h-full w-2/3 transform overflow-y-auto bg-white py-4 text-base transition dark:bg-slate-900 sm:hidden">
        <ul className="flex flex-col space-y-2">
          <li className="text-right">
            <button className="px-6 py-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-50">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-4 4l4-4m-4-4l4 4"
                ></path>
              </svg>
            </button>
          </li>
          <li className="group relative w-full text-right">
            <a
              href="/"
              className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
            >
              Home
            </a>
          </li>
          <li className="group relative w-full text-right">
            <a
              href="#"
              className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
            >
              Solutions
            </a>
            <ul className="h-0 space-y-2 overflow-y-hidden bg-slate-50 px-4 py-0 transition-all delay-75 ease-in-out group-hover:h-full group-hover:py-4 dark:bg-slate-800">
              <li>
                <a
                  href="#"
                  className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                >
                  Business Line of Credit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                >
                  SBA Loan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                >
                  Revenue Based Financing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
                >
                  Invoice Factoring
                </a>
              </li>
            </ul>
          </li>
          <li className="group relative w-full text-right">
            <a
              href="/about"
              className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 transition hover:text-slate-900 dark:hover:text-slate-50"
            >
              About
            </a>
          </li>
          <li className="group relative w-full text-right">
            <a
              href="/contact"
              className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-900 transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>






<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-full">
      <h1 className="mb-5 text-7xl ">An  <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
  engineer</span> in every tab</h1>
      <p className="mb-5 text">
      Delegate software development tasks to agents called Droids. Droids take commands and deliver: pull requests, tickets, docs, and more.</p>
      <button className="btn bg-gradient-to-r from-red-500 to-orange-500 text-white">Get Started</button>
    </div>
    

  </div>

  {/* <div className="mx-auto mt-48 py-24 sm:py-32 max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg/8 font-semibold text-white">Trusted by the world’s most innovative teams</h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
    </div> */}
</div>



<div className="bg-white py-6 sm:py-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg/8 font-semibold text-orange-600">Trusted by the world’s most innovative teams</h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
    </div>
    
  </div>
</div>




<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-orange-600">Deploy faster</h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">Everything you need to deploy your app</p>
      <p class="mt-6 text-lg/8 text-gray-700">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                <path d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            Push to deploy
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            SSL certificates
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            Simple queues
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600 ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                <path d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            Advanced security
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>


<section className="py-12 bg-white">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Image Section */}
      <div className="flex justify-end md:justify-end">
        <img
          className="rounded-2xl shadow-lg max-w-md w-full object-cover"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
          alt="Team working together"
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 md:mt-0 md:ml-12 lg:ml-24">
        <span className="text-orange-600 uppercase tracking-wide font-semibold">
          Our Story
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-900">
          About Us
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow hover:bg-orange-700 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>




  <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-orange-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

<footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>


    </div>
  )
}

