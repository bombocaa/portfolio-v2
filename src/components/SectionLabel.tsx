export default function SectionLabel({ num, label }: { num: string; label: string }) {
    return (
        <div className="section-label">
            {num !== '—' && <span className="section-label-number">{num}</span>}
            <span>{label}</span>
        </div>
    )
}
