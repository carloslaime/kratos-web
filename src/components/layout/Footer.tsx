"use client"

import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Typography } from "antd";

const { Title } = Typography;
export default function Footer() {

  const address = "Calle 21 de Mayo #2033, Casi esquina Andrés Ibáñez";
  const cellphone = "+591 77694976";
  const email = "polikratosconsulting@gmail.com";

  return (
    <footer className="bg-secondary text-white border-t border-secondary">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        
        <div className="md:w-2/3 flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <Title level={4} style={{ color: '#FFFFFF' }} className="mb-4">
              Contacto
            </Title>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              <span>{cellphone}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              <span>{email}</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end pt-5">
          <Image
            src="/images/blanco-transparente.png"
            alt="Poli Kratos Logo"
            width={250}
            height={170}
            priority
          />
        </div>
      </div>

      <div className="border-t border-white/20 mt-6 py-4 text-center text-sm">
        © {new Date().getFullYear()} Poli Kratos Consulting S.R.L. Todos los derechos reservados.
      </div>
    </footer>
  );
}
