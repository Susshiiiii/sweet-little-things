// One of her real dessert photos (background removed) with the parts GSAP animates:
//   .photo-img     floats and sways        .photo-shadow  breathes with the float
//   .photo-spark   twinkling sparkles around the dessert
export default function DessertPhoto({ src, alt, eager = false, className = '' }) {
  return (
    <div className={`photo ${className}`}>
      <span className="photo-shadow" aria-hidden="true" />
      <img className="photo-img" src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} draggable="false" />
      {[0, 1, 2].map((i) => (
        <svg key={i} className={`photo-spark s${i}`} viewBox="-10 -10 20 20" aria-hidden="true">
          <path d="M0 -9 C1.5 -2 2 -1.5 9 0 C2 1.5 1.5 2 0 9 C-1.5 2 -2 1.5 -9 0 C-2 -1.5 -1.5 -2 0 -9Z" />
        </svg>
      ))}
    </div>
  );
}
