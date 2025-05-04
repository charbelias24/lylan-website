import React, { useEffect, useRef } from 'react';

// Declare global types for Google Maps
declare global {
  interface Window {
    initMap: () => void;
    google: typeof google;
  }
}

const About: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.error('Google Maps API key is not defined');
      return;
    }

    // Check if script already exists
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      // If script exists, just initialize the map
      window.initMap();
      return;
    }

    // Create and load the script
    scriptRef.current = document.createElement('script');
    scriptRef.current.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    scriptRef.current.async = true;
    scriptRef.current.defer = true;
    document.head.appendChild(scriptRef.current);

    // Initialize map when script is loaded
    window.initMap = () => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 45.7640, lng: 4.8357 }, // Center of Lyon
          zoom: 13,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        // Add markers for both locations
        const locations = [
          {
            position: { lat: 45.7673, lng: 4.8339 }, // Lyon 6ème coordinates
            title: "Lylan Poké - Lyon 6ème",
            address: "18 cours Vitton, 69006 LYON"
          },
          {
            position: { lat: 45.7502, lng: 4.8284 }, // Lyon 2ème coordinates
            title: "Lylan Poké - Lyon 2ème",
            address: "37 rue Sainte-Hélène, 69002 LYON"
          }
        ];

        locations.forEach(location => {
          const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `<div class="p-2">
              <h3 class="font-bold">${location.title}</h3>
              <p>${location.address}</p>
            </div>`
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
      }
    };

    return () => {
      // Cleanup function
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
      // Remove the initMap function
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <section id="about" className="section relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-primary opacity-10 rounded-full"></div>
      <div className="absolute -left-16 -top-16 w-48 h-48 bg-secondary opacity-10 rounded-full"></div>

      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="section-title">À Propos</h2>
        <p className="text-lg md:text-l leading-relaxed mb-8">
          Chez Ly-Lan, tous les poke bowls sont préparés sous vos yeux à la minute pour préserver la qualité et la fraicheur de nos ingrédients.
          Nous privilégions l'origine des matières premières en utilisant dans la mesure du possible des produits issus d'une agriculture biologique, de circuits courts ou labellisés. Outre l'importance du manger sain et bon, limiter notre impact écologique est primordial pour nous.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-center">Nos Restaurants</h3>
        <div
          ref={mapRef}
          className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden"
        ></div>
      </div>
    </section>
  );
};

export default About;
