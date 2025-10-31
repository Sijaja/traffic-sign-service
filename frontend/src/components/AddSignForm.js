import React, { useState } from "react";

function AddSignForm({ onAdd }) {
  const [form, setForm] = useState({
    latitude: "",
    longitude: "",
    heading: "",
    type: "SPEED_LIMIT",
    signValue: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ latitude: "", longitude: "", heading: "", type: "SPEED_LIMIT", signValue: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input name="latitude" placeholder="Latitude" value={form.latitude} onChange={handleChange} required />
      <input name="longitude" placeholder="Longitude" value={form.longitude} onChange={handleChange} required />
      <input name="heading" placeholder="Heading" value={form.heading} onChange={handleChange} required />
      <select name="type" value={form.type} onChange={handleChange}>
        <option value="SPEED_LIMIT">SPEED_LIMIT</option>
        <option value="CITY_BEGIN">CITY_BEGIN</option>
        <option value="CITY_END">CITY_END</option>
        <option value="HIGHWAY_BEGIN">HIGHWAY_BEGIN</option>
        <option value="HIGHWAY_END">HIGHWAY_END</option>
        <option value="PASSING_RESTRICTION">PASSING_RESTRICTION</option>
      </select>
      <input name="signValue" placeholder="Value" value={form.signValue} onChange={handleChange} />
      <button type="submit">Add Sign</button>
    </form>
  );
}

export default AddSignForm;