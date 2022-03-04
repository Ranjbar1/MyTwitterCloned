import React from "react";
import "./SidebarOption.css";
interface SidebarOptionProps {
  active:boolean,
  text:string,
Icon?:any

}
 

class SidebarOption extends React.Component<SidebarOptionProps> {
  
  render() { 
    return (   <div className={`sidebarOption ${this.props.active && "sidebarOption--active"}`}>
      <this.props.Icon  />
      <h2>{this.props.text}</h2>
    </div>);
  }
}
 
export default SidebarOption;
