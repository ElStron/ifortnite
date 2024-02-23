import { useEffect, useState } from "preact/hooks";

export default function IslandSections({lang, page = 1}: {lang: string, page?: number}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {

        setLoading(true);

        fetch(`/api/creative.json?lang=${lang}&page=${currentPage}&i=1`)
        .then((res) => res.json())
        .then((data) => {
            setData(prevData => prevData.concat(data));
        })
        .catch((error) => {
            setLoading(false);
            setError(true);
        }).finally(() => {
            setLoading(false);
        })
    }, [currentPage, lang]);
    return (
        <> 
            {data.length > 0 && data.map((item: any) => (
                <div className="w-full mx-auto p-6 bg-gray-800 rounded-2xl" key={item.category.label}> 
                    <h2 class="text-lg font-black text-gray-900 dark:text-white my-4 italic uppercase">{item.category.label}</h2>
                    <ol class="w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4: lg:grid-cols-5 gap-6">
                        {item.islands.map((island: any) => (
                            <li className="island" key={island.code}>
                                <a href={lang === 'es' ? `/es/creative/${island.islandCode}` : `/creative/${island.islandCode}` }>
                                    <article class="w-full relative">
                                        <header>
                                            <picture>
                                                <img  alt={island.title} loading="lazy" width="100%" height="100%" class="w-full rounded-2xl aspect-[3/2]" src={island.imgSrc} />
                                            </picture>
                                        </header>
                                        <footer class="w-full absolute bottom-0 left-0 bg-gradient-to-t	from-gray-900 to-transparent">
                                            <h3 class="text-sm font-nomal text-slate-200 my-2 mx-4">{island.title}</h3>
                                        </footer>
                                    </article>
                                </a>
                            </li>
                        ))} 
                    </ol>
                    
                </div>
            ))}
            
            {Error && <div className="error">Error</div>}
            {loading  && <div className="loading">Loading...</div>}
            <button onClick={() => setCurrentPage(currentPage + 1)} >
                Load More
            </button>
        </>
    )
}