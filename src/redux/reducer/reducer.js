const initialState = {
  contactList: [],
  filterName: [],
};

function contactReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH_NAME":
      const textName = payload.textName.toLowerCase();
      const filteredName = state.contactList.filter((contact) =>
        contact.name.toLowerCase().includes(textName)
      );
      return {
        ...state,
        filterName: filteredName,
      };
    default:
      return { ...state };
  }
}

export default contactReducer;
