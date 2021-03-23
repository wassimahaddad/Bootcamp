import React from "react";
import axios from "axios";
import AvatarCards from "./components/AvatarCards";
import SearchField from "./components/SearchField";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatars: [], searchField: "" };
  }

  async componentDidMount() {
    try {
      const promises = [];
      for (let i = 0; i < 10; i++) {
        const promise = axios.get("https://randomuser.me/api/");
        promises.push(promise);
      }
      const data = await Promise.all(promises);
      const avatars = data.map((avatar) => {
        const obj = avatar.data.results[0];
        return {
          id: avatar.data.info.seed,
          firstName: obj.name.first,
          lastName: obj.name.last,
          img: obj.picture.large,
        };
      });

      this.setState({ avatars });
    } catch (error) {
      console.log(error.message);
    }
  }
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(this.state.searchField);
  };
  render() {
    const { avatars, searchField } = this.state;
    const filtered = [...avatars].filter((avt) => {
      return avt.firstName.toLowerCase().startsWith(searchField.toLowerCase());
    });

    return (
      <div>
        <div className="search-bar">
          <SearchField
            onChange={this.handleChange}
            type="search"
            placeholder="Filter by name"
          />
        </div>
        <AvatarCards avatarsArray={filtered} />
      </div>
    );
  }
}

export default App;
