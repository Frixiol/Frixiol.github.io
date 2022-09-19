import {useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import SignOut from './SignOut';
import SignIn from './SignIn';

function NavBar() {
  const [user] = useAuthState(auth)
  return (
    <nav class="p-3 bg-gray-200 rounded">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
          <img src="https://cdn.discordapp.com/avatars/304674415403204628/95fa170984d162843cf4b0d094f137d3.webp" class="mr-3 h-14 p-1 rounded-full ring-2 ring-white" alt="mon logo discord" />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-gray-700">Frixiol</span>
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul class="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ">
          <li>
            <a href="https://rebrand.ly/r1ckr0l13r" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white " aria-current="page">Home</a>
          </li>
          <li>
            <a href="https://rebrand.ly/r1ckr0l13r" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Programme</a>
          </li>
          <li>
            <a href="https://rebrand.ly/r1ckr0l13r" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A venir</a>
          </li>
          <li>
          {user ? <SignOut/> : <SignIn/>}
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;