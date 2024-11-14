async function fetchGitHubStats() {
    try {
        const username = 'Fazzyt';
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposResponse.json();

        document.getElementById('total-repos').textContent = userData.public_repos;
        document.getElementById('total-stars').textContent = userData.total_private_repos || 0;

        const languages = {};
        for (let repo of repos) {
            if (repo.language) {
                languages[repo.language] = (languages[repo.language] || 0) + 1;
            }
        }
        
        const sortedLanguages = Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([lang]) => lang);
        
        const languageContainer = document.getElementById('top-languages');
        languageContainer.textContent = sortedLanguages.join(', ');

    } catch (error) {
        console.error('Ошибка загрузки статистики:', error);
    }
}

fetchGitHubStats();