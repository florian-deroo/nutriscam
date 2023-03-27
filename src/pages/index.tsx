/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <main
        className={
          "bg-[#fffaf6] w-full min-h-screen flex flex-col items-center text-default"
        }
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
        >
          {" "}
          <Image
            className="absolute right-10"
            width={260}
            height={30}
            alt=""
            src={"/assets-2.jpg"}
          />
          <Image
            className="absolute bottom-16 left-32"
            width={260}
            height={30}
            alt=""
            src={"/assets-3.jpg"}
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Image
            className="absolute bottom-1/2 translate-y-30 -translate-x-1/2 left-1/2"
            width={600}
            height={30}
            alt=""
            src={"/assets-4.jpg"}
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="pt-20 flex flex-col items-center justify-center z-10"
        >
          <Image width={270} height={30} alt="" src={"/nutriscam.png"} />
        </motion.div>

        <div className="max-w-[660px] text-center mt-10 z-50">
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="font-title text-5xl"
          >
            Bienvenue sur NutriScam
          </motion.span>

          <motion.a
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="flex flex-row gap-2 items-center w-fit mt-4 ml-auto mr-auto"
            href="https://github.com/Enderend44/Nutriscam"
          >
            <AiFillGithub className="text-3xl" /> Github
          </motion.a>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            className="bg-[#ead2ca] w-fit h-fit px-5 py-8 rounded-lg mt-10 flex flex-col items-center justify-center"
          >
            <span className="">
              NutriScam est un site web innovant qui utilise l'approche
              sémantique pour évaluer la qualité nutritionnelle des aliments.
              <br />
              <br /> Notre objectif est de fournir des informations précises et
              fiables sur les produits alimentaires pour aider les consommateurs
              à faire des choix plus sains.
            </span>

            <div className="flex flex-row gap-4 w-full items-center justify-center pt-6">
              <button className="bg-[#FFDCC8] w-fit px-5 py-3 rounded-lg hover:bg-[#]">
                Comment ça marche ?
              </button>
              <button className="bg-[#CBEBDC] w-fit px-5 py-3 rounded-lg hover:bg-[#]">
                Tester
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
