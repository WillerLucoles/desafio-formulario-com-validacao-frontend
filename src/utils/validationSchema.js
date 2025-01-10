import { z } from "zod";

export const validationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Nome completo deve ter no mínimo 2 caracteres")
    .max(100, "Nome completo deve ter no máximo 100 caracteres")
    .nonempty("Nome completo é obrigatório"),
  email: z
    .string()
    .email("E-mail inválido")
    .nonempty("E-mail é obrigatório"),
  phone: z
    .string()
    .regex(/^\d+$/, "Telefone deve conter apenas números")
    .min(10, "Telefone deve ter no mínimo 10 dígitos")
    .max(15, "Telefone deve ter no máximo 15 dígitos")
    .nonempty("Telefone é obrigatório"),
  role: z
    .string()
    .min(2, "Cargo pretendido deve ter no mínimo 2 caracteres")
    .max(50, "Cargo pretendido deve ter no máximo 50 caracteres")
    .nonempty("Cargo pretendido é obrigatório"),
  linkedIn: z
    .string()
    .url("LinkedIn deve ser uma URL válida")
    .optional(),
  github: z
    .string()
    .url("GitHub deve ser uma URL válida")
    .optional(),
});