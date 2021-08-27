import { v4 as uuidv4 } from 'uuid';
import { createAction } from "@reduxjs/toolkit";

const saveContactAction = createAction("saveConntact", (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));
const deleteContactAction = createAction("deleteConntact");
const updateFilterAction = createAction("updateFilter");

export default { saveContactAction, deleteContactAction, updateFilterAction };