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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full translate-y-32 -translate-x-32 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-6 md:py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                <RiStarFill className="text-primary text-sm" />
                <span className="text-xs font-semibold text-primary">Líderes en Estrategias Digitales</span>
              </div>

              <Title
                level={1}
                className="!text-2xl md:!text-3xl lg:!text-4xl text-primary font-black leading-tight"
              >
                Transformando Información en Estrategias con Tecnología, Visión y Acción
              </Title>

              <Paragraph className="!text-base md:!text-lg text-secondary/80 max-w-2xl leading-relaxed">
                Especialistas en análisis de datos dentro del entorno digital. 
								Nos enfocamos en brindar inteligencia estratégica basada en actividad digital para construir 
                campañas que conectan y convencen.
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="primary"
                  size="large"
                  onClick={handleConsultationClick}
                  className="h-10 px-6 bg-primary hover:bg-primary/90 border-none rounded-lg font-semibold text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Solicitar Asesoría
                  <RiArrowRightLine />
                </Button>
                <Button
                  size="large"
                  href="/nosotros"
                  className="h-10 px-6 bg-white text-primary border-primary hover:bg-primary/5 hover:border-primary/80 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all"
                >
                  Conocer Más
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-secondary/70">Campañas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-xs text-secondary/70">Éxito</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-secondary/70">Acompañamiento Estratégico</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/logotipo.png"
                  alt="Estrategia Política"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-12">
          <Title
            level={2}
            className="!text-2xl md:!text-3xl lg:!text-4xl text-primary font-bold mb-3"
          >
            Nuestros <span className="text-secondary">Servicios</span>
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
                  <div className="text-2xl text-primary">
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