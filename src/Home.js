import Article from './Article.js'
import { lastThreeArticles } from './Article.js';

console.log(lastThreeArticles)

function Home(){
    return(
        <main className='App mainContainer'>
            <h2>Les trois derniers articles :</h2>
            {lastThreeArticles.map(product => (
                <Article product={product}/>
            ))}
        </main>
    )
}

export default Home;