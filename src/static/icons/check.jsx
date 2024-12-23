export const CheckIcon = ({
    fill = "currentColor",
    size = 24,
    height = 24,
    width = 24,
    className = "",
    ...props
}) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            height={height}
            width={width}
            role="presentation"
            viewBox="0 0 24 24"
            className={`${className}`}
            {...props}
        >
            <polyline
                points="20 6 9 17 4 12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
        </svg>
    );
};
