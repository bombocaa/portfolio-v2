export default function SectionLabel({ num, label }: { num: string; label: string }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}>
                {num}
            </span>
            <div className="w-6 h-px" style={{ backgroundColor: '#222' }} />
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}>
                {label}
            </span>
        </div>
    )
}
