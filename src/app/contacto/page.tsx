"use client";

import { Typography, Card, Row, Col, Divider } from "antd";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock, FaBuilding } from "react-icons/fa";
import { TeamOutlined, MessageOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Title, Paragraph } = Typography;

export default function ContactoPage() {
  const contactInfo = {
    address: "Calle 21 de Mayo #683, Esquina Andrés Ibáñez",
    cellphone: "+591 77924704",
    whatsapp: "+591 77924704",
    email: "polikratos.srl@gmail.com",
    hours: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    businessName: "Polikratos Consulting S.R.L."
  };

  const whatsappMessage = "Hola, estoy interesado en solicitar una asesoría, ¿me puede brindar más información por favor?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.cellphone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
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
                CONTACTO
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
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-12 space-y-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <PhoneOutlined className="!text-white text-sm" />
            </div>
            <Title level={2} className="!text-2xl !text-primary !mb-0 !font-bold">
              Contáctanos
            </Title>
          </div>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          
          <div className="max-w-xl mb-8">
            <div className="border-l-2 border-primary pl-4 py-2">
              <Paragraph className="!text-gray-700 !text-sm !mb-0">
                Estamos aquí para ayudarte. Ponte en contacto con nosotros para 
                consultas, asesorías personalizadas o cualquier información que necesites.
              </Paragraph>
            </div>
          </div>
        </div>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <div className="group h-full">
              <div className="h-full border border-gray-300 rounded-lg p-6 hover:border-primary/30 bg-gradient-to-b from-white to-primary/5 transition-all duration-200">
                <div className="flex justify-center mb-4">
                  <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                </div>

                <Title level={3} className="!text-primary !text-center !text-lg !mb-4 font-bold">
                  Dirección
                </Title>

                <div className="mb-6">
                  <Paragraph className="!text-gray-700 !text-sm !text-center !leading-relaxed !mb-0">
                    {contactInfo.address}
                  </Paragraph>
                </div>

                <div className="w-16 h-0.5 bg-primary/30 mx-auto my-4"></div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <div className="w-1 h-1 rounded-full bg-secondary"></div>
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                  </div>
                  <Paragraph className="!text-gray-600 !text-xs !mb-0 mt-2">
                    Ubicación principal
                  </Paragraph>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div className="group h-full">
              <div className="h-full border border-gray-300 rounded-lg p-6 hover:border-primary/30 bg-gradient-to-b from-white to-secondary/5 transition-all duration-200">
                <div className="flex justify-center mb-4">
                  <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <PhoneOutlined className="text-xl !text-white" />
                  </div>
                </div>

                <Title level={3} className="!text-primary !text-center !text-lg !mb-4 font-bold">
                  Teléfono y WhatsApp
                </Title>

                <div className="mb-6">
                  <div className="flex flex-col items-center">
                    <Paragraph className="!text-gray-700 !text-base font-bold !mb-2">
                      {contactInfo.cellphone}
                    </Paragraph>
                    <span className="text-xs text-gray-500">Disponible 24/7</span>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Contactar por WhatsApp</span>
                    </button>
                  </div>
                </div>

                <div className="w-16 h-0.5 bg-primary/30 mx-auto my-4"></div>

                <div className="text-center">
                  <button
                    onClick={handlePhoneClick}
                    className="text-primary text-xs font-medium hover:text-primary/80 transition-colors duration-300"
                  >
                    Llamar ahora →
                  </button>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div className="group h-full">
              <div className="h-full border border-gray-300 rounded-lg p-6 hover:border-primary/30 bg-gradient-to-b from-white to-primary/5 transition-all duration-200">
                <div className="flex justify-center mb-4">
                  <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <MailOutlined className="text-xl !text-white" />
                  </div>
                </div>

                <Title level={3} className="!text-primary !text-center !text-lg !mb-4 font-bold">
                  Correo Electrónico
                </Title>

                <div className="mb-6">
                  <Paragraph className="!text-gray-700 !text-sm !text-center !leading-relaxed !mb-0 break-all">
                    {contactInfo.email}
                  </Paragraph>
                </div>

                <div className="w-16 h-0.5 bg-primary/30 mx-auto my-4"></div>

                <div className="text-center">
                  <button
                    onClick={handleEmailClick}
                    className="w-full px-4 py-2 bg-primary !text-white text-sm rounded hover:bg-primary/90 transition-colors duration-300"
                  >
                    Enviar Correo
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <div className="h-full border border-gray-300 rounded-lg p-6 hover:border-primary/30 bg-white transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <FaClock className="text-lg !text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Title level={3} className="!text-primary !text-lg !mb-2 font-bold">
                      Horario de Atención
                    </Title>
                    
                    <div className="space-y-2">
                      <Paragraph className="!text-gray-700 !text-sm !mb-0 font-medium">
                        {contactInfo.hours}
                      </Paragraph>
                      <Paragraph className="!text-gray-600 !text-xs !mb-0">
                        Sábados: 9:00 AM - 1:00 PM
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="h-full border border-gray-300 rounded-lg p-6 hover:border-primary/30 bg-white transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <FaBuilding className="text-lg !text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Title level={3} className="!text-primary !text-lg !mb-2 font-bold">
                      Información Legal
                    </Title>
                    
                    <div className="space-y-2">
                      <Paragraph className="!text-gray-700 !text-sm !mb-0 font-medium">
                        {contactInfo.businessName}
                      </Paragraph>
                      <Paragraph className="!text-gray-600 !text-xs !mb-0">
                        Consultora especializada en análisis de datos, campañas digitales y asesorias.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12">
          <div className="border border-primary/20 rounded-lg p-8 bg-gradient-to-r from-primary/5 via-white to-secondary/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <TeamOutlined className="text-lg !text-white" />
                  </div>
                  <div>
                    <Title level={2} className="!text-primary !text-xl !mb-0 !font-bold">
                      ¡Esperamos tu contacto!
                    </Title>
                    <div className="w-16 h-0.5 bg-primary/30 mt-2"></div>
                  </div>
                </div>
                
                <Paragraph className="!text-gray-700 !text-sm">
                  Nuestro equipo de expertos está listo para atenderte y 
                  proporcionarte la mejor asesoría en análisis político, 
                  estrategia electoral y consultoría gubernamental.
                </Paragraph>
              </div>
              
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <div className="relative w-40 h-16">
                  <Image
                    src="/images/verde-transparente.png"
                    alt="Poli Kratos Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-primary/20 my-6"></div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <div className="w-1 h-1 rounded-full bg-secondary"></div>
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                </div>
                <Paragraph className="!text-gray-600 !text-xs !mb-0">
                  Respuesta garantizada en menos de 24 horas
                </Paragraph>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <div className="w-1 h-1 rounded-full bg-secondary"></div>
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
          <Paragraph className="!text-gray-600 !text-xs italic max-w-xl mx-auto">
            Tu consulta es el primer paso hacia una estrategia exitosa.
          </Paragraph>
        </div>
      </section>
    </>
  );
}