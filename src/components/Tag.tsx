export default function Tag({ label }: { label: string }) {
    return (
        <span
            className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1"
            style={{
                border: '1px solid #222',
                color: '#555',
                fontFamily: 'DM Sans, sans-serif',
            }}
        >
            {label}
        </span>
    )
}
