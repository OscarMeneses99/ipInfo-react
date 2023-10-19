
const IpInfoDisplay = ({ ipInfo }) => {
    if (!ipInfo) {
        return null;
    }

    const {
        city,
        country,
        hostname,
        ip,
        loc,
        org,
        postal,
        region,
        timezone,
    } = ipInfo;

    return (
        <article className="mt-8">
            <section className="border p-5 rounded-lg bg-white shadow-xl">
                <h2 className="text-2xl font-semibold text-center">Información de IP:</h2>
                <ul className="mt-1 list-none">
                    <li>
                        <span className="font-semibold">Dirección IP: </span>
                        <span className="text-gray-800">{ip}</span>
                    </li>
                    <li>
                        <span className="font-semibold">Ciudad: </span>
                        <span className="text-gray-800">{city}</span>
                    </li>
                    <li>
                        <span className="font-semibold">País: </span>
                        <span className="text-gray-800">{country}</span>
                    </li>
                    <li>
                        <span className="font-semibold">Proveedor de Internet: </span>
                        <span className="text-gray-800">{org}</span>
                    </li>
                    <li>
                        <span className="font-semibold">Código Postal: </span>
                        <span className="text-gray-800">{postal}</span>
                    </li>
                    <li>
                        <span className="font-semibold">Región: </span>
                        <span className="text-gray-800">{region}</span>
                    </li>
                    <li>
                        <span className="font-semibold">Zona Horaria: </span>
                        <span className="text-gray-800">{timezone}</span>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default IpInfoDisplay;
