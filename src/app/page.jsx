import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/2 h-2/3 lg:h-screen flex flex-col justify-end items-center">
        <div className="flex w-full h-full justify-center items-center">
          <h1 className="text-3xl text-center font-bold">¡Hola! Soy el asistente del librero LIS</h1>
        </div>
        <Image
          src="/luzio_leyendo.png"
          width="500"
          height="200"
          alt="Luzio leyendo"
        />
      </div>
      <div className="lg:w-1/2 h-1/3 lg:h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <Link href="./sign_up">
            <button className="w-full lg:w-72 lg:h-11 lg:px-0 lg:py-0 px-28 py-3 rounded-md mb-2 bg-primary text-white">Crear cuenta</button>
          </Link>
          <Link href="./login">
            <button className="w-full lg:w-72 lg:h-11 lg:px-0 lg:py-0 px-28 py-3 rounded-md mt-2 border-solid border-2 border-primary text-primary">Iniciar sesión</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

