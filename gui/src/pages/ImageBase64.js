import React, { Component } from 'react';

class ImageBase64 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      base64Image: '',
    };
  }

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          selectedImage: file,
          base64Image: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <div>
        <div class="title-bar">
          <div class="title-bar-text">图片base64计算</div>
        </div>
        <div>
            <input type="file" accept="image/*" onChange={this.handleImageChange} />
            <br />
            
            <textarea id="field-row-stacked"
              rows="10"
              cols="50"
              value={this.state.base64Image}
              readOnly
            ></textarea>
            {this.state.selectedImage && (
              <img
                src={this.state.base64Image}
                alt="Selected"
                style={{ maxWidth: '300px' }}
              />
            )}
          </div>
      </div>


    );
  }
}

export default ImageBase64;
