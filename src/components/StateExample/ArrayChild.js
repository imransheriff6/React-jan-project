function Child({information}) {
    return (
        <div className="arr-child">
            <h1>{information.username}</h1>
            <p>{information.email}</p>
        </div>
    )
}
export default Child