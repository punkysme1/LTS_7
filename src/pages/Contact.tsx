import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Hubungi Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary-500" />
              <a href="mailto:info@manuskripsampurnan.org" className="hover:underline">info@manuskripsampurnan.org</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary-500" />
              <span>+62 123 4567 890</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
              <span>Jalan Kebudayaan No. 123, Kota Sampurnan, 14045, Indonesia</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
           <h2 className="text-2xl font-semibold mb-4">Lokasi Kami</h2>
           <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-500">
             {/* In a real app, you would embed a Google Map or similar here */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664264635832!2d106.82496411534305!3d-6.175392395529157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1678886994103!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi"
                className="rounded-md"
              ></iframe>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;