"use client";

import { Card, Typography, Divider, Row, Col } from "antd";
import { CheckCircleOutlined, RocketOutlined, BarChartOutlined, EyeOutlined, TeamOutlined, BulbOutlined, GlobalOutlined, DatabaseOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const OBJECTIVE_TEXT = `
Profesionalizar la forma de hacer política, combinando un enfoque pragmático
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
    text: "Monitoreo de partidos políticos",
    icon: <EyeOutlined />
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
    text: "Identificación de temas de impacto global",
    icon: <GlobalOutlined />
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
    icon: <BarChartOutlined className="text-2xl" />,
    color: "bg-primary/10"
  },
  {
    title: "Tecnología avanzada",
    description: "Uso de herramientas inteligentes: Smart Data, inteligencia digital y análisis predictivo.",
    icon: <RocketOutlined className="text-2xl" />,
    color: "bg-secondary/10"
  },
  {
    title: "Visión estratégica",
    description: "No solo recopilamos datos, los convertimos en acciones políticas y empresariales.",
    icon: <EyeOutlined className="text-2xl" />,
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
    name: "Zazazar",
    description: "Consultora en estrategias políticas con base en Florida, EE.UU.",
    fullName: "Zazazar Consulting",
    image: "/images/aliados/zazazar.jpg",
    color: "from-primary/10 to-secondary/10"
  },
];

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-24 space-y-20">
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 group">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 transition-transform duration-200 group-hover:scale-105"
            style={{
              backgroundImage: "url('/images/consultoria-politica.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-secondary/80"></div>
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 blur-xl group-hover:blur-2xl transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-black/10 to-transparent rounded-full translate-y-1/3 -translate-x-1/3 blur-xl group-hover:blur-2xl transition-all duration-500" />
        
        {/* Elementos de diseño */}
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white rounded-tr-3xl"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white rounded-bl-3xl"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md mb-10 shadow-2xl border border-white/30 group-hover:scale-105 group-hover:from-white/30 transition-all duration-100">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-inner">
              <TeamOutlined className="text-3xl !text-white" />
            </div>
          </div>
          <Title className="!text-4xl md:!text-6xl !text-white font-bold mb-10 leading-tight">
            <span className="text-white">
              Transformando la Política
            </span>
            <br />
            <span className="text-white">
              con Datos y Estrategia
            </span>
          </Title>

          {/* Contenedor de texto elegante */}
          <div className="relative">
            {/* Sombra exterior */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            {/* Contenedor principal */}
            <div className="relative bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/40 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
              {/* Línea decorativa superior */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              
              <Paragraph className="!text-base md:!text-lg text-gray-800 leading-relaxed font-medium relative">
                {/* Marcador decorativo al inicio */}
                <span className="absolute -left-3 top-0 text-primary text-2xl">❝</span>
                {OBJECTIVE_TEXT}
                {/* Marcador decorativo al final */}
                <span className="absolute -right-3 bottom-0 text-secondary text-2xl">❞</span>
              </Paragraph>
              
              {/* Firma decorativa */}
              <div className="mt-6 pt-6 border-t border-gray-200/50">
                <div className="inline-flex items-center space-x-2">
                  <div className="h-px w-8 bg-gradient-to-r from-primary to-secondary"></div>
                  <span className="text-sm text-gray-600 font-semibold">POLIKRATOS Consulting</span>
                  <div className="h-px w-8 bg-gradient-to-r from-secondary to-primary"></div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos flotantes */}
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-primary opacity-80 animate-pulse delay-300"></div>
          </div>

          {/* Badge de calidad */}
          <div className="mt-10 inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Estrategia Política Basada en Datos</span>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Encabezado minimalista */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md mb-10 shadow-2xl border border-white/30 group-hover:scale-105 group-hover:from-white/30 transition-all duration-100">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-inner">
              <BulbOutlined className="text-3xl !text-white" />
            </div>
          </div>
          
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
              <Title className="!text-4xl md:!text-5xl text-primary font-bold tracking-tight">
                Nuestra Labor
              </Title>
              <div className="h-1 w-16 bg-primary/30 mx-auto mt-4"></div>
            </div>
            
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg border border-primary/10 shadow-sm">
              <Paragraph className="!text-lg text-gray-700 font-medium leading-relaxed">
                Servicios especializados que integran tecnología de vanguardia con análisis político estratégico
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Grid de servicios elegante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LABOR_ITEMS.map((item, index) => (
            <div key={index} className="group relative">
              {/* Línea decorativa lateral al hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-100 rounded-r"></div>
              <Card
                className="!rounded-2xl !border !border-gray-200 hover:!border-primary/30 !bg-white hover:!shadow-2xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col"
                styles={{
                  body: {
                    padding: '24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }
                }}
              >
                {/* Número discreto con más espacio */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center bg-white shadow-sm">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                </div>

                <div className="flex flex-col h-40">
                  {/* Icono elegante */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md shadow-lg flex items-center justify-center group-hover:scale-105 transition-all duration-200">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-inner">
                        <span className="text-2xl text-white">{item.icon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Texto con altura fija */}
                  <div className="flex-1 min-h-[120px] mb-4 pr-8"> {/* Espacio para el número */}
                    <Paragraph className="!text-black !mb-0 !text-base md:!text-[15px] !leading-relaxed font-medium group-hover:!text-primary transition-colors duration-300 line-clamp-4">
                      {item.text}
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>


        {/* Separador elegante */}
        <div className="pt-8 border-t border-gray-100">
          <div className="text-center">
            <div className="inline-flex items-center space-x-4">
              <div className="h-px w-20 bg-primary/20"></div>
              <span className="text-sm text-gray-500 font-medium">
                {LABOR_ITEMS.length} servicios especializados
              </span>
              <div className="h-px w-20 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* POR QUÉ ELEGIRNOS - Con efecto de transición en imagen de fondo */}
      <div className="relative rounded-3xl overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: "url('/images/elegir.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-secondary/60"></div>
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

        <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl z-10">
          {/* Encabezado */}
          <div className="text-center mb-16">
            {/* Icono con anillo decorativo */}
            <div className="relative inline-flex items-center justify-center mb-10">
              <div className="absolute w-24 h-24 rounded-full border-2 border-white/30 animate-pulse"></div>
              <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-inner">
                  <TeamOutlined className="text-2xl !text-white" />
                </div>
              </div>
            </div>

            {/* Título */}
            <div className="mb-10">
              <Title className="!text-4xl md:!text-5xl !text-white font-bold mb-4 tracking-tight">
                ¿Por qué elegirnos?
              </Title>
              <div className="w-32 h-1 bg-white/50 mx-auto rounded-full"></div>
            </div>

            {/* Descripción destacada */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                  </div>
                  <Paragraph className="!text-white !text-base md:!text-lg font-medium !mb-0 leading-relaxed">
                    Porque hoy los datos mandan. En{" "}
                    <span className="font-bold text-white drop-shadow-sm">
                      POLIKRATOS Consulting
                    </span>{" "}
                    transformamos información en estrategia con tecnología, visión y
                    acción.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de razones con diseño mejorado */}
          <Row gutter={[24, 24]}>
            {WHY_US.map((item, index) => (
              <Col xs={24} md={8} key={index}>
                <div className="group h-full">
                  <Card
                    className="!rounded-2xl !border-0 !shadow-xl hover:!shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-1"
                    styles={{
                      body: { padding: 0, height: "100%" },
                    }}
                  >
                    {/* Tarjeta con gradiente sutil */}
                    <div className="h-full flex flex-col bg-gradient-to-b from-white/95 via-white to-white/90 rounded-2xl p-8 border border-white/50">
                      {/* Encabezado de tarjeta */}
                      <div className="flex flex-col items-center mb-8">
                        {/* Contenedor de icono con anillo */}
                        <div className="relative mb-6">
                          <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                          <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                              <span className="text-primary text-xl">
                                {item.icon}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Título */}
                        <Title
                          level={4}
                          className="!text-primary !mb-0 !text-xl text-center font-bold"
                        >
                          {item.title}
                        </Title>
                      </div>

                      {/* Descripción */}
                      <div className="flex-1 mb-8">
                        <Paragraph className="!text-gray-700 !text-base !leading-relaxed text-center font-medium">
                          {item.description}
                        </Paragraph>
                      </div>

                      {/* Indicador de hover */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>

          {/* Pie de sección */}
          <div className="text-center mt-16 pt-8 border-t border-white/20">
            <div className="inline-flex items-center space-x-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40"></div>
              <span className="text-sm text-white/90 font-medium">
                {WHY_US.length} razones para confiar en nuestro expertise
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-white/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ALIADOS */}
      <div className="space-y-10">
        <div className="text-center">
  {/* Icono con diseño idéntico a Nuestra Labor */}
  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md mb-10 shadow-2xl border border-white/30 group-hover:scale-105 group-hover:from-white/30 transition-all duration-100">
    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-inner">
      <TeamOutlined className="text-3xl !text-white" />
    </div>
  </div>
  
  <div className="mb-8">
    <div className="inline-block mb-4">
      <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
      <Title className="!text-4xl md:!text-5xl text-primary font-bold tracking-tight">
        Nuestros Aliados
      </Title>
      <div className="h-1 w-16 bg-primary/30 mx-auto mt-4"></div>
    </div>
    
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg border border-primary/10 shadow-sm">
      <Paragraph className="!text-lg text-gray-700 font-medium leading-relaxed">
        "El hombre nada puede aprender, sino en virtud de lo que sabe."
        <br /><span className="text-primary font-semibold">— Aristóteles</span>
      </Paragraph>
    </div>
  </div>
</div>


        <Row gutter={[24, 24]}>
          {ALLIES.map((ally, index) => (
            <Col xs={24} md={8} key={index}>
              <div className="group h-full">
                <Card
                  className="!rounded-2xl !border-0 !shadow-lg hover:!shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-1"
                  styles={{
                    body: { 
                      padding: 0,
                      height: '100%'
                    }
                  }}
                >
                  {/* Tarjeta con fondo primary */}
                  <div className="h-full flex flex-col bg-primary rounded-2xl p-8 text-white">
                    
                    {/* Contenedor de imagen circular */}
                    <div className="flex flex-col items-center mb-8">
                      <div className="relative mb-6">
                        {/* Anillo decorativo exterior */}
                        <div className="absolute -inset-4 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Círculo para la imagen */}
                        <div className="relative w-36 h-36 rounded-full border-4 border-white/30 bg-white overflow-hidden shadow-xl group-hover:border-white/50 transition-colors duration-300">
                          {/* Overlay para mejorar contraste */}
                          <div className="absolute inset-0 bg-primary/10 z-10"></div>
                          
                          {/* Imagen que rellena completamente el círculo */}
                          <div className="relative w-full h-full">
                            <Image
                              src={ally.image}
                              alt={ally.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover object-center p-2"
                              priority={index < 2}
                            />
                          </div>
                          
                          {/* Borde decorativo interior */}
                          <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                        </div>
                      </div>

                      {/* Línea decorativa */}
                      <div className="w-20 h-1 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Nombre del aliado */}
                      <Title level={3} className="!text-white !mb-2 !text-2xl font-bold">
                        {ally.name}
                      </Title>
                    </div>

                    {/* Descripción */}
                    <div className="flex-1 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                        <Paragraph className="!text-white !text-base !leading-relaxed font-medium text-center">
                          {ally.description}
                        </Paragraph>
                      </div>
                    </div>

                    {/* Separador decorativo */}
                    <div className="pt-6 border-t border-white/30 group-hover:border-white/50 transition-colors duration-300">
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>

                      {/* Nombre completo */}
                      <div className="text-center">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                          <Paragraph className="!text-white/90 !text-sm !mb-0 font-medium italic">
                            {ally.fullName}
                          </Paragraph>
                        </div>
                      </div>
                    </div>

                    {/* Indicador de hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="text-center pt-12">
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
        <Paragraph className="!text-secondary/70 italic max-w-2xl mx-auto">
          En POLIKRATOS Consulting, combinamos el arte de la política con la ciencia de los datos para construir estrategias ganadoras.
        </Paragraph>
      </div>
    </section>
  );
}