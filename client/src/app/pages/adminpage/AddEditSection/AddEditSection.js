import React from "react";
import "./addeditsection.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import ActionButton from "../../../components/Buttons/ActionButton";
import { toTitleCase } from "../../../utils/";

class AddEditSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, name: "", region: "" };
  }

  regions = [
    "africa",
    "asia",
    "the caribbean",
    "central america",
    "europe",
    "north america",
    "oceania"
  ];

  handleChange = name => e => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  dbAddItem = e => {
    e.preventDefault();
    fetch("http://localhost:7000/flights", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        region: this.state.region
      })
    })
      .then(res => res.json())
      .then(data => {
        return Array.isArray(data)
          ? this.props.addFlight
          : console.log("Failed to add new flight.");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { id, name, region } = this.state;
    const handleChange = this.handleChange;
    const style = {
      width: "300px"
    };

    return (
      <div>
        <h1 className="font--large dark-grey bold">Add/Edit Featured Flight</h1>
        <div className="margin-20">
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={handleChange("name")}
            helperText="Name of featured special. (Character limit: 20)"
            style={style}
          />
        </div>
        <div className="margin-20 margin-bottom-50">
          <TextField
            select
            label="Select Region"
            value={region}
            onChange={handleChange("region")}
            style={style}
          >
            {this.regions.map((location, i) => (
              <MenuItem key={i} value={location} style={style}>
                {toTitleCase(location)}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="margin-20">
          <ActionButton
            action={e => this.dbAddItem(e)}
            label="Submit"
            width="120px"
          />
        </div>
      </div>
    );
  }
}

export default AddEditSection;