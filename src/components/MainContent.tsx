"use client"

import { Button, Typography, Card } from "antd";
import Image from 'next/image'
import { FaChartLine, FaBullseye, FaUsers, FaChevronRight } from "react-icons/fa";
import { RiStarFill, RiArrowRightLine } from "react-icons/ri";

const { Title, Paragraph } = Typography;

export default function MainContent() {

  const cellphone = "59177694976";
  const message =
    "Hola, estoy interesado en solicitar una asesoría, ¿me puede brindar más información por favor?.";

  const handleConsultationClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${cellphone}?text=${encodedMessage}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-6 md:py-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full shadow-sm group hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-primary/10 animate-ping" style={{animationDuration: '3s'}}></div>
                  <RiStarFill className="text-white text-sm relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">Líderes en Estrategias Digitales</span>
              </div>

              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full animate-pulse-slow"></div>
                <Title
                  level={1}
                  className="!text-2xl md:!text-3xl lg:!text-4xl font-bold leading-tight pl-6"
                >
                  <span className="text-primary block">Transformando Información</span>
                  <span className="text-secondary block mt-2">en Estrategias Digitales</span>
                  <span className="text-primary block mt-2 text-lg md:text-xl font-semibold opacity-90">
                    Tecnología • Visión • Acción
                  </span>
                </Title>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary/40 to-secondary/40 rounded-full"></div>
                <Paragraph className="!text-xs md:!text-sm text-secondary/85 leading-snug max-w-lg">
                  <span className="font-semibold text-primary">Especialistas en análisis de datos</span> dentro del entorno digital. 
                  Creamos inteligencia estratégica basada en actividad digital para construir 
                  <span className="relative">
                    <span className="relative z-10"> campañas que generan impacto</span>
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-secondary/40 rounded-full"></span>
                  </span>.
                </Paragraph>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  onClick={handleConsultationClick}
                  className="group relative h-11 px-7 bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-secondary border-0 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative text-white">Solicitar Asesoría</span>
                  <RiArrowRightLine className="relative text-white group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => window.location.href = '/nosotros'}
                  className="group h-11 px-7 bg-white/90 hover:bg-white border border-primary/30 hover:border-primary rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative text-primary">Conocer Más</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6">
                {[
                  { value: "+10", label: "Campañas Exitosas", color: "primary" },
                  { value: "95%", label: "Tasa de Éxito", color: "secondary" },
                  { value: "24/7", label: "Soporte Estratégico", color: "primary" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-secondary/5 border border-gray-200 hover:border-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`text-2xl font-black text-${stat.color} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-${stat.color}/30 rounded-full group-hover:w-3/4 transition-all duration-300`}></div>
                  </div>
                ))}
              </div>

              <div className="absolute -right-2 top-10 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse-slow opacity-50"></div>
              <div className="absolute right-4 bottom-10 w-2 h-2 rounded-full bg-secondary/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>

            <div className="relative h-[350px] flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute -inset-4 animate-spin-slow">
                  <div className="w-full h-full rounded-full border-2 border-primary/30 relative">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-secondary"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(92px)`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -inset-2 animate-spin-slow-reverse">
                  <div className="w-full h-full rounded-full border border-secondary/40" />
                </div>

                <div className="relative w-full h-full">
                  <div className="absolute inset-0 animate-image-rotate-front">
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/50 bg-white">
                      <div className="absolute inset-0 bg-white" />
                      <Image
                        src="/images/logotipo.png"
                        alt="Logotipo Poli Kratos"
                        width={320}
                        height={320}
                        className="w-full h-full object-contain p-6 relative z-0"
                        priority
                      />
                      <div className="absolute inset-0 rounded-full" />
                    </div>
                  </div>

                  <div className="absolute inset-0 animate-image-rotate-back">
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-10 mix-blend-overlay" />
                      <Image
                        src="/images/blanco-bg-verde.jpg"
                        alt="Estrategia Digital"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover relative z-0"
                        priority
                      />
                      <div className="absolute inset-0 rounded-full ring-4 ring-white/30" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 animate-pulse-slow" />

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg animate-shadow-pulse" />

                <div className="absolute -top-2 -right-2 animate-bounce-slow">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
                <div className="absolute -bottom-2 -left-2 animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                </div>
                <div className="absolute -top-2 -left-2 animate-bounce-slow" style={{animationDelay: '1s'}}>
                  <RiStarFill className="text-primary text-xs" />
                </div>
                <div className="absolute -bottom-2 -right-2 animate-bounce-slow" style={{animationDelay: '1.5s'}}>
                  <RiStarFill className="text-secondary text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-12">
          <Title
            level={2}
            className="!text-2xl md:!text-3xl lg:!text-4xl !text-primary font-bold mb-3"
          >
            Nuestros Servicios
          </Title>
          <Paragraph className="!text-base md:!text-lg text-secondary/70 max-w-2xl mx-auto">
            Soluciones integrales diseñadas para cada etapa de tu campaña política
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaChartLine />,
              title: "Analítica Digital",
              description: "Te ayudamos a comprender a fondo el comportamiento de tus clientes.",
              color: "from-primary/20 to-primary/5"
            },
            {
              icon: <FaBullseye />,
              title: "Estrategias Políticas",
              description: "Soluciones integrales para candidatos, autoridades partidos e instituciones.",
              color: "from-secondary/20 to-secondary/5"
            },
            {
              icon: <FaUsers />,
              title: "Comunicación Política",
              description: "Discursos poderosos, narrativas coherentes y campañas que conectan emocionalmente con tu audiencia.",
              color: "from-primary/20 to-secondary/5"
            }
          ].map((service, index) => (
            <Card
              key={index}
              hoverable
              className={`
                !border-0 !rounded-xl !shadow-lg
                hover:!shadow-xl transition-all duration-300
                bg-gradient-to-br ${service.color}
                group
              `}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="text-5xl text-primary">
                    {service.icon}
                  </div>
                </div>
                
                <Title level={4} className="!text-xl !text-primary font-bold">
                  {service.title}
                </Title>
                
                <Paragraph className="!text-secondary/80 !leading-relaxed !text-sm">
                  {service.description}
                </Paragraph>
                
                <Button
                  type="link"
                  className="!text-primary !font-semibold !p-0 flex items-center gap-1 group-hover:gap-2 transition-all !text-sm"
                >
                  Conocer más
                  <FaChevronRight className="transition-transform group-hover:translate-x-1 text-xs" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="bg-gradient-to-r from-primary/10 via-white/20 to-secondary/10 rounded-2xl p-6 md:p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-6 bg-secondary rounded-full" />
                <span className="text-secondary font-semibold text-sm">Caso de Éxito</span>
              </div>
              
              <Title level={2} className="!text-2xl md:!text-3xl lg:!text-4xl text-primary font-bold mb-4">
                Resultados que <span className="text-secondary">Hablan por Sí Solos</span>
              </Title>
              
              <Paragraph className="!text-base text-secondary/80 mb-6 leading-relaxed">
                En la última campaña nacional, logramos incrementar la intención de voto 
                en un 42% mediante estrategias digitales personalizadas y análisis de datos 
                en tiempo real.
              </Paragraph>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-primary text-sm">Alcance Digital</span>
                    <span className="font-bold text-secondary">+250%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full w-3/4" />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-primary text-sm">Engagement</span>
                    <span className="font-bold text-secondary">+180%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full w-2/3" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/img4.jpg"
                  alt="Resultados de campaña"
                  width={550}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
          
          <div className="relative z-10">
            <Title level={2} className="!text-2xl md:!text-3xl !text-white font-bold mb-3">
              ¿Listo para Transformar tu Campaña?
            </Title>
            
            <Paragraph className="!text-base !text-white mb-6 max-w-2xl mx-auto">
              Agenda una consulta y descubre cómo podemos llevar tu estrategia 
              política al siguiente nivel.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="large"
                onClick={handleConsultationClick}
                className="h-10 px-6 bg-white text-primary hover:bg-white/90 border-none rounded-lg font-semibold text-base shadow-lg"
              >
                Solicitar Consulta
              </Button>
              <Button
                size="large"
                href="/nosotros"
                className="h-10 px-6 bg-transparent text-white hover:bg-white/10 border-2 border-white rounded-lg font-semibold text-base"
              >
                Ver Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}