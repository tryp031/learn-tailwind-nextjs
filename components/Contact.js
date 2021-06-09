const Contact = () => (
  <section id="contact" className="text-gray-700 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contáctame
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Este es el primer paso para poder comenzar a vender más, en linea.
          Hagamos juntos esta transformación digital
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <input
              className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              placeholder="Nombre"
              type="text"
            />
          </div>
          <div className="p-2 w-1/2">
            <input
              className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              placeholder="Correo"
              type="email"
            />
          </div>
          <div className="p-2 w-full">
            <textarea
              className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg shadow">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
