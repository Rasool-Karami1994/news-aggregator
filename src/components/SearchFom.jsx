const SearchForm = () => {
  return (
    <div className="searchForm-container">
      <input placeholder="search content"></input>
      <select name="source" id="sources">
        <option value="guardian">Guardian</option>
        <option value="newApi">New Api</option>
        <option value="newsCred">News Cred</option>
      </select>
    </div>
  );
};

export default SearchForm;
