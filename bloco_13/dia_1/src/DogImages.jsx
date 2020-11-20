import React, { Component } from 'react';

class DogImages extends Component {
  constructor(props) {
    super(props);

    this.fetchDogImage = this.fetchDogImage.bind(this);
    this.getHandle = this.getHandle.bind(this);
    this.renderDogImage = this.renderDogImage.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);

    this.state = {
      loading: true,
      imageSrc: '',
      dogName: '',
      nameEdited: false
    }
  }

  async fetchDogImage() {
    this.setState(
      { loading: true }, 
      async () => {
        const imageObj = await fetch('https://dog.ceo/api/breeds/image/random');
        const imagePath = await imageObj.json();
        this.setState({
          loading: false,
          dogName: '',
          imageSrc: imagePath.message,
          nameEdited: false
        });
      });
  }

  getHandle({ target }) {
    console.log(target);
    const { value , name } = target;
    this.setState({ [name]: value, nameEdited: true });
  }

  renderDogImage() {
    const { imageSrc, dogName } = this.state;

    return (
      <div className="dog-content">
        <div className="image">
          <img src={imageSrc} alt="dogão"/>
          <span className="dogNameSpan">{dogName}</span>
        </div>
        <div className="new-dog">
          <button type="button" onClick={this.fetchDogImage}>Vam v outro Dogão?</button>
        </div>
        <div className="dog-name">
          <label htmlFor="dogName">
            <input id="dogName" value={dogName} type="text" name="dogName" onChange={this.getHandle}></input>
          </label>
          <button onClick={this.saveLocalStorage}>Salve o Nome do Dogão</button>
        </div>
      </div>
    )
  }

  componentDidMount() {
    if (localStorage.getItem('DogInformation') === null) {
      this.fetchDogImage();
    } else {
      const dogInformation = JSON.parse(localStorage.getItem('DogInformation'));
      const dogInformationLength = dogInformation.length;
      const url = dogInformation[dogInformationLength -1 ].url;
      const dogName = dogInformation[dogInformationLength -1 ].name;
      this.setState({imageSrc: url, dogName: dogName, loading: false});
    }
    
  }

  saveLocalStorage() {
    const { imageSrc, dogName } = this.state;
    const dogData = {'url': imageSrc, 'name': dogName}
    if (localStorage.getItem('DogInformation') === null) {
      localStorage.setItem('DogInformation',JSON.stringify([dogData]));
    } else {
      const dogLocalStorage = JSON.parse(localStorage.getItem('DogInformation'))
      dogLocalStorage.push(dogData);
      localStorage.setItem('DogInformation',JSON.stringify(dogLocalStorage));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { imageSrc: imgNext } = nextState;
    if (imgNext.includes('terrier')) {
      nextState.imageSrc = this.state.imageSrc;
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { imageSrc, loading, nameEdited } = this.state;
    const breed = imageSrc.split('/')[4];
    if (imageSrc !== '' && !loading && nameEdited === false) {
      alert(`Esse dogão é da raça: ${breed}`)
    }
  }

  render() {
    const { loading } = this.state;
    const loadingMsg = <span>Loading...</span>;

    return (
      <div className="dog-grid">
        {loading ? loadingMsg : this.renderDogImage()}
      </div>
    );
  }
}

export default DogImages;