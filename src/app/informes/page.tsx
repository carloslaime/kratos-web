"use client";

import { Typography, Card, Row, Col, Modal } from "antd";
import { FilePdfOutlined, EyeOutlined, DownloadOutlined, FileOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const DOCS = [
  {
    "name": "Informe de Análisis General de Candidatos Presidenciales",
    "path": "/docs/informes/analisis-candidatos.pdf",
  },
  {
    "name": "Informe de Análisis Edman Lara",
    "path": "/docs/informes/edman-lara.pdf",
  },
  {
    "name": "Estudio Digital Estratificado y Metodológico Segunda Vuelta",
    "path": "/docs/informes/estudio-digital.pdf",
  },
  {
    "name": "Foro Macroeconómico en El Alto",
    "path": "/docs/informes/foro-macroeconomico.pdf",
  },
  {
    "name": "Informe Debate Vicepresidencial",
    "path": "/docs/informes/informe-debate-vicepresidencial.pdf",
  },
  {
    "name": "Informe Integral del Ecosistema Digital",
    "path": "/docs/informes/informe-ecosistema-digital.pdf",
  },
];

export default function InformesPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenPdf = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
    setModalVisible(true);
  };

  const handleOpenInNewTab = (pdfPath: string) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPdf(null);
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
								INFORMES
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

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12 space-y-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <FilePdfOutlined className="!text-white text-sm" />
            </div>
            <Title level={2} className="!text-2xl !text-primary !mb-0 !font-bold">
              Informes y Documentos
            </Title>
          </div>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          
          <div className="max-w-xl mb-8">
            <div className="border-l-2 border-primary pl-4 py-2">
              <Paragraph className="!text-gray-700 !text-sm !mb-0">
                Accede a nuestros informes de análisis político, estudios digitales 
                y documentos especializados. Visualiza directamente en el navegador.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Contador de documentos */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <Paragraph className="!text-gray-600 !text-sm !mb-0">
              {DOCS.length} documentos disponibles
            </Paragraph>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <Paragraph className="!text-gray-600 !text-sm !mb-0">
              Solo visualización
            </Paragraph>
          </div>
        </div>

        <Row gutter={[16, 16]}>
          {DOCS.map((doc, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <div className="group h-full">
                <div className="h-full border border-gray-300 rounded-lg p-6 hover:border-primary/30 bg-gradient-to-b from-white to-primary/5 transition-all duration-200 hover:shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">{index + 1}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <div className="w-1 h-1 rounded-full bg-secondary"></div>
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="relative h-[180px] overflow-hidden rounded border bg-gray-100">
										<iframe
											src={`${doc.path}#page=1&zoom=90&toolbar=0&navpanes=0&scrollbar=0`}
											className="w-full h-[260px] -mt-10 pointer-events-none"
										/>
									</div>

                  <div className="mb-6">
                    <Title
											level={4}
											className="!text-primary !text-center !text-base !mb-0 font-bold line-clamp-2 min-h-[48px]"
										>
											{doc.name}
										</Title>
                  </div>

                  {/* Separador */}
                  <div className="w-12 h-0.5 bg-primary/30 mx-auto my-4"></div>

                  {/* Botones de acción */}
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => handleOpenPdf(doc.path)}
                      className="px-4 py-2 bg-primary !text-white text-xs rounded hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2"
                    >
                      <EyeOutlined />
                      <span>Ver PDF</span>
                    </button>
                    
                    <button
                      onClick={() => handleOpenInNewTab(doc.path)}
                      className="px-4 py-2 border border-primary text-primary text-xs rounded hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                    >
                      <DownloadOutlined />
                      <span>Abrir</span>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Nota informativa */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <FileOutlined className="text-xs !text-white" />
              </div>
              <div>
                <Paragraph className="!text-blue-800 !text-sm !mb-1 font-medium">
                  Nota importante
                </Paragraph>
                <Paragraph className="!text-blue-700 !text-xs !mb-0">
                  Los PDFs se muestran utilizando el visor nativo de tu navegador.
                  Si tienes problemas para visualizar, asegúrate de tener un navegador actualizado.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        title={
          <div className="flex items-center gap-2">
            <FilePdfOutlined className="text-red-500" />
            <span className="text-primary">Vista previa del documento</span>
          </div>
        }
        open={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width="90%"
        style={{ maxWidth: '1200px', top: 20 }}
        styles={{
					body: {
						height: 'calc(100vh - 200px)',
						padding: 0,
					},
				}}
      >
        {modalVisible &&selectedPdf && (
          <div className="w-full h-full">
            <div className="flex items-center justify-between p-4 border-b bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm text-gray-600">Visualizando documento</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.open(selectedPdf, '_blank', 'noopener,noreferrer')}
                  className="px-3 py-1 bg-primary !text-white text-xs rounded hover:bg-primary/90 transition-colors duration-300 flex items-center gap-1"
                >
                  <DownloadOutlined />
                  <span>Abrir en nueva pestaña</span>
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-3 py-1 border border-gray-300 text-gray-600 text-xs rounded hover:bg-gray-100 transition-colors duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
            
            {/* Visor de PDF - Usando embed para mejor compatibilidad */}
            <div className="w-full h-[calc(100%-60px)]">
              <embed
                src={selectedPdf}
                type="application/pdf"
                className="w-full h-full"
                style={{ minHeight: '500px' }}
              />
            </div>
            
            {/* Mensaje de ayuda */}
            <div className="p-3 border-t bg-gray-50">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <Paragraph className="!text-gray-500 !text-xs !mb-0">
                  Usa las herramientas del navegador para zoom y navegación
                </Paragraph>
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}