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
              hoverColor: "primary",
              delay: "0s"
            },
            {
              icon: <FaBullseye />,
              title: "Estrategias Políticas",
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