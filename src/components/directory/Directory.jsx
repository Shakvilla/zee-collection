import React, { Component } from 'react'
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';

 class Directory extends Component {

  constructor(){
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',

          id: 1
      },

        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          id: 2
        },

        {
          title: 'shoes',
          imageUrl: 'https://images.unsplash.com/photo-1553460588-3ba256b9aac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
          id: 3
        },

        {
          title: 'men\'s',
          imageUrl: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
          size: 'large',
          id: 4
        },

        {
          title: 'women\'s',
          imageUrl: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          size: 'large',
          id: 5
        },
      
      ]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          ))
        }
        
      </div>
    )
  }
}

export default Directory;