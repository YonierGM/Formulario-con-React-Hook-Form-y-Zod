import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "./schemas/user";

import { Report } from "notiflix/build/notiflix-report-aio";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // <--- tipado automático

    Report.success(
      `<strong>${data.name}</strong>`,
      `tus datos fueron validados y registrados satisfactoriamente. <br/><br/>
    ¡Gracias por completar el formulario!`,
      "Aceptar"
    );

    reset();
  };

  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block w-full rounded-r-xl overflow-hidden">
        <img
          className="h-full object-cover"
          src="./aside.webp"
          alt="image aside"
        />
      </div>
      <form
        className="max-w-sm md:w-[100%] mx-auto flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-3xl md:text-3xl lg:text-4xl dark:text-white text-center">
          Formulario de Registro
        </h1>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("name")}
            placeholder="Nombre"
          />
          {errors.name && (
            <span className="text-red-700 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Correo
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("email")}
            placeholder="Correo electrónico"
          />
          {errors.email && (
            <span className="text-red-700 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password")}
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className="text-red-700 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirmar contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("confirmPassword")}
            placeholder="Confirmar contraseña"
          />
          {errors.confirmPassword && (
            <span className="text-red-700 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pais
          </label>
          <select
            id="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("country")}
          >
            <option value="CO">Colombia</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="PE">Peru</option>
          </select>

          {errors.country && (
            <span className="text-red-700 text-sm">
              {errors.country.message}
            </span>
          )}
        </div>

        <div className="flex items-start mb-5 gap-2.5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              {...register("terms")}
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Términos y condiciones
          </label>
          {errors.terms && (
            <span className="text-red-700 text-sm">{errors.terms.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Registrar
        </button>
      </form>
    </section>
  );
}

export default App;
