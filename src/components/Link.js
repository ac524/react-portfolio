export const Link = ({ href, children }) => {
    return <a href={href} target="_blank" className="text-sky-500 hover:text-sky-700">{children}</a>
}