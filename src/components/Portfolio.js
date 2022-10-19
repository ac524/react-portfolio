import { Link } from "./Link";
import data from "./Portfolio.data";

export const Portfolio = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-3" id="portfolio">
            {data.map(({ id, title, image, featured, repoUrl, deployUrl }) => (
                <div key={id} className={`${featured ? "col-span-2 ": ""} bg-gray-200`}>
                    { image ? <img src={image} className="w-full" /> : null }
                    <div className="p-4">
                        <h3>{title}</h3>
                        <div>
                            <Link href={deployUrl}>Live Page</Link>
                            <Link href={repoUrl}>Github</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}