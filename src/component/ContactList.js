import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) =>
    state.filterName.length > 0 ? state.filterName : state.contactList
  );
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <SearchBox />
      </div>
      <div>
        {contactList.map((item, index) => (
          <ContactItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
