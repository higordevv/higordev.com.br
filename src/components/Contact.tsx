import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  contact: z.string().min(5, "Contato inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      // Simulação de envio. Substitua com seu endpoint real.
      await axios.post("/api/contact", data);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#0b1120] to-[#0f172a] py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ccff00] mb-10">Contato</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-5"
        >
          <div>
            <label className="block mb-1 text-sm text-gray-300">Nome</label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-3 bg-white/10 text-white rounded-md outline-none focus:ring-2 focus:ring-[#ccff00]"
              placeholder="Seu nome"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Contato (e-mail ou telefone)</label>
            <input
              type="text"
              {...register("contact")}
              className="w-full p-3 bg-white/10 text-white rounded-md outline-none focus:ring-2 focus:ring-[#ccff00]"
              placeholder="email@exemplo.com"
            />
            {errors.contact && (
              <p className="text-red-400 text-sm mt-1">{errors.contact.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Mensagem</label>
            <textarea
              {...register("message")}
              className="w-full p-3 bg-white/10 text-white rounded-md h-32 resize-none outline-none focus:ring-2 focus:ring-[#ccff00]"
              placeholder="Escreva sua mensagem..."
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#ccff00] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>

          {success && (
            <p className="text-green-400 text-sm mt-3">Mensagem enviada com sucesso!</p>
          )}
        </form>
      </div>
    </section>
  );
}
