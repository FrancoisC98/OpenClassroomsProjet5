function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => {
        return (
          <span key={index} className="tag">
            {tag}
          </span>
        );
      })}
    </div>
  );
}

export default Tags;
