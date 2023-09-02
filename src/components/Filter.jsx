export const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div>
        <p>Status:</p>
        <select>
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incompletas</option>
        </select>
      </div>

      <div>
        <p>Ordem alfabética:</p>
        <button>Asc</button>
        <button>Descr</button>
      </div>

    </div>
  );
};

export default Filter;
