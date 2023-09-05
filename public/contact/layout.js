import { Form, redirect, useActionData } from "react-router-dom";

export default function ContactLayout() {
  // read data returned by action
  const data = useActionData();
  return (
    <>
      <h1>Contact form</h1>
      <Form method="post" action="/contact">
        <label htmlFor="name">Name</label>
        <div>
          <input type="text" placeholder="Name" name="name" id="name" />
          {data?.name && (
            <span style={{ color: "red", display: "block" }}>{data.name}</span>
          )}
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <input type="text" placeholder="Email" name="email" id="email" />
          {data?.email && (
            <span style={{ color: "red", display: "block" }}>{data.email}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}

// it will execute after form is submitted
export async function contactAction({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");

  const error = {};

  const body = {
    name,
    email
  };

  if (!name) {
    error.name = "Please provide a name.";
  }

  if (!email.includes("@")) {
    error.email = "Please provide an email id.";
  }
  if (Object.keys(error).length > 0) return error;

  return redirect("/login");
}
