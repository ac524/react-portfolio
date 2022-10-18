import data from "./Portfolio.data";

console.log(data);

export const Portfolio = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {data.map(({ id, title, image }) => (
                <div key={id} className="p-4 bg-gray-300">
                    { image ? <img src={image} /> : null }
                    {title}
                </div>
            ))}
        </div>
    )
}