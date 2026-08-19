import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Waves,
  Trees,
  PawPrint,
  ArrowUpDown,
  BookOpen,
  Sun,
  Martini,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Bed,
  Ruler,
  Car,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Covalia — Departamentos en Temozón Norte, Mérida | Desarrolladora Calume",
  description:
    "Covalia: 56 nuevos departamentos de 1 y 2 recámaras en Temozón Norte, Mérida. Áreas verdes, alberca, salón social y más. Entrega marzo 2028. Un desarrollo de Desarrolladora Calume.",
  openGraph: {
    title: "Covalia — Temozón Norte, Mérida",
    description: "56 nuevos departamentos de 1 y 2 recámaras en Temozón Norte, Mérida, Yucatán.",
    images: ["/renders/hero-acceso.jpg"],
  },
};

const AMENIDADES = [
  { icon: Trees, label: "Áreas verdes" },
  { icon: Sun, label: "Área zen" },
  { icon: ShieldCheck, label: "Caseta de vigilancia" },
  { icon: PawPrint, label: "Pet park" },
  { icon: ArrowUpDown, label: "Dos elevadores" },
  { icon: BookOpen, label: "Spots de lectura" },
  { icon: Martini, label: "Salón social (30 pax)" },
  { icon: Waves, label: "Alberca" },
];

const MODELOS = [
  {
    nombre: "Modelo A",
    recamaras: "1 recámara",
    m2: "51 m²",
    descripcion: "Sala, comedor, cocina, área de lavado, medio baño de visitas y recámara con baño vestidor.",
    planta: "/plantas/modelo-a.jpg",
  },
  {
    nombre: "Modelo B1",
    recamaras: "2 recámaras",
    m2: "80 m²",
    descripcion: "Sala, comedor, cocina, área de lavado, baño, recámara principal con baño vestidor y recámara secundaria.",
    planta: "/plantas/modelo-b1.jpg",
  },
  {
    nombre: "Modelo B2",
    recamaras: "2 recámaras",
    m2: "62 m²",
    descripcion: "Sala, comedor, cocina, área de lavado, medio baño, recámara principal con baño y recámara flex.",
    planta: "/plantas/modelo-b2.jpg",
  },
];

const CERCANIAS = [
  "Parque Industrial",
  "Universidad Autónoma de Yucatán",
  "The Harbor Mall",
  "Liverpool",
  "Universidad Marista",
  "Universidad Mayab",
  "City Center",
  "Hospital Faro del Mayab",
  "La Isla",
  "Cabo Norte",
];

const EQUIPAMIENTO = [
  "Muros a 2.8 m de altura en todas las plantas",
  "Piso de cerámica en todos los departamentos",
  "Puertas de madera de piso a techo",
  "Cancelería color natural a línea de 3 pulgadas",
  "Cocina con meseta de granito y gavetas inferiores",
  "Parrilla eléctrica y tarja de acero inoxidable",
];

const OTROS_PROYECTOS = [
  "Baura",
  "Aluma",
  "Moira",
  "Kopó",
  "Aleria",
  "Muretto",
  "Agua Nativa",
  "Canova",
  "Magnolia",
  "Sieben",
];

const GALERIA = [
  { src: "/renders/fachada-principal.jpg", alt: "Fachada principal de Covalia" },
  { src: "/renders/andador-principal.jpg", alt: "Andador principal y estacionamiento techado de Covalia" },
  { src: "/renders/vista-aerea.jpg", alt: "Vista aérea de Covalia en Temozón Norte" },
  { src: "/renders/area-social.jpg", alt: "Área social de Covalia" },
];

