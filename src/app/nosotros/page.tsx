"use client";

import { Card, Typography, Divider, Row, Col } from "antd";
import { CheckCircleOutlined, RocketOutlined, BarChartOutlined, EyeOutlined, TeamOutlined, BulbOutlined, GlobalOutlined, DatabaseOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const OBJECTIVE_TEXT = `
  Profesionalizar la forma de hacer campaña, combinando un enfoque pragmático
  con el uso de tecnologías de vanguardia, análisis de datos y estrategias
  inteligentes que permiten tomar decisiones acertadas, diseñar campañas más
  efectivas y conectar de manera real con la ciudadanía.
`;

const LABOR_ITEMS = [
  { 
    text: "Información estratégica en tiempo real para decisiones ganadoras",
    icon: <DatabaseOutlined />
  },
  { 
    text: "Estrategias digitales y análisis segmentario",
    icon: <GlobalOutlined />
  },
  { 
    text: "Estudios nacionales y análisis por regiones",
    icon: <BarChartOutlined />
  },
  { 
    text: "Seguimiento de campañas electorales",
    icon: <RocketOutlined />
  },
  { 
    text: "Análisis de apoyo a Ministerios y entidades gubernamentales",
    icon: <TeamOutlined />
  },
  { 
    text: "Estrategias de candidaturas y planes de gobierno",
    icon: <BulbOutlined />
  },
  { 
    text: "Análisis del impacto de actores políticos en medios",
    icon: <EyeOutlined />
  },
  { 
    text: "Medición en tiempo real de recorridos territoriales",
    icon: <DatabaseOutlined />
  },
  { 
    text: "Impacto de debates y análisis de temas vistos por diferentes audiencias",
    icon: <BarChartOutlined />
  },
  { 
    text: "Extracción de preocupaciones e intereses de la ciudadanía",
    icon: <TeamOutlined />
  },
];

const WHY_US = [
  {
    title: "Enfoque en datos",
    description: "Las decisiones estratégicas se basan en información precisa y monitoreo constante.",
    icon: <BarChartOutlined className="text-xl" />,
    color: "bg-primary/10"
  },
  {
    title: "Tecnología avanzada",
    description: "Uso de herramientas inteligentes: Smart Data, inteligencia digital y análisis predictivo.",
    icon: <RocketOutlined className="text-xl" />,
    color: "bg-secondary/10"
  },
  {
    title: "Visión estratégica",
    description: "No solo recopilamos datos, los convertimos en acciones políticas y empresariales.",
    icon: <EyeOutlined className="text-xl" />,
    color: "bg-primary/5"
  },
];

const ALLIES = [
  {
    name: "CEEP",
    description: "Fundación dedicada a la investigación de los fenómenos sociales de campo.",
    fullName: "Centro Especializado en Estudios Políticos",
    image: "/images/aliados/ceep.jpg",
    color: "from-primary/15 to-primary/5"
  },
  {
    name: "Colegio de Politólogos SC",
    description: "Institución plural de representación gremial de profesionales en Ciencia Política.",
    fullName: "Colegio Departamental de Politólogos de Santa Cruz",
    image: "/images/aliados/colegio-politologos.jpg",
    color: "from-secondary/15 to-secondary/5"
  },
  {
    name: "Golden Social Suite",
    description: "Empresa ecuatoriana de servicios de análisis de datos",
    fullName: "Golden Social Suite",
    image: "/images/aliados/goldensocial.png",
    color: "from-primary/10 to-secondary/10"
  },
];

const MEMBERS = [
  {
    name: "Bruno Mertens",
    description: "Gerente General - Consultor Digital",
    image: "/images/miembros/brunomertens.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Alexander Maldonado",
    description: "Gerente Administrativo - Consultor Político",
    image: "/images/miembros/alexandermaldonado.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Lic. Sergio Vega",
    description: "DIrector Político - Presidente del Colegio de Politólogos Santa Cruz",
    image: "/images/miembros/sergiovega.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Eduardo Mendez",
    description: "Director de Asuntos Jurídicos",
    image: "/images/miembros/eduardomendez.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Ruben Darío Alarcón",
    description: "Director de Imagen Pública",
    image: "/images/miembros/rubenalarcon.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Msg. Gustavo Villegas",
    description: "Director de Relaciones Públicas",
    image: "/images/miembros/gustavovillegas.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Lic. Raul Alfonsin",
    description: "Consultor Jurídico",
    image: "/images/miembros/raulalfonsin.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Cnl. Humberto Echalar",
    description: "Asesor Político - Ex viceministro de gobierno",
    image: "/images/miembros/humbertoechalar.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Lic. Luis Serrate",
    description: "Consultor Político",
    image: "/images/miembros/luisserrate.jpg",
    country: "/images/paises/bolivia.webp"
  },
  {
    name: "Brayan Saucedo Tardío",
    description: "Consultor Jurídico",
    image: "/images/miembros/brayansaucedo.jpg",
    country: "/images/paises/bolivia.webp"
  },
]

export default function NosotrosPage() {
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
                NOSOTROS
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
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-12 space-y-12">
        
        {/* Sección Objetivo - Dos columnas minimalista */}
        <div className="my-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Columna izquierda - Título */}
            <div className="lg:col-span-1">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Title level={2} className="!text-2xl !text-primary !mb-4 !font-bold">
                    Nuestro<br />Objetivo
                  </Title>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                </div>
                
                <div className="mt-4">
                  <div className="bg-primary p-4 rounded border border-primary/10">
                    <Paragraph className="!text-sm !text-white !mb-0 !font-medium">
                      KRATOS ES UNA CONSULTORA ESPECIALISTA EN ANÁLISIS DE DATOS
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="border-l-2 border-primary pl-6">
                <div className="space-y-4">
                  <Paragraph className="!text-gray-700 !text-base !leading-relaxed !mb-0">
                    {OBJECTIVE_TEXT}
                  </Paragraph>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <Paragraph className="!text-xs !text-gray-500 !mb-0">
                      POLIKRATOS CONSULTING
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <BulbOutlined className="text-xl !text-white" />
              </div>
            </div>
            
            <div className="mb-6">
              <Title className="!text-2xl md:!text-3xl text-primary font-bold">
                Nuestra Labor
              </Title>
              <div className="w-16 h-0.5 bg-primary/30 mx-auto mt-2"></div>
              
              <div className="max-w-xl mx-auto bg-white p-4 rounded border border-primary/10 mt-4">
                <Paragraph className="!text-sm text-gray-700">
                  Servicios especializados que integran tecnología de vanguardia con análisis estratégico
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LABOR_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`group ${
                  LABOR_ITEMS.length % 3 !== 0 && index >= LABOR_ITEMS.length - (LABOR_ITEMS.length % 3)
                    ? 'lg:col-span-3 flex justify-center'
                    : ''
                }`}
              >
                <Card
                  className="!rounded-lg !border !border-gray-200 hover:!border-primary/20 !bg-white hover:!shadow-md transition-all duration-200 h-full"
                  styles={{
                    body: {
                      padding: '16px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm">{item.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">#{index + 1}</div>
                      <Paragraph className="!text-xs md:!text-sm !text-black !mb-0 !leading-relaxed">
                        {item.text}
                      </Paragraph>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="text-center">
              <span className="text-xs text-gray-500">
                {LABOR_ITEMS.length} servicios especializados
              </span>
            </div>
          </div>
        </div>

        <div className="my-12">
          <div className="mb-10">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <TeamOutlined className="!text-white text-sm" />
              </div>
              <Title level={2} className="!text-2xl !text-WHITE !mb-0 !font-bold">
                ¿Por qué elegirnos?
              </Title>
            </div>
            <div className="w-24 h-1 bg-primary mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/elegir.jpg"
                  alt="Por qué elegirnos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="mb-8">
                  <Paragraph className="!text-gray-700 !text-base !mb-0">
                    <span className="font-bold text-primary">Porque hoy, los datos mandan.</span> En{" "}
                    <span className="font-bold text-primary">POLIKRATOS Consulting</span>{" "}
                    transformamos información en estrategia con tecnología, visión y acción. 
                    Somos la diferencia inteligente.
                  </Paragraph>
                </div>

                <div className="space-y-6">
                  {WHY_US.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                            <span className="text-white text-sm">{item.icon}</span>
                          </div>
                          <Title level={4} className="!text-primary !mb-0 !text-base font-bold">
                            {item.title}
                          </Title>
                        </div>
                        
                        <Paragraph className="!text-gray-700 !text-sm !mb-0 ml-11">
                          {item.description}
                        </Paragraph>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <div className="w-1 h-1 rounded-full bg-secondary"></div>
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="my-12">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <TeamOutlined className="!text-white text-sm" />
              </div>
              <Title level={2} className="!text-2xl !text-primary !mb-0 !font-bold">
                Instituciones Aliadas
              </Title>
            </div>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            
            <div className="max-w-xl">
              <div className="border-l-2 border-primary pl-4 py-2">
                <Paragraph className="!text-gray-700 !text-sm !mb-0 italic">
                  "El hombre nada puede aprender, sino en virtud de lo que sabe."
                </Paragraph>
                <Paragraph className="!text-primary !text-xs !mb-0 !mt-1">
                  — Aristóteles
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALLIES.map((ally, index) => (
              <div key={index} className="group h-full">
                <div className="h-full border border-gray-300 rounded-lg p-6 hover:border-primary/30 transition-all duration-200">
                  <div className="flex justify-center mb-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={ally.image}
                        alt={ally.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <Title level={3} className="!text-primary !text-center !text-lg !mb-3 font-bold">
                    {ally.name}
                  </Title>

                  <div className="mb-4">
                    <Paragraph className="!text-gray-700 !text-sm !text-center !leading-relaxed !mb-0">
                      {ally.description}
                    </Paragraph>
                  </div>

                  <div className="w-12 h-0.5 bg-primary/30 mx-auto my-4"></div>

                  <div className="text-center">
                    <Paragraph className="!text-gray-600 !text-xs !mb-0">
                      {ally.fullName}
                    </Paragraph>
                  </div>

                  <div className="flex justify-center mt-4">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <div className="w-1 h-1 rounded-full bg-secondary"></div>
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="text-center">
              <Paragraph className="!text-sm !text-gray-500 !mb-0">
                Alianzas estratégicas para resultados excepcionales
              </Paragraph>
            </div>
          </div>
        </div>

        <div className="my-12">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <GlobalOutlined className="!text-white text-sm" />
              </div>
              <Title level={2} className="!text-2xl !text-primary !mb-0 !font-bold">
                Nuestro Equipo
              </Title>
            </div>
            <div className="w-24 h-1 bg-primary mb-6"></div>
          </div>

          {/* Miembros internacionales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEMBERS.map((member, index) => (
              <div key={index} className="group">
                <div className="h-full border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-all duration-200">
                  {/* Foto del miembro */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Bandera */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-2 border-white bg-white overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image
                            src={member.country}
                            alt="Bolivia"
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nombre */}
                  <Title level={3} className="!text-primary !text-center !text-lg !mb-2 font-bold">
                    {member.name}
                  </Title>

                  {/* Cargo */}
                  <div className="mb-4">
                    <Paragraph className="!text-gray-700 !text-sm !text-center !leading-relaxed !mb-0">
                      {member.description}
                    </Paragraph>
                  </div>

                  {/* Separador */}
                  <div className="w-16 h-0.5 bg-primary/30 mx-auto my-4"></div>

                  {/* Indicador */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <div className="w-1 h-1 rounded-full bg-secondary"></div>
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-8">
          <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
          <Paragraph className="!text-secondary/70 !text-xs italic max-w-xl mx-auto">
            En POLIKRATOS Consulting, combinamos el arte de la política con la ciencia de los datos para construir estrategias ganadoras.
          </Paragraph>
        </div>
      </section>
    </>
  );
}