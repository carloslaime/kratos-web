"use client"

import { Button, Typography, Card, Statistic } from "antd";
import Image from 'next/image'
import { FaChartLine, FaBullseye, FaUsers, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { RiStarFill, RiArrowRightLine } from "react-icons/ri";

const { Title, Paragraph } = Typography;

export default function MainContent() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-48 -translate-x-48 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <RiStarFill className="text-primary" />
                <span className="text-sm font-semibold text-primary">Líderes en Estrategia Política</span>
              </div>

              <Title
                level={1}
                className="!text-3xl md:!text-3xl lg:!text-5xl text-primary font-black leading-tight"
              >
                Transformando Información en Estrategias con Tecnología, Visión y Acción
              </Title>

              <Paragraph className="!text-lg md:!text-xl text-secondary/80 max-w-2xl leading-relaxed">
                Especialistas en análisis de datos dentro del entorno digital. 
								Nos enfocamos en brindar inteligencia estratégica basada en actividad digital para construir 
                campañas que conectan y convencen.
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="primary"
                  size="large"
                  href="/contacto"
                  className="h-12 px-8 bg-primary hover:bg-primary/90 border-none rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Solicitar Asesoría
                  <RiArrowRightLine />
                </Button>
                <Button
                  size="large"
                  href="/nosotros"
                  className="h-12 px-8 bg-white text-primary border-primary hover:bg-primary/5 hover:border-primary/80 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all"
                >
                  Conocer Más
                </Button>
              </div>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-secondary/70">Campañas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-secondary/70">Éxito</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-secondary/70">Acompañamiento Estratégico</div>
                </div>
              </div>
            </div>

            {/* Imagen del lado derecho con efecto flotante */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/logotipo.png"
                  alt="Estrategia Política"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios con diseño de tarjetas elegantes */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <Title
            level={2}
            className="!text-3xl md:!text-4xl lg:!text-5xl text-primary font-bold mb-4"
          >
            Nuestros <span className="text-secondary">Servicios</span>
          </Title>
          <Paragraph className="!text-lg md:!text-xl text-secondary/70 max-w-2xl mx-auto">
            Soluciones integrales diseñadas para cada etapa de tu campaña política
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="
                !border-0 !rounded-2xl !shadow-lg
                hover:!shadow-2xl transition-all duration-300
                bg-gradient-to-br ${service.color}
                group
              "
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-3xl text-primary">
                    {service.icon}
                  </div>
                </div>
                
                <Title level={4} className="!text-2xl !text-primary font-bold">
                  {service.title}
                </Title>
                
                <Paragraph className="!text-secondary/80 !leading-relaxed">
                  {service.description}
                </Paragraph>
                
                <Button
                  type="link"
                  className="!text-primary !font-semibold !p-0 flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Conocer más
                  <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Caso de éxito / Resultados */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="bg-gradient-to-r from-primary/10 via-white/20 to-secondary/10 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-8 bg-secondary rounded-full" />
                <span className="text-secondary font-semibold">Caso de Éxito</span>
              </div>
              
              <Title level={2} className="!text-3xl md:!text-4xl lg:!text-5xl text-primary font-bold mb-6">
                Resultados que <span className="text-secondary">Hablan por Sí Solos</span>
              </Title>
              
              <Paragraph className="!text-lg text-secondary/80 mb-8 leading-relaxed">
                En la última campaña nacional, logramos incrementar la intención de voto 
                en un 42% mediante estrategias digitales personalizadas y análisis de datos 
                en tiempo real.
              </Paragraph>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-primary">Alcance Digital</span>
                    <span className="font-bold text-secondary">+250%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full w-3/4" />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-primary">Engagement</span>
                    <span className="font-bold text-secondary">+180%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full w-2/3" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/img4.jpg"
                  alt="Resultados de campaña"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Testimonio flotante 
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <FaQuoteLeft className="text-primary/30 text-3xl mb-3" />
                <Paragraph className="!text-secondary/80 italic mb-3">
                  "La estrategia implementada transformó completamente nuestra campaña."
                </Paragraph>
                <div className="font-semibold text-primary">Juan Pérez</div>
                <div className="text-sm text-secondary/70">Candidato Municipal</div>
              </div>
							*/}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32" />
          
          <div className="relative z-10">
            <Title level={2} className="!text-3xl md:!text-4xl !text-white font-bold mb-4">
              ¿Listo para Transformar tu Campaña?
            </Title>
            
            <Paragraph className="!text-lg !text-white mb-8 max-w-2xl mx-auto">
              Agenda una consulta y descubre cómo podemos llevar tu estrategia 
              política al siguiente nivel.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="large"
                href="/contacto"
                className="h-12 px-8 bg-white text-primary hover:bg-white/90 border-none rounded-lg font-semibold text-lg shadow-lg"
              >
                Solicitar Consulta
              </Button>
              <Button
                size="large"
                href="/nosotros"
                className="h-12 px-8 bg-transparent text-white hover:bg-white/10 border-2 border-white rounded-lg font-semibold text-lg"
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