export default function CovaliaPage() {
  return (
    <div id="top" className="bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] flex items-end">
        <Image
          src="/renders/hero-acceso.jpg"
          alt="Acceso principal de Covalia en Temozón Norte, Mérida"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-covalia-green via-covalia-green/60 to-covalia-green/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 w-full">
          <p className="text-covalia-ochre text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Temozón Norte · Mérida, Yucatán
          </p>
          <h1 className="text-white font-serif font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight">
            Covalia
          </h1>
          <p className="text-white/90 text-lg sm:text-xl mt-3 max-w-xl font-serif italic">
            56 departamentos, una nueva forma de vivir.
          </p>
          <p className="text-white/70 mt-4 max-w-xl">
            Haz realidad tu sueño de vivir en una de las ciudades más seguras y encantadoras de
            México. Mérida te espera con su magia, crecimiento constante y calidad de vida.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#contacto" className="btn-covalia px-6 py-3 text-base">
              Habla con un asesor
            </a>
            <a
              href="#modelos"
              className="btn px-6 py-3 text-base bg-white/10 text-white border border-white/30 hover:bg-white/20"
            >
              Ver modelos
            </a>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-3xl border-t border-white/20 pt-6">
            <div>
              <dt className="text-white/60 text-xs uppercase tracking-wide">Apartado desde</dt>
              <dd className="text-white text-xl font-semibold mt-1">$20,000 MXN</dd>
            </div>
            <div>
              <dt className="text-white/60 text-xs uppercase tracking-wide">Departamentos</dt>
              <dd className="text-white text-xl font-semibold mt-1">56 unidades</dd>
            </div>
            <div>
              <dt className="text-white/60 text-xs uppercase tracking-wide">Recámaras</dt>
              <dd className="text-white text-xl font-semibold mt-1">1 y 2</dd>
            </div>
            <div>
              <dt className="text-white/60 text-xs uppercase tracking-wide">Entrega</dt>
              <dd className="text-white text-xl font-semibold mt-1">Marzo 2028</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SOBRE EL PROYECTO */}
      <section id="proyecto" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-xl2 overflow-hidden shadow-popover">
            <Image
              src="/renders/fachada-principal.jpg"
              alt="Fachada principal de Covalia"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-covalia-ochre text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              El proyecto
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covalia-green leading-tight">
              Un nuevo estándar de vida en Temozón Norte
            </h2>
            <p className="text-gray-600 mt-5 leading-relaxed">
              Mérida es considerada una de las ciudades con mayor plusvalía y crecimiento del país,
              y Temozón Norte es hoy una de sus zonas más buscadas. Covalia reúne 56 departamentos
              de 1 y 2 recámaras pensados para quienes buscan un espacio propio con acabados de
              calidad, amenidades reales y una ubicación estratégica.
            </p>
            <ul className="mt-8 space-y-3">
              {EQUIPAMIENTO.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={18} className="text-covalia-ochre flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AMENIDADES */}
      <section id="amenidades" className="scroll-mt-20 bg-covalia-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-covalia-ochreDark text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Amenidades
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covalia-green leading-tight mb-8">
                Todo lo que necesitas, sin salir de casa
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {AMENIDADES.map(({ icon: Icon, label }) => (
                  <div key={label} className="card flex items-center gap-3 p-4">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-covalia-green/5 text-covalia-green flex-shrink-0">
                      <Icon size={20} />
                    </span>
                    <span className="text-sm font-medium text-gray-800">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-xl2 overflow-hidden shadow-popover">
              <Image
                src="/renders/area-social.jpg"
                alt="Área social de Covalia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <p className="text-covalia-ochre text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          Galería
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covalia-green leading-tight text-center mb-12">
          Conoce Covalia
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {GALERIA.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] rounded-xl2 overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* MODELOS */}
      <section id="modelos" className="scroll-mt-20 bg-covalia-green py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-covalia-ochre text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-center">
            Modelos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight text-center mb-4">
            Un espacio para cada forma de vivir
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Modelos disponibles en PB, nivel 1, 2 y 3 (incluye balcón). Precios y disponibilidad
            sujetos a cambio — consulta con un asesor para información actualizada.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {MODELOS.map((m) => (
              <div key={m.nombre} className="bg-white rounded-xl2 overflow-hidden flex flex-col">
                <div className="relative aspect-[6/5] bg-gray-50">
                  <Image src={m.planta} alt={`Planta arquitectónica del ${m.nombre}`} fill className="object-contain p-2" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-bold text-covalia-green">{m.nombre}</h3>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Bed size={16} /> {m.recamaras}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler size={16} /> {m.m2}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed flex-1">{m.descripcion}</p>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-5 pt-5 border-t border-gray-100">
                    <Car size={16} /> Estacionamiento techado
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-covalia-ochre text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Ubicación
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covalia-green leading-tight mb-5">
              En el corazón de Temozón Norte
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Covalia está sobre Calle 40 Diagonal, a minutos de los puntos que ya forman parte de
              tu día a día: centros comerciales, universidades, hospitales y las principales
              vialidades de la ciudad.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {CERCANIAS.map((lugar) => (
                <div key={lugar} className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin size={15} className="text-covalia-ochre flex-shrink-0" />
                  {lugar}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl2 overflow-hidden shadow-popover aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px]">
            <iframe
              title="Ubicación de Covalia en Temozón Norte, Mérida"
              src="https://www.google.com/maps?q=Calle+40+Diagonal,+Temoz%C3%B3n+Norte,+97302+M%C3%A9rida,+Yuc.&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ESQUEMA DE PAGO */}
      <section className="bg-covalia-cream py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-covalia-ochreDark text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Esquema de pago
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covalia-green leading-tight mb-14">
            Invertir en Covalia es simple
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { paso: "01", titulo: "Apartado", detalle: "$20,000 MXN para separar tu unidad." },
              { paso: "02", titulo: "Enganche", detalle: "25% del valor total del departamento." },
              { paso: "03", titulo: "Saldo", detalle: "El resto contra entrega, a la firma de escritura." },
            ].map((p) => (
              <div key={p.paso} className="card p-8">
                <div className="text-covalia-ochre text-4xl font-serif font-extrabold">{p.paso}</div>
                <h3 className="text-lg font-bold text-covalia-green mt-3">{p.titulo}</h3>
                <p className="text-sm text-gray-500 mt-2">{p.detalle}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">Pregunta por las promociones vigentes con tu asesor.</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-covalia-ochre text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Contacto
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-covalia-green leading-tight mb-5">
              Agenda tu cita en sala de ventas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Un asesor te acompaña en todo el proceso: disponibilidad, precios, financiamiento y
              visita al departamento muestra.
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/529992332340"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-covalia-green transition-colors"
              >
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-covalia-green/5 text-covalia-green">
                  <MessageCircle size={18} />
                </span>
                999 233 2340
              </a>
              <a
                href="mailto:ventas.calume@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-covalia-green transition-colors"
              >
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-covalia-green/5 text-covalia-green">
                  <Mail size={18} />
                </span>
                ventas.calume@gmail.com
              </a>
              <a
                href="tel:+529992332340"
                className="flex items-center gap-3 text-gray-700 hover:text-covalia-green transition-colors"
              >
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-covalia-green/5 text-covalia-green">
                  <Phone size={18} />
                </span>
                +52 999 233 2340
              </a>
            </div>
          </div>
          <div className="card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-covalia-greenDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div>
              <span className="font-serif text-2xl text-white">Covalia</span>
              <p className="text-white/50 text-sm mt-4 max-w-xs">Temozón Norte, Mérida, Yucatán.</p>
              <div className="mt-6">
                <p className="text-white/40 text-xs uppercase tracking-wide mb-2">Un proyecto de:</p>
                <Image
                  src="/logo/calume-logo.png"
                  alt="Calume Desarrollos"
                  width={160}
                  height={42}
                  className="h-7 w-auto brightness-0 invert opacity-90"
                />
              </div>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wide mb-3">
                Otros proyectos Calume
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {OTROS_PROYECTOS.map((p) => (
                  <span key={p} className="text-white/60 text-sm">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Desarrolladora Calume · www.calume.mx</p>
            <p>Las imágenes son renders ilustrativos, sujetos a cambios en el proyecto ejecutivo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
