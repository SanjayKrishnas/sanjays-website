// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-8 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] items-center sm:items-start">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(77%) saturate(1352%) hue-rotate(207deg) brightness(93%) contrast(86%)' }}
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left text-primary-blue">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-gray-100 font-mono font-semibold px-1 py-0.5 rounded text-primary-blue">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-all duration-300 flex items-center justify-center bg-primary text-white gap-2 hover:bg-secondary hover:shadow-lg font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
              style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border-2 border-solid border-primary transition-all duration-300 flex items-center justify-center hover:bg-primary hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] text-primary"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </div>
      
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-primary hover:text-secondary transition-colors"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(77%) saturate(1352%) hue-rotate(207deg) brightness(93%) contrast(86%)' }}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-primary hover:text-secondary transition-colors"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(77%) saturate(1352%) hue-rotate(207deg) brightness(93%) contrast(86%)' }}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-primary hover:text-secondary transition-colors"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(77%) saturate(1352%) hue-rotate(207deg) brightness(93%) contrast(86%)' }}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}