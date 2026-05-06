export default function ImagePlaceholder({ label, className = '', gradient = 'from-amber-900 to-stone-800' }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
      <span className="text-white/40 text-xs font-lato text-center px-3 leading-relaxed">{label}</span>
    </div>
  )
}
