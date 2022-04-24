function createContact(first_name, last_name,address, city,state,zip , phone_no, email_id){

    const contact = new Map();

    contact.set("first_name", first_name);
    contact.set("last_name", last_name);
    contact.set("address", address);
    contact.set("city", city);
    contact.set("state", state);
    contact.set("zip", zip);
    contact.set("phone_no", phone_no);
    contact.set("email_id", email_id);
    return contact;
}

