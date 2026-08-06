import React from 'react'

interface EditableTextProps {
    placeholder: string
    className?: string
    style?: React.CSSProperties
    multiline?: boolean
    rows?: number
}

export default function EditableText({
    placeholder,
    className,
    style,
    multiline,
    rows,
}: EditableTextProps) {
    if (multiline) {
        return (
            <textarea
                placeholder={placeholder}
                className={`bg-transparent border-none outline-none resize-none placeholder-[#333] w-full ${className ?? ''}`}
                style={style}
                rows={rows ?? 3}
            />
        )
    }
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`bg-transparent border-none outline-none placeholder-[#333] ${className ?? ''}`}
            style={style}
        />
    )
}
