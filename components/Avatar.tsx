export const Avatar = ({ src, alt = '' }) => {
    return (
        <img
            className="h-8 w-8 rounded-full border border-gray-200"
            src={src}
            alt={alt}
        />
    );
};
