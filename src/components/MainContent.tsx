"use client"

import { Button, Typography, Card, Avatar, Rate } from "antd";
import Image from 'next/image'
import { 
  FaChartLine, FaBullseye, FaUsers, FaChevronRight, 
  FaGavel, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { RiStarFill, RiArrowRightLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useRef } from "react";
const { Title, Paragraph } = Typography;

export default function MainContent() {

  const cellphone = "59177924704";
  const message =
    "Hola, estoy interesado en solicitar sus servicios, ¿me puede brindar más información por favor?.";

  const handleConsultationClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${cellphone}?text=${encodedMessage}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const router = useRouter();
  const handleConocerMas = () => {
    router.push("/servicios");
  }

  const testimonials = [
    {
      content: "El equipo demostró un entendimiento profundo del panorama político digital. Su estrategia fue clave para conectar con votantes jóvenes sin comprometer nuestro mensaje principal.",
      role: "Candidato Presidencial",
      country: "Bolivia",
      rating: 5
    },
    {
      content: "La precisión en el análisis de datos nos permitió ajustar nuestra campaña en tiempo real. Los resultados superaron todas las expectativas de nuestro equipo interno.",
      role: "Ex Candidato Presidencial",
      country: "Bolivia",
      rating: 5
    },
    {
      content: "Su enfoque estratégico transformó nuestra comunicación digital. Logramos aumentar nuestra visibilidad en redes sociales manteniendo una imagen coherente y profesional.",
      role: "Candidata Presidencial",
      country: "Europa",
      rating: 4
    },
    {
      content: "La combinación de análisis técnico y comprensión política fue invaluable. Nos ayudaron a navegar situaciones complejas con respuestas estratégicas efectivas.",
      role: "Asesor de Campaña Presidencial",
      country: "Sudamérica",
      rating: 5
    }
  ];

  return (
    <>
      <section className="relative w-full h-screen md:h-[550px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/partenon.jpg"
          alt="Fondo"
          fill
          className="object-cover grayscale absolute inset-0"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 wave-texture"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/70 mix-blend-multiply"></div>

        <div className="relative z-10 perspective-1000">
          <div className="logo-3d">
            <Image
              src="/images/blanco-transparente.png"
              alt="Logo centrado"
              width={300}  
              height={0}     
              style={{ height: 'auto' }} 
              priority
            />
          </div>
        </div>

        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }

          .logo-3d {
            animation: float3D 8s ease-in-out infinite;
            transform-style: preserve-3d;
          }

          @keyframes float3D {
            0%, 100% {
              transform: 
                rotateX(0deg) 
                rotateY(0deg) 
                translateY(0);
            }
            25% {
              transform: 
                rotateX(2deg) 
                rotateY(3deg) 
                translateY(-10px);
            }
            50% {
              transform: 
                rotateX(0deg) 
                rotateY(-2deg) 
                translateY(-5px);
            }
            75% {
              transform: 
                rotateX(-1deg) 
                rotateY(2deg) 
                translateY(-8px);
            }
          }

          .wave-texture {
            background: 
              radial-gradient(
                circle at 30% 30%,
                rgba(255, 255, 255, 0.1) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 70% 70%,
                rgba(255, 255, 255, 0.08) 0%,
                transparent 50%
              );
            animation: waveMove 25s ease-in-out infinite;
            opacity: 0.3;
          }

          @keyframes waveMove {
            0%, 100% {
              background-position: 0% 0%, 100% 100%;
              background-size: 200% 200%, 150% 150%;
            }
            50% {
              background-position: 100% 100%, 0% 0%;
              background-size: 150% 150%, 200% 200%;
            }
          }
        `}</style>
      </section>

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

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-white">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/tD8fayhXmuw?controls=0&modestbranding=1&rel=0&showinfo=0&fs=0"
                title="Video de presentación Poli Kratos"
                frameBorder="0"
                allow="autoplay; encrypted-media"
              />
            </div>

            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-secondary/30 animate-pulse"></div>
            <div
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary/30 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          <div className="relative">
            <div className="relative mb-4">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full animate-pulse-slow opacity-60"></div>
              <Title
                level={2}
                className="!text-2xl md:!text-3xl lg:!text-4xl font-bold pl-6"
              >
                <span className="text-primary block">Mira Cómo</span>
                <span className="text-secondary block mt-2">
                  Transformamos Datos en Impacto
                </span>
              </Title>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary/30 to-secondary/30 rounded-full"></div>
              <Paragraph className="text-secondary/80 text-sm md:text-base leading-relaxed max-w-lg">
                En este video, descubrirás nuestra metodología única que combina
                <span className="font-semibold text-primary"> análisis de datos</span>,
                <span className="font-semibold text-secondary">
                  {" "}
                  estrategia política
                </span>{" "}
                y
                <span className="font-semibold text-primary">
                  {" "}
                  tecnología digital
                </span>{" "}
                para crear campañas que realmente conectan con los votantes.
              </Paragraph>
            </div>

            <div className="flex items-center gap-3 mt-6 pl-6">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <div
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-secondary animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-xs text-secondary/60 font-medium">
                Duración: 2-3 minutos • HD
              </span>
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

        <div className="grid md:grid-cols-4 gap-12">
          {[
            {
              icon: <FaChartLine />,
              title: "Analítica Digital",
              description: "Te ayudamos a comprender a fondo el comportamiento de tus clientes.",
              hoverColor: "primary",
              delay: "0s"
            },
            {
              icon: <FaBullseye />,
              title: "Estrategias Digitales",
              description: "Soluciones integrales para candidatos, autoridades partidos e instituciones.",
              hoverColor: "primary",
              delay: "0.1s"
            },
            {
              icon: <FaUsers />,
              title: "Comunicación Política",
              description: "Discursos poderosos, narrativas coherentes y campañas que conectan emocionalmente con tu audiencia.",
              hoverColor: "primary",
              delay: "0.2s"
            },
            {
              icon: <FaGavel />,
              title: "Servicios Jurídicos",
              description: "Brindamos asesorías legales en diversas áreas: constitucional, penal, civil, familiar y laboral.",
              hoverColor: "primary",
              delay: "0.2s"
            }
          ].map((service, index) => (
            <Card
              key={index}
              hoverable
              className={`
                !border-0 !rounded-xl !shadow-lg
                hover:!shadow-2xl transition-all duration-500
                group relative overflow-hidden
                transform hover:-translate-y-2
                hover:border hover:border-${service.hoverColor}/20
              `}
              style={{ animationDelay: service.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-${service.hoverColor}/30 transition-all duration-500`}></div>
              
              <div className="relative flex flex-col items-center text-center space-y-4 p-4">
                <div className="relative">
                  <div className={`
                    absolute -inset-4 rounded-full 
                    border-2 border-${service.hoverColor}/20 
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-500 
                    overflow-hidden
                  `}>
                    <div className={`
                      absolute inset-0 
                      bg-primary
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500
                    `}></div>
                  </div>
                  
                  <div className="relative w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-10 overflow-hidden">
                    <div className={`absolute inset-0 bg-${service.hoverColor}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`text-4xl text-${service.hoverColor} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      {service.icon}
                    </div>
                    
                    <div className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-${service.hoverColor}/20 transition-all duration-500`}></div>
                  </div>
                  
                  {/* Puntos decorativos */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-secondary/50 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{transitionDelay: '0.1s'}}></div>
                </div>
                
                <Title level={4} className={`!text-xl !text-primary font-bold group-hover:text-${service.hoverColor} transition-colors duration-500 relative`}>
                  {service.title}
                  <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-${service.hoverColor} group-hover:w-12 transition-all duration-500`}></div>
                </Title>
                
                <Paragraph className="!text-secondary/80 !leading-relaxed !text-sm group-hover:text-secondary/90 transition-colors duration-300 transform translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                  {service.description}
                </Paragraph>
                
                <button
                  className={`flex items-center gap-1 text-sm font-semibold text-${service.hoverColor} p-2 rounded-lg group-hover:bg-${service.hoverColor}/10 transition-all duration-500 group-hover:gap-3 group-hover:px-4`}
                  onClick={handleConocerMas}
                >
                  <span className="relative">
                    Conocer más
                    <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-${service.hoverColor} group-hover:w-full transition-all duration-500`}></span>
                  </span>
                  <FaChevronRight className="transition-all duration-500 group-hover:translate-x-1 text-xs group-hover:text-base" />
                </button>
              </div>
              
              {/* Efecto de partículas al fondo */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="bg-primary !text-white rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                    <span className="text-sm font-bold text-white group-hover:tracking-wide transition-all duration-300">HISTORIA DE ÉXITO</span>
                  </div>
                </div>
                
                {/* Título con efecto */}
                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-white to-secondary rounded-full animate-pulse-slow"></div>
                  <Title level={2} className="!text-3xl md:!text-4xl !text-white font-bold pl-6">
                    <span className="block">Resultados que</span>
                    <span className="block !text-white mt-2 animate-float-slow">Superan Expectativas</span>
                  </Title>
                </div>
                
                <Paragraph className="!text-l !text-white/90 leading-relaxed pl-6">
                  En nuestros primeros años de operación, hemos demostrado que la estrategia 
                  correcta puede generar <span className="font-bold text-white">impacto inmediato</span>, 
                  incluso para empresas en crecimiento.
                </Paragraph>
                
                <div className="grid grid-cols-2 gap-4 pl-6">
                  {[
                    { value: "+85%", label: "Crecimiento Digital", color: "white", progress: 85, delay: "0s" },
                    { value: "+72%", label: "Interacción", color: "white", progress: 72, delay: "0.2s" },
                    { value: "+68%", label: "Reconocimiento", color: "white", progress: 68, delay: "0.4s" },
                    { value: "92%", label: "Satisfacción", color: "white", progress: 92, delay: "0.6s" }
                  ].map((metric, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                      style={{animationDelay: metric.delay}}
                    >
                      <div className="flex items-end justify-between mb-3">
                        <div className={`text-3xl font-bold text-${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                          {metric.value}
                        </div>
                        <RiArrowRightLine className={`text-${metric.color} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`} />
                      </div>
                      <div className="text-sm text-white/80 mb-2">{metric.label}</div>
                      <div className="relative h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className={`absolute top-0 left-0 h-full bg-${metric.color} rounded-full transition-all duration-1000`}
                          style={{ width: '0%' }}
                          ref={(el) => {
                            if (el) {
                              setTimeout(() => {
                                el.style.width = `${metric.progress}%`;
                              }, index * 200);
                            }
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-white rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="/images/img4.jpg"
                        alt="Proyecto exitoso"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="absolute top-6 right-6">
                      <div className="bg-white text-primary px-4 py-2 rounded-full shadow-lg font-bold text-sm animate-bounce-slow">
                        +85% CRECIMIENTO
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-sm p-6">
                      <div className="text-primary">
                        <div className="font-bold text-lg mb-1">Campaña en Elecciones Nacionales Exitosa</div>
                        <div className="text-sm text-secondary/80 mb-3">Resultados en tiempo récord</div>
                        <div className="flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>6 meses de ejecución</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <span>ROI positivo desde mes 1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-secondary animate-float"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-white animate-float" style={{animationDelay: '1s'}}></div>
                </div>
                
                <div className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">¿Tu proyecto siguiente?</div>
                      <div className="text-white/70 text-sm">Podemos replicar estos resultados</div>
                    </div>
                    <button
                      onClick={handleConsultationClick}
                      className="bg-white !text-primary px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all duration-300 group-hover:scale-105"
                    >
                      Conversemos
                      <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">        
        <Title
            level={2}
            className="!text-2xl md:!text-3xl lg:!text-4xl !text-primary font-bold mb-3"
          >
            Voces de Liderazgo Político
        </Title>
        
        <p className="text-base md:text-lg text-secondary/70 max-w-2xl mx-auto">
          Testimonios anónimos de figuras políticas que han transformado su comunicación digital
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={`
              !border !border-gray-200 !rounded-xl !shadow-sm
              hover:!shadow-xl hover:!border-primary/20 
              transition-all duration-500
              group relative overflow-hidden
              h-full
            `}
            hoverable
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
              <FaQuoteLeft size={24} />
            </div>

            <div className="relative z-10">
              <div className="mb-4">
                <Rate 
                  disabled 
                  defaultValue={testimonial.rating} 
                  character={<RiStarFill className="text-sm" />}
                  className="text-secondary [&>.ant-rate-star-full>div>span>svg]:text-secondary"
                />
              </div>

              <div className="mb-6">
                <p className="text-secondary/80 italic text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="absolute bottom-15 left-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                <FaQuoteRight size={20} />
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center gap-3">
                  <Avatar 
                    size="large"
                    className={`
                      bg-gradient-to-r from-primary to-secondary
                      text-white font-bold
                      group-hover:scale-110 transition-transform duration-500
                    `}
                  >
                    {testimonial.role.charAt(0)}
                  </Avatar>
                  
                  <div>
                    <div className="text-sm font-semibold text-primary">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-secondary/60">
                      {testimonial.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500"></div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <div className="inline-flex items-center gap-2 text-xs text-secondary/50 bg-secondary/5 px-4 py-2 rounded-full">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span>Los testimonios se presentan de forma anónima para proteger la privacidad y confidencialidad de nuestros clientes.</span>
        </div>
      </div>
    </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <Image
              src="/images/partenon.jpg"
              alt="Fondo"
              fill
              className="object-cover grayscale"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center p-8 md:p-10">
              <Title level={1} className="text-3xl md:text-4xl lg:text-4xl font-bold !text-white mb-4">
                PAÍSES EN LOS QUE ESTAMOS PRESENTES
              </Title>
            </div>

            <div className="px-6 md:px-10 pb-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                
                <div className="flex flex-col items-center group flex-1">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-lg mb-4 flag-animation">
                    <Image
                      src="/images/paises/bolivia.webp"
                      alt="Bolivia"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 128px) 100vw, 128px"
                    />
                  </div>
                  <span className="text-white font-bold text-xl">Bolivia</span>
                </div>

                <div className="hidden md:block">
                  <div className="w-px h-24 bg-white/30"></div>
                </div>

                <div className="flex flex-col items-center group flex-1">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-lg mb-4 flag-animation">
                    <Image
                      src="/images/paises/peru.png"
                      alt="Perú"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 128px) 100vw, 128px"
                    />
                  </div>
                  <span className="text-white font-bold text-xl">Perú</span>
                </div>

                <div className="hidden md:block">
                  <div className="w-px h-24 bg-white/30"></div>
                </div>

                <div className="flex flex-col items-center group flex-1">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-lg mb-4 flag-animation animation-delay-300">
                    <Image
                      src="/images/paises/argentina.webp"
                      alt="Argentina"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 128px) 100vw, 128px"
                    />
                  </div>
                  <span className="text-white font-bold text-xl">Argentina</span>
                </div>

                <div className="hidden md:block">
                  <div className="w-px h-24 bg-white/30"></div>
                </div>

                <div className="flex flex-col items-center group flex-1">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-lg mb-4 flag-animation animation-delay-600">
                    <Image
                      src="/images/paises/brasil.webp"
                      alt="Brasil"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 128px) 100vw, 128px"
                    />
                  </div>
                  <span className="text-white font-bold text-xl">Brasil</span>
                </div>

                <div className="hidden md:block">
                  <div className="w-px h-24 bg-white/30"></div>
                </div>

                {/* España */}
                <div className="flex flex-col items-center group flex-1">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-lg mb-4 flag-animation animation-delay-900">
                    <Image
                      src="/images/paises/españa.png"
                      alt="España"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 128px) 100vw, 128px"
                    />
                  </div>
                  <span className="text-white font-bold text-xl">España</span>
                </div>

              </div>
            </div>
            <div className="text-center p-5 md:p-5">
              <Paragraph className="text-2xl md:text-2xl !text-white/90 max-w-2xl mx-auto">
                Campañas Digitales en múltiples países de Latinoamérica y Europa
              </Paragraph>
            </div>
          </div>
        </div>

        <style jsx>{`
          .flag-animation {
            animation: floatFlag 6s ease-in-out infinite;
          }

          @keyframes floatFlag {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-12px) rotate(3deg);
            }
          }

          .animation-delay-300 {
            animation-delay: 0.3s;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
          }

          .animation-delay-900 {
            animation-delay: 0.9s;
          }

          .group:hover .flag-animation {
            animation: pulseFlag 0.6s ease-in-out;
            box-shadow: 0 20px 40px rgba(255, 255, 255, 0.25);
          }

          @keyframes pulseFlag {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
          }
        `}</style>
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