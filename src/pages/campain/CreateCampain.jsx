import { Logo } from "../../assets";

function CreateCampain() {
  return (
    <div className="flex">
      <div className="bg-white flex w-10/12  h-screen">
        <div className="w-full ml-16">
          <div className="mt-8">
            <Logo />
          </div>
          <div className="mt-10">
            <input
              type="text"
              className="form-control w-full font-normal py-1.5 border border-solid rounded pl-2 bg-formBg border-borderBg focus:bg-formBg focus:border-borderBg focus:outline-none"
              placeholder="Escolha a sua provincia"
            />
          </div>
          <div className="mt-6">
            <input
              type="text"
              className="form-control w-full font-normal py-1.5 border border-solid rounded pl-2 bg-formBg border-borderBg focus:bg-formBg focus:border-borderBg focus:outline-none"
              placeholder="Escolha o seu distrito"
            />
          </div>

          <div className="mt-10">
            <p className="mb-2">Para quem está a iniciar a campanha?</p>
            <div className="flex mr-20">
              <button
                className="bg-primary p-1.5 rounded text-2xl text-white w-full"
                type="submit"
              >
                Para Min
              </button>
              <button
                className="bg-primary p-1.5 rounded text-2xl text-white w-full ml-4"
                type="submit"
              >
                Para Outra Pessoa
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[35vw] bg-primary h-screen">hey</div>
    </div>
  );
}

export default CreateCampain;
