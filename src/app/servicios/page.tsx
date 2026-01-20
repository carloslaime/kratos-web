"use client";

import { Typography } from "antd";
import { 
  TeamOutlined, 
  GlobalOutlined,
  RadarChartOutlined,
  BulbOutlined,
  FireOutlined,
  FundOutlined,
  DatabaseOutlined,
  UserOutlined,
  SafetyOutlined
} from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";

const { Title, Paragraph } = Typography;

/* =======================
   CONTENIDO DE SERVICIOS
======================= */

const SERVICES = [
  {
    id: "diagnostico-360",
    title: "Diagnóstico 360°",
    icon: <RadarChartOutlined />,
    color: "bg-primary",
    description: "Análisis integral y multidimensional de la situación política y social",
    services: [
      "Percepción de imagen",
      "Evaluación de obras y proyectos",
      "Estrategia de Marketing Gubernamental",
      "Estudio de posicionamiento e impacto en Redes Sociales"
    ],
    details: "Evaluación completa de la situación actual mediante herramientas avanzadas de análisis."
  },
  {
    id: "medicion-medios",
    title: "Medición de Medios de Comunicación Digitales",
    icon: <GlobalOutlined />,
    color: "bg-secondary",
    description: "Monitoreo y análisis de presencia en medios digitales y tradicionales",
    services: [
      "Análisis de incidencia en medios de comunicación tradicionales",
      "Detección de temas relevantes según perfilamiento de audiencias",
      "Monitoreo 24/7 de medios digitales",
      "Reportes de impacto mediático"
    ],
    details: "Seguimiento constante de la cobertura mediática en todos los formatos."
  },
  {
    id: "predictivo-electoral",
    title: "Predictivo Electoral",
    icon: <FundOutlined />,
    color: "bg-primary",
    description: "Proyecciones y análisis predictivo para procesos electorales",
    services: [
      "Presidenciales",
      "Gobernaciones",
      "Municipales",
      "Senaturías",
      "Diputaciones"
    ],
    details: "Modelos predictivos basados en datos históricos y tendencias actuales."
  },
  {
    id: "estrategia-electoral",
    title: "Estrategia Electoral",
    icon: <BulbOutlined />,
    color: "bg-secondary",
    description: "Desarrollo de estrategias integrales para campañas electorales",
    services: [
      "Mapas de calor",
      "Perfilamiento digital",
      "Diseño, ejecución e implementación de estrategia digital para redes sociales",
      "Análisis de pauta",
      "Evaluación de tendencias en la esfera digital"
    ],
    details: "Estrategias personalizadas para maximizar el impacto en campañas electorales."
  },
  {
    id: "antropologia-digital",
    title: "Estudios de Antropología Digital",
    icon: <UserOutlined />,
    color: "bg-primary",
    description: "Análisis profundo del comportamiento digital de los usuarios",
    services: [
      "Detección de gustos y preferencias de los usuarios",
      "Investigación de afección de mercado",
      "Análisis sociodemográfico de posicionamiento digital",
      "Segmentación de audiencias digitales"
    ],
    details: "Comprensión del comportamiento humano en entornos digitales."
  },
  {
    id: "servicios-juridicos",
    title: "Servicios Jurídicos",
    icon: <SafetyOutlined />,
    color: "bg-secondary",
    description: "Asesorías Legales Especializadas",
    services: [
      "Área constitucional",
      "Área penal",
      "Área civil",
      "Área familiar",
      "Área laboral"
    ],
    details: "Brindamos asesoría jurídica especializada en diversas áreas del derecho, garantizando soluciones confiables y profesionales."
  }
];

/* =======================
        COMPONENTE
======================= */

export default function ServiciosPage() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);

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
      <section className="relative w-full h-screen md:h-[200px] overflow-hidden flex items-center justify-center">
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
          <div className="flex items-center justify-center gap-8 md:gap-12">
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
            
            <div className="h-24 w-0.5 bg-white/50"></div>
            
            <div className="logo-3d">
              <Title level={1} className="text-7xl md:text-7xl lg:text-7xl font-bold !text-white tracking-wider">
                SERVICIOS
              </Title>
            </div>
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
      <section className="mx-auto max-w-5xl px-4 py-12 space-y-16">
        {/* HERO SECTION */}
        <div className="text-center">
          {/* Título */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <TeamOutlined className="!text-white text-sm" />
              </div>
              <Title level={1} className="!text-2xl !text-primary !mb-0 !font-bold">
                ¿Qué Hacemos?
              </Title>
            </div>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            
            <div className="max-w-3xl mx-auto">
              <div className="border border-gray-200 rounded-lg">
                <Paragraph className="!text-gray-700 !text-base !leading-relaxed !mb-0 text-center">
                  Soluciones especializadas en análisis político, estrategia digital y 
                  consultoría electoral basada en datos e inteligencia artificial.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICIOS PRINCIPALES */}
        <div className="space-y-16">
          {/* Navegación de servicios */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeService === service.id
                      ? `${service.color} !text-white`
                      : "bg-white text-primary border border-primary hover:border-primary/40"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Servicio activo destacado */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {SERVICES.filter(service => service.id === activeService).map((service) => (
                <div key={service.id}>
                  {/* Header del servicio */}
                  <div className={`${service.color} text-white p-6`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg text-white">
                          {service.icon}
                        </span>
                      </div>
                      <div>
                        <Title level={2} className="!text-white !text-xl !mb-2">
                          {service.title}
                        </Title>
                        <Paragraph className="!text-white/90 !text-sm !mb-0">
                          {service.description}
                        </Paragraph>
                      </div>
                    </div>
                  </div>

                  {/* Contenido del servicio */}
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Lista de servicios */}
                      <div>
                        <ul className="space-y-3">
                          {service.services.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Detalles adicionales */}
                      <div>
                        <div className="bg-primary/5 rounded p-4 border border-primary/10">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3 flex-shrink-0">
                              <DatabaseOutlined className="!text-white text-sm" />
                            </div>
                            <Title level={4} className="!text-primary !mb-0 !text-sm">
                              Detalles del Servicio
                            </Title>
                          </div>
                          <Paragraph className="!text-gray-700 !text-sm !leading-relaxed !mb-0">
                            {service.details}
                          </Paragraph>
                          <div className="mt-4 pt-4 border-t border-primary/20">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              <span className="text-xs text-primary">
                                Análisis basado en datos en tiempo real
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/analisis.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-secondary/60"></div>
          </div>

          <div className="relative p-8 rounded-3xl overflow-hidden group z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <FireOutlined className="text-base !text-white" />
              </div>
              
              <Title className="!text-xl !text-white !font-bold !mb-4">
                ¿Listo para transformar tu estrategia?
              </Title>
              
              <Paragraph className="!text-white !text-sm !mb-6">
                Contáctanos para una consulta personalizada y descubre cómo 
                nuestros servicios pueden potenciar tu proyecto político o gubernamental.
              </Paragraph>
              
              <div className="flex justify-center">
                <button 
                  onClick={handleConsultationClick}
                  className="px-6 py-2 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors duration-200 text-sm">
                  Solicitar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}