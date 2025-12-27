"use client";

import { Typography, Card, Row, Col, Divider } from "antd";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock, FaBuilding } from "react-icons/fa";
import { TeamOutlined, MessageOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Title, Paragraph } = Typography;

export default function ContactoPage() {
  const contactInfo = {
    address: "Calle 21 de Mayo #2033, Casi esquina Andrés Ibáñez",
    cellphone: "+591 77694976",
    whatsapp: "+591 77694976",
    email: "polikratosconsulting@gmail.com",
    hours: "Lunes a Viernes: 8:00 AM - 6:00 PM",
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
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-24 space-y-20">
      {/* HERO SECTION */}
      <div className="text-center">
        {/* Icono principal */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md mb-10 shadow-2xl border border-white/30">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-inner">
            <MessageOutlined className="text-3xl !text-white" />
          </div>
        </div>
        
        {/* Título */}
        <div className="mb-8">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <Title className="!text-4xl md:!text-5xl text-primary font-bold tracking-tight">
              Contáctanos
            </Title>
            <div className="h-1 w-16 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border border-primary/10 shadow-lg">
            <Paragraph className="!text-xl text-gray-700 font-medium leading-relaxed text-center">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para 
              consultas, asesorías personalizadas o cualquier información que necesites.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* INFORMACIÓN DE CONTACTO */}
      <Row gutter={[24, 24]}>
        {/* Dirección */}
        <Col xs={24} md={8}>
          <Card
            className="!rounded-2xl !border-0 !shadow-lg hover:!shadow-2xl transition-all duration-300 h-full hover:-translate-y-1"
            styles={{
              body: { 
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }
            }}
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              
              <Title level={4} className="!text-primary !mb-4">
                Dirección
              </Title>
              
              <div className="flex-1 flex items-center">
                <Paragraph className="!text-gray-700 !text-base !leading-relaxed font-medium">
                  {contactInfo.address}
                </Paragraph>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-gray-500">Ubicación principal</span>
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* Teléfono y WhatsApp */}
        <Col xs={24} md={8}>
          <Card
            className="!rounded-2xl !border-0 !shadow-lg hover:!shadow-2xl transition-all duration-300 h-full hover:-translate-y-1"
            styles={{
              body: { 
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }
            }}
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                <PhoneOutlined className="text-2xl !text-white" />
              </div>
              
              <Title level={4} className="!text-primary !mb-4">
                Teléfono y WhatsApp
              </Title>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-col items-center">
                  <Paragraph className="!text-gray-700 !text-lg font-bold">
                    {contactInfo.cellphone}
                  </Paragraph>
                  <span className="text-sm text-gray-500">Disponible 24/7</span>
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Contactar por WhatsApp</span>
                  </button>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                <button
                  onClick={handlePhoneClick}
                  className="text-primary text-sm font-medium hover:text-primary/80 transition-colors duration-300"
                >
                  Llamar ahora →
                </button>
              </div>
            </div>
          </Card>
        </Col>

        {/* Email */}
        <Col xs={24} md={8}>
          <Card
            className="!rounded-2xl !border-0 !shadow-lg hover:!shadow-2xl transition-all duration-300 h-full hover:-translate-y-1"
            styles={{
              body: { 
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }
            }}
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                <MailOutlined className="text-2xl !text-white" />
              </div>
              
              <Title level={4} className="!text-primary !mb-4">
                Correo Electrónico
              </Title>
              
              <div className="flex-1 flex items-center">
                <Paragraph className="!text-gray-700 !text-base !leading-relaxed font-medium break-all">
                  {contactInfo.email}
                </Paragraph>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                <button
                  onClick={handleEmailClick}
                  className="w-full px-6 py-3 bg-primary !text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Enviar Correo
                </button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* INFORMACIÓN ADICIONAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Horario de atención */}
        <Card
          className="!rounded-2xl !border-0 !shadow-lg hover:!shadow-xl transition-all duration-300"
          styles={{
            body: { 
              padding: '32px'
            }
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <FaClock className="text-xl !text-white" />
            </div>
            <div>
              <Title level={4} className="!text-primary !mb-2">
                Horario de Atención
              </Title>
              <Paragraph className="!text-gray-700 !text-base font-medium">
                {contactInfo.hours}
              </Paragraph>
              <div className="mt-4">
                <span className="text-sm text-gray-500">
                  Sábados: 9:00 AM - 1:00 PM 
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Información de la empresa */}
        <Card
          className="!rounded-2xl !border-0 !shadow-lg hover:!shadow-xl transition-all duration-300"
          styles={{
            body: { 
              padding: '32px'
            }
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <FaBuilding className="text-xl !text-white" />
            </div>
            <div>
              <Title level={4} className="!text-primary !mb-2">
                Información Legal
              </Title>
              <Paragraph className="!text-gray-700 !text-base font-medium">
                {contactInfo.businessName}
              </Paragraph>
              <div className="mt-4">
                <span className="text-sm text-gray-500">
                  Consultoría especializada en análisis político y estrategia electoral
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* LOGO Y DESPEDIDA */}
      <div className="relative rounded-3xl overflow-hidden border border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-white to-secondary/5"></div>
        <div className="relative p-8 md:p-12 lg:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <TeamOutlined className="text-xl !text-white" />
                </div>
                <Title level={3} className="!text-primary !mb-0">
                  ¡Esperamos tu contacto!
                </Title>
              </div>
              
              <Paragraph className="!text-lg text-gray-700 font-medium">
                Nuestro equipo de expertos está listo para atenderte y 
                proporcionarte la mejor asesoría en análisis político, 
                estrategia electoral y consultoría gubernamental.
              </Paragraph>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="relative w-64 h-32">
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
          
          <Divider className="!my-8 !border-primary/20" />
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-6">
              <div className="h-px w-16 bg-primary/20"></div>
              <span className="text-sm text-gray-500 font-medium">
                Respuesta garantizada en menos de 24 horas
              </span>
              <div className="h-px w-16 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}