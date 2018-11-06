import React, {
    Component
  } from 'react';
  
  class RoomItem extends Component {
    constructor(props){
super(props);

this.grp="";
this.onDelete=this.onDelete.bind(this);
    }
    onDelete(){
      this.props.onDelete(this.props.id)
    }
    groupby(){
      if(this.roomTypeLabel);
    }
   
    render() {
      const {name,onDelete, description,roomTypeLabel}=this.props;
      return ( 
        <div>

        <span>{name}</span> | <span> {description} </span> | <button onClick={this.onDelete}>delete</button> | <span>{roomTypeLabel}</span>
        </div>
      );
    }
  }
  
  export default RoomItem;