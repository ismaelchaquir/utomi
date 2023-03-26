import { Logo } from "../../assets";

function Signup() {
  return (
    <div className="flex">
      <div className="bg-white flex w-[50vw] h-screen">
        <div className="flex flex-col pt-20 w-full items-center">
          <Logo />
          <h1 className="text-textColor text-3xl font-bold">Registre-se</h1>
          <h1 className="text-textColor text-3xl font-light">Bem-vindo(a)</h1>
          <form className="mt-10 w-full">
            <div className="form-group mx-10">
              <input
                type="text"
                className="form-control w-full font-normal py-1.5 border border-solid rounded pl-2 bg-formBg border-borderBg focus:bg-formBg focus:border-borderBg focus:outline-none"
                placeholder="Primeiro Nome"
              />
            </div>
            <div className="form-group mt-6 mx-10">
              <input
                type="password"
                className="form-control w-full font-normal py-1.5 border border-solid rounded pl-2 bg-formBg border-borderBg focus:bg-formBg focus:border-borderBg focus:outline-none"
                placeholder="Apelido"
              />
            </div>
            <div className="form-group mt-6 mx-10">
              <input
                type="password"
                className="form-control w-full font-normal py-1.5 border border-solid rounded pl-2 bg-formBg border-borderBg focus:bg-formBg focus:border-borderBg focus:outline-none"
                placeholder="Escreve o teu e-mail"
              />
            </div>
            <div className="form-group mt-6 mx-10">
              <input
                type="password"
                className="form-control w-full font-normal py-1.5 border border-solid rounded pl-2 bg-formBg border-borderBg focus:bg-formBg focus:border-borderBg focus:outline-none"
                placeholder="Escreve a tua palavra-passe"
              />
            </div>
            <div className="form-group mt-6 mx-10">
              <input
                type="password"
                className="form-control w-full font-normal py-1.5 border border-solid rounded pl-2 bg-formBg border-borderBg focus:bg-formBg focus:border-borderBg focus:outline-none"
                placeholder="Confirma a palavra-passe (repita)"
              />
            </div>
            <div className="form-group mt-6 mx-10">
              <input
                type="password"
                className="form-control w-full font-normal py-1.5 border border-solid rounded pl-2 bg-formBg border-borderBg focus:bg-formBg focus:border-borderBg focus:outline-none"
                placeholder="Escolha o pais"
              />
            </div>
            <div className="form-control mt-6 mx-10">
              <button
                type="submit"
                className=" w-full bg-custom text-white py-1.5 rounded text-2xl"
              >
                REGISTRAR
              </button>
            </div>

            <div className="form-control mt-6 mx-10 flex justify-center">
              <p className="text-textColor">
                Já tem uma conta?
                <span className="text-custom ml-1">Iniciar Sessão</span>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="flex w-10/12 bg-primary h-screen">world</div>
    </div>
  );
}

export default Signup;
