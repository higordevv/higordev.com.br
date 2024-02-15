import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-b from-slate-700 to-slate-900">
            <h2 className="text-4xl font-bold mb-4">Página não encontrada</h2>
            <p className="text-lg mb-8">
                Clique para voltar ao início: 
                <Link href="/" className=" ml-2 text-blue-300 hover:underline">
                     Início
                </Link>
            </p>
            <h1 className="text-6xl text-blue-gray-200 font-bold underline underline-offset-2 ">404</h1>
        </div>
    );
};

export default NotFound;