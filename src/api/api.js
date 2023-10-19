export const getIpInfo = async (value) => {
    const url = `https://ipinfo.io/${value}?token=${import.meta.env.VITE_TOKEN}`
    const response = await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
    return response
}