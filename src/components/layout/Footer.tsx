"use client"

import Title from "antd/es/typography/Title";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const address = "Calle 21 de Mayo #683, Edificio Kratos";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Calle+21+de+Mayo+683";
  const cellphone = "+591 77924704";
  const email = "polikratos.srl@gmail.com";
  
  const socialLinks = {
    instagram: "https://www.instagram.com/polikratos_consulting?igsh=bTM3ODN1Zzk4Y3cy&utm_source=qr",
    facebook: "https://www.facebook.com/share/16o5QGznqs/?mibextid=LQQJ4d",
    tiktok: "https://www.tiktok.com/@polikratosconsulting?_r=1&_t=ZM-937YKgBCssF"
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          <div className="flex-1">
            <Title level={5} className="!text-white text-lg font-semibold mb-4 pb-2 border-b border-white/20">Contacto</Title>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0" size={14} />
                <div>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" 
                     className="text-sm hover:underline block">
                    {address}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white flex-shrink-0" size={14} />
                <div>
                  <div className="text-sm">{cellphone}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white flex-shrink-0" size={14} />
                <a href={`mailto:${email}`} className="text-sm hover:underline">
                  {email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Title level={5} className="!text-white text-lg font-semibold mb-4 pb-2 border-b border-white/20">Redes Sociales</Title>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                   className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <FaInstagram className="text-white text-xl" />
                  </div>
                  <span className="text-xs text-white/80">Instagram</span>
                </a>
                
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                   className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <FaFacebook className="text-white text-xl" />
                  </div>
                  <span className="text-xs text-white/80">Facebook</span>
                </a>
                
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"
                   className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <FaTiktok className="text-white text-xl" />
                  </div>
                  <span className="text-xs text-white/80">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-end">
            <div className="mb-4">
              <Image
                src="/images/blanco-transparente.png"
                alt="Poli Kratos Logo"
                width={200}
                height={90}
                className="h-auto"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} POLIKRATOS Consulting S.R.L. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}