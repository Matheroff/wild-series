import { Form } from "react-router-dom";

function CategoryForm() {
    // const action = (event) => {    le "event.preventDefault" est une alternative à la balise "Form"
    //   event.preventDefault();      Je la garde juste en exemple
  
      // post form data
    // }
  
    return (
      <Form method="post">
        <label htmlFor="name">Nouvelle catégorie</label>{" "}
        <input type="text" id="name" name="name" />
        <button type="submit">Ajouter</button>
      </Form>
    );
  }
  
  export default CategoryForm;