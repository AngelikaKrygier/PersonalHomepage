export const getPortfolio = async () => {
    const api = `https://api.github.com/users/AngelikaKrygier/repos`;
    const response = await fetch(api);

    if (!response.ok) {
        throw new Error(response.statusText);
    };

    return await response.json();
};