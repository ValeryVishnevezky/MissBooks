const { useState, useEffect } = React;
const { Link } = ReactRouterDOM

export function BookFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case "number":
      case "range":
        value = +value
        break;

      case "checkbox":
        value = target.checked
        break;
    }
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  const { title, price, isOnSale } = filterByToEdit

  return (
    <section className="book-filter">
      <div className="book-filter-title">
      <h2>Filter Our Books</h2>
      </div>
      <div className="book-filter-form">
      <form>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={title}
          className="book-filter-input-title"
          type="text"
          name="title"
          id="title"
        />
        <label htmlFor="price">Price</label>
        <input
          onChange={handleChange}
          value={price || ''}
          className="book-filter-input-price"
          type="number"
          name="price"
          id="price"
        />
        <label htmlFor="isOnSale">On Sale</label>
        <input
          onChange={handleChange}
          value={isOnSale}
          className="book-filter-input-isOnSale"
          type="checkbox"
          name="isOnSale"
          id="isOnSale"
        />
        <button>Submit</button>
        <button className="book-filter-link-add-book"><Link to={`/book/add`}>Add book</Link></button>
      </form>
      </div>
    </section>
  )
}
