import PropTypes from 'prop-types';
import Input from 'components/base/Input.styled';
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';


const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilter);

  const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value));

  // const handleFilterChange = e => console.log(e.target.value);

  return (
  <>
    <span>Find contacts by name</span>
    <label>
      <Input type="text" name="filter" onChange={handleFilterChange} />
    </label>
  </>)
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
