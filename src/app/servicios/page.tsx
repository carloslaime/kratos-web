"use client";

import { Card, Typography, Row, Col, Divider } from "antd";
import { 
  BarChartOutlined, 
  LineChartOutlined, 
  TeamOutlined, 
  GlobalOutlined,
  RadarChartOutlined,
  BulbOutlined,
  FireOutlined,
  FundOutlined,
  AuditOutlined,
  DatabaseOutlined,
  CloudOutlined,
  UserOutlined
} from "@ant-design/icons";
import { useState } from "react";

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
  }
];

/* =======================
   ESTADÍSTICAS DESTACADAS
======================= */

const STATS = [
  {
    value: "479K",
    label: "Sesiones Analizadas",
    icon: <LineChartOutlined />,
    color: "text-primary"
  },
  {
    value: "2+",
    label: "Páginas por Sesión",
    icon: <BarChartOutlined />,
    color: "text-secondary"
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
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-24 space-y-20">
      {/* HERO SECTION */}
      <div className="text-center">
        {/* Icono principal */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md mb-10 shadow-2xl border border-white/30">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-inner">
            <TeamOutlined className="text-3xl !text-white" />
          </div>
        </div>
        
        {/* Título */}
        <div className="mb-8">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <Title className="!text-4xl md:!text-5xl text-primary font-bold tracking-tight">
              ¿Qué Hacemos?
            </Title>
            <div className="h-1 w-16 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border border-primary/10 shadow-lg">
            <Paragraph className="!text-xl text-gray-700 font-medium leading-relaxed text-center">
              Soluciones especializadas en análisis político, estrategia digital y 
              consultoría electoral basada en datos e inteligencia artificial.
            </Paragraph>
          </div>
        </div>
      </div>

			<div className="text-center mb-12">
				<div className="inline-block">
					<div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
					<Title className="!text-3xl md:!text-4xl text-primary font-bold">
						Nuestros Servicios
					</Title>
					<div className="h-1 w-16 bg-primary/30 mx-auto mt-4"></div>
				</div>
			</div>

      {/* SERVICIOS PRINCIPALES */}
      <div className="space-y-16">
        {/* Navegación de servicios */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeService === service.id
                  ? `${service.color} !text-white shadow-lg`
                  : "bg-white text-primary border border-primary/20 hover:border-primary/40"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Servicio activo destacado */}
        <div className="relative">
          {SERVICES.filter(service => service.id === activeService).map((service) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-xl">
              {/* Header del servicio */}
              <div className={`${service.color} text-white p-8 md:p-10`}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center space-x-4 mb-6 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-3xl text-white">
                        {service.icon}
                      </span>
                    </div>
                    <div>
                      <Title level={2} className="!text-white !text-3xl md:!text-4xl !mb-2">
                        {service.title}
                      </Title>
                      <Paragraph className="!text-white/90 !text-lg">
                        {service.description}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido del servicio */}
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Lista de servicios */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="h-1 w-8 bg-primary rounded-full mr-3"></div>
                      <Title level={4} className="!text-primary !mb-0">
                        Tipos de Informe
                      </Title>
                    </div>
                    <ul className="space-y-4">
                      {service.services.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detalles adicionales */}
                  <div>
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                          <DatabaseOutlined className="!text-white text-lg" />
                        </div>
                        <Title level={4} className="!text-primary !mb-0">
                          Detalles del Servicio
                        </Title>
                      </div>
                      <Paragraph className="!text-gray-700 !text-base leading-relaxed">
                        {service.details}
                      </Paragraph>
                      <div className="mt-6 pt-6 border-t border-primary/20">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                          <span className="text-sm text-primary font-medium">
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

        {/* Grid de todos los servicios 
        <div>
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
              <Title className="!text-3xl md:!text-4xl text-primary font-bold">
                Nuestros Servicios
              </Title>
              <div className="h-1 w-16 bg-primary/30 mx-auto mt-4"></div>
            </div>
          </div>

          <Row gutter={[24, 24]}>
            {SERVICES.map((service) => (
              <Col xs={24} md={12} lg={8} key={service.id}>
                <Card
                  className="!rounded-2xl !border-0 !shadow-lg hover:!shadow-2xl transition-all duration-300 h-full hover:-translate-y-1 cursor-pointer"
                  onClick={() => setActiveService(service.id)}
                  styles={{
                    body: { 
                      padding: 0,
                      height: '100%'
                    }
                  }}
                >
                  <div className={`${service.color} text-white rounded-t-2xl p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xl text-white">
                          {service.icon}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium opacity-80">SERVICIO</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <Title level={4} className="!text-primary !mb-3">
                      {service.title}
                    </Title>
                    
                    <Paragraph className="!text-gray-600 !text-sm !mb-4">
                      {service.description}
                    </Paragraph>

                    <div className="space-y-2 mb-4">
                      {service.services.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                          <span className="text-sm text-gray-700 truncate">{item}</span>
                        </div>
                      ))}
                      {service.services.length > 3 && (
                        <div className="text-primary text-sm font-medium mt-2">
                          +{service.services.length - 3} más...
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Haz clic para ver detalles</span>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-primary"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
			*/}
      </div>
      {/* CTA FINAL */}
      <div className="relative rounded-3xl overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 transition-transform duration-100 group-hover:scale-105"
            style={{
              backgroundImage: "url('/images/analisis.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-secondary/60"></div>
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 blur-xl group-hover:blur-2xl transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-black/10 to-transparent rounded-full translate-y-1/3 -translate-x-1/3 blur-xl group-hover:blur-2xl transition-all duration-500" />
        
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white rounded-tr-3xl"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white rounded-bl-3xl"></div>

        <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
              <FireOutlined className="text-2xl !text-white" />
            </div>
            
            <Title className="!text-3xl md:!text-4xl !text-white font-bold mb-6">
              ¿Listo para transformar tu estrategia?
            </Title>
            
            <Paragraph className="!text-white !text-lg font-medium mb-8">
              Contáctanos para una consulta personalizada y descubre cómo 
              nuestros servicios pueden potenciar tu proyecto político o gubernamental.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleConsultationClick}
                className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors duration-300">
                Solicitar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}