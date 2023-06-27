import React, { useState } from "react";

function GuestBookPage() {
  const [data, setData] = useState({
    guests: [{ guest_name: "React JS", time: Date.now() }],
    name: "",
  });

  function handleChange(e) {
    setData({ ...data, name: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.name.length === 0) {
      return;
    }
    const newItem = {
      guest_name: data.name,
      time: Date.now(),
    };
    setData((state) => ({
      guests: state.guests.concat(newItem),
      name: "",
    }));
  }

  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-lg-12 p-5">
          <h1 className="display-6 mb-4">Guest Book</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Guest`s name"
                onChange={(e) => handleChange(e)}
                value={data.name}
              />
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>
          <ul className="list-group list-group-flush">
            {data.guests.map((item) => {
              let tanggal = new Date(item.time).toLocaleString();
              return (
                <li className="list-group-item" key={item.item}>
                  <span className="badge bg-info text-dark">{tanggal}</span>
                  <span className="p-2">{item.guest_name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GuestBookPage;
