export function BookPreview({ book }) {
  const { title, listPrice, thumbnail, authors } = book;
  return (
    <article className="book-card-details">
      <section className="preview-image-container">
        <img src={thumbnail} className="book-card-thumbnail" />
        {listPrice.isOnSale && (
          <div className="book-card-details-on-sale">
            <div className="book-details-on-sale">On sale</div>
          </div>
        )}
      </section>

      <div className="book-card-details">
        <div className="book-card-title">{title}</div>
        <div className="book-card-detail">
          <span className="book-card-details-title">Author </span>
          <span className="book-card-details-info">{authors}</span>
        </div>

        <div className="book-card-detail">
          <span className="book-card-details-title"></span>
          <span className="book-card-details-info">
            {listPrice.amount.toLocaleString(undefined, {
              style: "currency",
              currency: listPrice.currencyCode,
            })}
          </span>
        </div>
      </div>
    </article>
  );
}
