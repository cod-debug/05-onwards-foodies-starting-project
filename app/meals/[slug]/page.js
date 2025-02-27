export default function MealsSlugPage({ params }){
    return (
        <main>
            <h1>Meal Slug Page</h1>
            <p>{ params.slug }</p>
        </main>
    )
}