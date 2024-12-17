import Image from "next/image";

export const Midsec = () => {
  return (
    <main>
      <div className="relative">
        {/* First div: Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/backing.jpg')" }}
        ></div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Second div: Logo with animation */}
        <div
          className="relative content-center z-10 flex items-center justify-center -left-3.5 h-screen p-60 -bottom-10 animate-logo"
        >
          <Image src="/images/logo.png" alt="Logo" width={750} height={500} />
        </div>
      </div>
    </main>
  );
};
