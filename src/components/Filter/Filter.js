import { useSelector, useDispatch } from "react-redux";

import "./Filter.css";
import contactsActions from "../../redux/contacts/contacts-actions";
import { getFilterReducer } from "../../redux/contacts/contacts-selection";

const Filter = () => {
  const value = useSelector(getFilterReducer);
  const dispatch = useDispatch();
  const onChange = (e) =>
    dispatch(contactsActions.updateFilterAction(e.target.value));
  return (
    <label className="label">
      Find contacts by name
      <input className="input" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
