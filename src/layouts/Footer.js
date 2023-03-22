function Footer() {
  return (
    <footer className="bg-white absolute bottom-0 w-full">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="flex items-center mb-4 sm:mb-0">
            <img src="logo.png" className="h-11 mr-1.5" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">RecSystem</span>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">Sobre nosotros</p>
            </li>
            <li>
              <p className="mr-4 hover:underline md:mr-6">Politica de privacidad</p>
            </li>
            <li>
              <p className="hover:underline">Contacto</p>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <p className="block text-sm text-gray-500 sm:text-center">© 2023 RecSystem™. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;