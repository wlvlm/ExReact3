function Article({ product }){
    return(
        <main>
            <article>
                <h2>{product.title}</h2>
                <p>{product.price} €</p>
            </article>
        </main>
    )
}

export default Article;      