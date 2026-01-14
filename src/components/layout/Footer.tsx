"use client"

import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Typography } from "antd";

const { Title } = Typography;
export default function Footer() {

  const address = "Calle 21 de Mayo #283, Edificio Kratos";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Calle+21+de+Mayo+%23283+Edificio+Kratos";
  const cellphone = "+591 77694976 - +591 77924704";
  const email = "polikratosconsulting@gmail.com";

  return (
    <footer className="bg-secondary text-white border-t border-secondary">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        
        <div className="md:w-2/3 flex flex-col md:flex-row justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <Title level={4} style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '12px' }}>
              Contacto
            </Title>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:underline hover:text-white/80 transition"
            >
              <FaMapMarkerAlt className="text-white" size={16} />
              <span>{address}</span>
            </a>
            <div className="flex items-center gap-3 text-sm">
              <FaPhoneAlt className="text-white" size={16} />
              <span>{cellphone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-white" size={16} />
              <span>{email}</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end pt-3">
          <Image
            src="/images/blanco-transparente.png"
            alt="Poli Kratos Logo"
            width={180}
            height={120}
            priority
            className="h-auto"
          />
        </div>
      </div>

      <div className="border-t border-white/20 mt-4 py-3 text-center text-xs">
        © {new Date().getFullYear()} POLIKRATOS Consulting S.R.L. Todos los derechos reservados.
      </div>
    </footer>
  );
}