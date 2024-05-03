"use client";
import React from "react";
import TopNavbar from "./top-nav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { BsFilterSquare } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import Link from "next/link";
import Navigation from "./navigation";
import ProductDialog from "../product-dialog";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const store = useSelector((store: RootState) => store.cart);
  return (
    <>
      <TopNavbar />
      <header className="hidden md:flex items-center justify-between container py-5 max-[1300px]:px-5">
        <div className="flex items-center">
          <Link href="/">
            <svg
              data-v-aa1700bc=""
              width="215"
              height="32"
              viewBox="0 0 215 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ui-icon  logo"
            >
              <rect
                width="31.9764"
                height="31.9764"
                rx="15.9882"
                fill="#FFFF00"
              ></rect>
              <path
                d="M3.75192 14.7933C3.27969 12.1152 3.04358 10.7761 3.38441 9.66131C3.68421 8.68069 4.28676 7.82017 5.1057 7.20306C6.0367 6.50149 7.37576 6.26538 10.0539 5.79316L18.144 4.36665C20.8221 3.89442 22.1612 3.65831 23.276 3.99914C24.2566 4.29894 25.1171 4.90149 25.7342 5.72043C26.4358 6.65143 26.6719 7.99049 27.1441 10.6686L28.2537 16.9611C28.7259 19.6393 28.962 20.9783 28.6212 22.0931C28.3214 23.0737 27.7188 23.9343 26.8999 24.5514C25.9689 25.2529 24.6298 25.489 21.9517 25.9613L13.8616 27.3878C11.1835 27.86 9.84441 28.0961 8.72961 27.7553C7.749 27.4555 6.88847 26.8529 6.27136 26.034C5.5698 25.103 5.33368 23.7639 4.86146 21.0858L3.75192 14.7933Z"
                fill="#7000FF"
              ></path>
              <path
                d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
                fill="white"
              ></path>
              <path
                d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
                fill="white"
              ></path>
              <path
                d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
                fill="white"
              ></path>
              <path
                d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
                fill="white"
              ></path>
              <path
                d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
                fill="white"
              ></path>
              <path
                d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
                fill="white"
              ></path>
              <path
                d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
                fill="white"
              ></path>
              <path
                d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
                fill="white"
              ></path>
              <path
                d="M136.192 9.43597C133.804 9.43597 132 10.4097 131.101 11.8772C130.195 10.4097 128.22 9.43597 126.161 9.43597C122.114 9.43597 120.049 11.9938 120.049 15.1688V22.7806H123.829V15.7037C123.829 14.1951 124.631 12.851 126.456 12.851C128.288 12.851 129.235 14.1333 129.235 15.6488V22.7806H133.029V15.6488C133.029 14.1265 133.921 12.851 135.739 12.851C137.571 12.851 138.421 14.1951 138.421 15.7037V22.7806H142.202V15.1688C142.195 11.9938 140.246 9.43597 136.192 9.43597Z"
                fill="#7000FF"
              ></path>
              <path
                d="M159.051 18.1861V9.6897H155.312L155.34 11.7538C154.523 10.54 153.096 9.43597 150.558 9.43597C146.194 9.43597 143.951 12.8236 143.951 16.2249C143.869 19.6673 146.407 23.0892 150.373 23.0892C152.472 23.0892 154.393 22.1566 155.312 20.5177C155.683 21.6011 156.623 22.7875 158.571 22.7875H160.732V19.6125H160.128C159.374 19.6125 159.051 19.3313 159.051 18.1861ZM151.347 19.8113C149.199 19.8113 147.594 18.3301 147.594 16.2523C147.594 14.2019 149.199 12.7481 151.347 12.7481C153.563 12.7481 155.168 14.2019 155.168 16.2523C155.168 18.3301 153.563 19.8113 151.347 19.8113Z"
                fill="#7000FF"
              ></path>
              <path
                d="M163.14 14.1539V22.7806H166.92V16.9929C166.92 14.7505 168.546 13.3104 170.618 13.3104H173.088V9.41537H171.236C168.951 9.41537 167.284 11.3629 166.92 12.4944V12.0966V9.68282H163.14V14.1539Z"
                fill="#7000FF"
              ></path>
              <path
                d="M175.325 22.7806H179.105V16.3688L184.978 22.7806H189.437L183.352 16.0534L188.971 9.68967H184.525L179.105 15.8271V5.6369H175.325V22.7806Z"
                fill="#7000FF"
              ></path>
              <path
                d="M193.862 17.2604C193.862 18.7004 194.61 20.1542 197.025 20.1542C199.241 20.1542 199.563 18.8239 199.563 18.8239H203.714C203.714 18.8239 203.33 23.0892 197.025 23.0892C192.634 23.0892 189.883 20.6342 189.883 16.2523C189.883 11.8635 192.634 9.43597 196.984 9.43597C201.272 9.43597 204.037 11.8635 204.037 16.2523C204.037 16.7323 203.954 17.2672 203.954 17.2672H193.862V17.2604ZM193.91 14.9562H199.996C199.996 13.8865 199.378 12.371 196.977 12.371C194.61 12.371 193.91 13.8933 193.91 14.9562Z"
                fill="#7000FF"
              ></path>
              <path
                d="M212.661 19.4959C211.364 19.4959 210.897 18.9198 210.897 17.0957V12.4807H214.993V9.44281H210.897V6.83011H208.853L205.21 10.3137V12.4875H207.117V17.5963C207.117 21.2651 208.908 22.808 212.661 22.808H215V19.5027H212.661V19.4959Z"
                fill="#7000FF"
              ></path>
              <path
                d="M83.6802 16.4854C83.6802 18.5564 82.507 19.5164 80.7644 19.5164C79.0218 19.5164 77.8898 18.577 77.8898 16.4854V9.64166H74.1301V16.6157C74.1301 21.1622 77.9309 22.9383 80.7918 22.9383C83.6527 22.9383 87.4604 21.1554 87.4604 16.6157V9.64166H83.7007L83.6802 16.4854Z"
                fill="#7000FF"
              ></path>
              <path
                d="M70.9468 12.8167V9.64166H58.728V12.8167H65.966L58.4398 19.5233V22.6983H71.4133V19.5233H63.4344L70.9468 12.8167Z"
                fill="#7000FF"
              ></path>
              <path
                d="M106.286 9.39484C103.905 9.39484 102.108 10.3617 101.216 11.8361C100.31 10.3617 98.3414 9.39484 96.2969 9.39484C92.2766 9.39484 90.1841 11.9527 90.1841 15.1208V22.6983H93.9437V15.6489C93.9437 14.1334 94.7395 12.803 96.5645 12.803C96.935 12.7824 97.3054 12.8373 97.6553 12.9676C98.0052 13.0979 98.3208 13.3036 98.5815 13.571C98.8422 13.8316 99.048 14.1539 99.1784 14.5037C99.3088 14.8534 99.3636 15.2237 99.3431 15.594V22.6983H103.103V15.594C103.103 14.0785 103.995 12.803 105.799 12.803C107.603 12.803 108.475 14.1334 108.475 15.6489V22.6983H112.234V15.1277C112.234 11.9664 110.293 9.40169 106.252 9.40169L106.286 9.39484Z"
                fill="#7000FF"
              ></path>
              <path
                d="M52.1966 16.4854C52.1966 18.5564 51.0235 19.5164 49.2946 19.5164C47.5657 19.5164 46.4062 18.577 46.4062 16.4854V9.64166H42.6466V16.6157C42.6466 21.1622 46.4337 22.9383 49.3083 22.9383C52.1829 22.9383 55.9631 21.1554 55.9631 16.6157V9.64166H52.2035L52.1966 16.4854Z"
                fill="#7000FF"
              ></path>
            </svg>
          </Link>
          <button className="flex items-center  mr-3 bg-[#F0F0FF] py-2 px-5 rounded-sm ml-10 text-[#7000FF] font-medium hover:bg-[#6f00ff2f] transition duration-500">
            <BsFilterSquare className="text-xl mr-2 rotate-180" />
            <span>Katalog</span>
          </button>
        </div>
        <form className="flex max-[1200px]:w-1/2 max-[1200px]:mx-3  h-10 items-center justify-between border border-gray-300 w-2/5 rounded-sm">
          <input
            type="text"
            placeholder="Maxsulot va turkumlar izlash"
            className="w-full outline-none px-5
          "
          />
          <button className=" bg-gray-200 h-full w-20 flex items-center justify-center">
            <IoSearchOutline className="text-xl" />
          </button>
        </form>
        <div className="flex items-center justify-center space-x-3">
          <Link href="/wishes">
            <button className="flex items-center space-x-2 hover:bg-slate-200 px-2 py-3 rounded-sm">
              <FaRegHeart className="text-xl mr-1" />
              <span className="max-[1200px]:hidden">Saralangan</span>
            </button>
          </Link>
          <Link href="/cart">
            <button className="flex items-center space-x-2 hover:bg-slate-200 px-2 py-3 rounded-sm">
              <GrShop className="text-xl mr-2" />
              <span className="max-[1200px]:hidden">Savat</span>
              {store.cart.length > 0 && (
                <span className="max-[1200px]:hidden block text-white px-2 rounded-sm bg-[#7000FF]">
                  {store.cart.length}
                </span>
              )}
            </button>
          </Link>
          <SignedIn>
            <UserButton afterSignOutUrl="/uz" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center hover:bg-slate-200 px-2 py-3 rounded-sm ml-5">
                <FaRegUser className="text-xl mr-2" />
                <span className="max-[1200px]:hidden">Kirish</span>
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </header>
      <Navigation />
      {/* Product Dialog */}
      <ProductDialog />
    </>
  );
};

export default Navbar;
