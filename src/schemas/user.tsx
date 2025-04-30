import { z } from "zod";

export const formSchema = z
  .object({
    name: z
      .string({ required_error: "El nombre es obligatorio" })
      .min(3, { message: "Debe tener al menos 3 caracteres" })
      .max(40, { message: "No puede tener más de 20 caracteres" }),

    email: z
      .string({ required_error: "El correo es obligatorio" })
      .email({ message: "El correo no es válido" }),

    password: z
      .string({ required_error: "La contraseña es obligatoria" })
      .min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
      }),

    confirmPassword: z.string({
      required_error: "Debes confirmar la contraseña",
    }),

    country: z.string({
      required_error: "Debes seleccionar un país",
    }),

    terms: z.literal(true, {
      errorMap: () => ({ message: "Debes aceptar los TyC" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });

export type FormData = z.infer<typeof formSchema>;
