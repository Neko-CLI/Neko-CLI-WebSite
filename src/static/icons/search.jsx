export const SearchIcon = ({
    fill = "none",
    size = 24,
    height = "1em",
    width = "1em",
    className = "",
    ...props
}) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            height={size || height}
            width={size || width}
            role="presentation"
            viewBox="0 0 24 24"
            className={`${className}`}
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};