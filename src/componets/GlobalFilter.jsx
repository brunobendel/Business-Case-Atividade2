import PropTypes from 'prop-types';

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="flex justify-center mb-4">
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Procure na tabela..."
        className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
      />
    </span>
  );
};

GlobalFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default GlobalFilter;
