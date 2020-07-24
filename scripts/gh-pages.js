var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/JoshsBlog',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/JoshGlasson/JoshsBlog',
        user: {
            name: 'Josh Glasson',
            email: 'Josh.Glasson@tesco.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)

