export function FooterMap() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-amber-200/30 shadow-sm h-40 sm:h-48 md:h-56 group bg-linear-to-br from-amber-50 via-white to-emerald-50">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29614.741819890332!2d-102.30824960000001!3d21.9021312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef5eefe826d1%3A0xce7b8b83f94d417e!2sMi%20Cocina!5e0!3m2!1ses-419!2smx!4v1773175431002!5m2!1ses-419!2smx"
        title="Mapa de ubicacion de Mi Cocina"
        className="h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
