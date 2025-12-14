import React from 'react';
import { Mail, Phone, MapPin, User, Building, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row relative min-h-[calc(100vh-80px)]">
      
      {/* Background decoration for desktop */}
      <div className="fixed top-0 left-0 w-1/2 h-full z-0 pointer-events-none hidden lg:block opacity-20 mix-blend-screen">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#101622]"></div>
         <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZgR0CS7rePefOYQCUclLpj0UEvEJN8rI9xbp4EGewl0KkKm4y7s2AKaOzC3jY5xjCoR5AU2JxFI-rmPj3zVyZa4n_I9hvJwVHZRK8Yp49xde1BWKidufq17UCr3U7sWFFt0QoIx4uAC7bNa7ghPtAYIAgtAy3xldRUrniFGNSUki4toySvNj8WQ5HETzumTBcdsAzva547TDSzhJ0QbliP_t5uu5rwCpNmBIdK36VGZngr7MeDDI8WI37qo3yGHmlDPtQ-iEg1TMX"
            alt="Abstract background"
         />
      </div>

      {/* Left Column: Info */}
      <div className="w-full lg:w-1/2 flex flex-col p-6 lg:p-16 xl:p-24 relative z-10">
        <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Suporte Especializado
                </div>
                <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
                    Fale com nossos especialistas
                </h1>
                <p className="text-gray-400 text-lg font-normal leading-relaxed">
                    Transforme a gestão da sua joalheria hoje. Preencha o formulário para uma demonstração personalizada ou entre em contato direto.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <ContactInfoItem 
                    icon={<Mail />} 
                    label="E-mail Comercial" 
                    value="contato@nexsiles.com" 
                />
                <ContactInfoItem 
                    icon={<Phone />} 
                    label="WhatsApp / Telefone" 
                    value="+55 (11) 99999-0000" 
                />
                <div className="md:col-span-2">
                     <ContactInfoItem 
                        icon={<MapPin />} 
                        label="Escritório Central" 
                        value="Av. Paulista, 1000 - Bela Vista, São Paulo - SP" 
                    />
                </div>
            </div>

            {/* Map Preview */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[#282e39] group">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN9dCYA_NZDPxUmRHuQ_Pl_Y1u-uTEg2PlVQBc60vga7sgZk_gYZddaf_Y1pg4uGVvQGDTMT8zAaQysbZSfx4ZVh8G2MKalWg0MSNDQy8_6sgogCgDU-G5u_pFmSix050FjbKelYQ3WvCzofs92TMVruDyRSjSD7fhodRvWzVz65-ACMTZtIQ0LKzADGbmm7QiZWhcrfShkc8jxuqe7cW6EO-h55ysOZnSukR1nZ9A8wDsauvPy0eu1ip8oc3DPJX7s7bem5p183tH"
                    alt="Map"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101622]/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <MapPin className="text-primary drop-shadow-lg" size={20} />
                    <span className="text-sm font-bold text-white drop-shadow-md">Ver no mapa</span>
                </div>
            </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="w-full lg:w-1/2 bg-[#161920] relative flex flex-col justify-center p-6 lg:p-16 xl:p-24">
        {/* Gradient Border Separator */}
        <div className="absolute top-0 left-0 w-full h-px lg:w-px lg:h-full bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>

        <div className="max-w-lg mx-auto w-full relative z-10">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-white">Envie uma mensagem</h3>
                    <p className="text-sm text-gray-400">Nossa equipe responderá em até 2 horas comerciais.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex flex-col flex-1">
                        <span className="text-sm font-medium pb-2 text-gray-300">Nome Completo</span>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                <User size={20} />
                            </span>
                            <input type="text" placeholder="Seu nome" className="w-full rounded-lg border border-[#3b4354] bg-[#1c1f27] h-12 pl-12 pr-4 text-base text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" />
                        </div>
                    </label>
                    <label className="flex flex-col flex-1">
                        <span className="text-sm font-medium pb-2 text-gray-300">Empresa</span>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                <Building size={20} />
                            </span>
                            <input type="text" placeholder="Nome da Joalheria" className="w-full rounded-lg border border-[#3b4354] bg-[#1c1f27] h-12 pl-12 pr-4 text-base text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" />
                        </div>
                    </label>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex flex-col flex-1">
                        <span className="text-sm font-medium pb-2 text-gray-300">E-mail Corporativo</span>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                <Mail size={20} />
                            </span>
                            <input type="email" placeholder="nome@empresa.com" className="w-full rounded-lg border border-[#3b4354] bg-[#1c1f27] h-12 pl-12 pr-4 text-base text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" />
                        </div>
                    </label>
                    <label className="flex flex-col flex-1">
                        <span className="text-sm font-medium pb-2 text-gray-300">Telefone</span>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                <Phone size={20} />
                            </span>
                            <input type="tel" placeholder="(00) 00000-0000" className="w-full rounded-lg border border-[#3b4354] bg-[#1c1f27] h-12 pl-12 pr-4 text-base text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" />
                        </div>
                    </label>
                </div>

                <label className="flex flex-col w-full">
                    <span className="text-sm font-medium pb-2 text-gray-300">Como podemos ajudar?</span>
                    <textarea placeholder="Descreva sua necessidade de gestão de estoque..." className="w-full rounded-lg border border-[#3b4354] bg-[#1c1f27] min-h-[140px] p-4 text-base text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600 resize-y"></textarea>
                </label>

                <button type="button" className="mt-2 w-full h-12 bg-primary hover:bg-primary-hover active:scale-[0.99] transition-all rounded-lg text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                    <span>Enviar Mensagem</span>
                    <Send size={20} />
                </button>
                
                <p className="text-xs text-center text-gray-600 mt-2">
                    Ao enviar, você concorda com nossa <a href="#" className="underline hover:text-primary">Política de Privacidade</a>.
                </p>
            </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1c1f27] border border-[#282e39] hover:border-primary/50 transition-colors group">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-400">{label}</p>
            <p className="text-base font-bold text-white">{value}</p>
        </div>
    </div>
);

export default Contact;