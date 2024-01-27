import Image from 'next/image';
import illustrationDesktop from '@/public/images/illustration-sign-up-desktop.svg';
import illustrationMobile from '@/public/images/illustration-sign-up-mobile.svg';
import List from './List';

export default function Form() {
    return (
        <div className="bg-[hsl(235,18%,26%)] min-h-screen w-full flex items-center justify-center ">
            <div className="bg-white flex flex-col-reverse md:flex-row  gap-10 rounded-xl p-6 w-[800px]">
                {/* left  side  */}

                <div className="flex flex-col gap-5  md:w-1/2">
                    <h1 className="text-5xl font-bold"> Stay updated!</h1>
                    <p className="text-base">
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </p>

                    <div className="flex flex-col  gap-2">
                        <List list=" Product discovery and building what matters" />
                        <List list="  Measuring to ensure updates are a success" />
                        <List list="  And much more!" />
                    </div>

                    <div className="flex flex-col  gap-2">
                        <p className="font-bold "> Email address</p>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="border-2 border-gray-300 rounded-lg p-2"
                        />
                        <button className="bg-[hsl(235,18%,26%)]  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white rounded-lg px-5 py-2">
                            Subscribe to monthly newsletter
                        </button>
                    </div>
                </div>

                {/* right side */}

                <div className="md:w-1/2  flex items-center justify-center w-full">
                    <Image
                        src={illustrationMobile}
                        width={500}
                        height={500}
                        alt="error is there in "
                        className=" md:hidden"
                    />
                    <Image
                        src={illustrationDesktop}
                        width={500}
                        height={500}
                        alt="error is there in "
                        className="hidden md:flex"
                    />
                </div>
            </div>
        </div>
    );
}
