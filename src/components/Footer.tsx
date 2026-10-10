export default function Footer() {
    return (
        <footer className="px-10 py-7 flex items-center justify-between" style={{ borderTop: '1px solid #141414' }}>
            <span
                className="text-[11px] tracking-[0.18em] uppercase"
                style={{ color: '#2a2a2a', fontFamily: 'DM Sans, sans-serif', maxWidth: '320px' }}
            >
                Jasper Raul Z. Deguito — Front End Developer
            </span>
            <span className="text-[11px] tracking-[0.18em] uppercase" style={{ color: '#1e1e1e', fontFamily: 'DM Sans, sans-serif' }}>
                © 2025
            </span>
        </footer>
    )
}
