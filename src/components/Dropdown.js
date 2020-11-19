import React,{useState} from "react";

const Dropdown = ({theme,selected,setSelect}) => {
  const filterArray = [
    { name: "All", value: "all" },
    { name: "America", value: "america" },
    { name: "Asia", value: "asia" },
    { name: "Europe", value: "europe" },
    { name: "Oceania", value: "oceania" },
  ];
  const [isOpen , setOpen] =  useState(false);
  
  const handleToggle = (e)=>{
    setOpen(!isOpen);
    //console.log(isOpen);
    e.target.nextSibling.classList.remove('close');
    if(isOpen){
      e.target.nextSibling.classList.add('close');
    }
    
  }
  //console.log(selected);
  return (
    <div className="dropdown">
      <button onClick={(e)=>handleToggle(e)} style={{background:theme.bgCard,color:theme.fontColor}}>
        {selected ? selected : 'Filter by Region'} <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-menu close" style={{background:theme.bgCard,color:theme.fontColor}}>
        <ul>
          {filterArray.map((content, index) => {
            return (
              <li key={index} onClick={e=>setSelect(e.target.attributes[0].nodeValue)} value={content.value} style={{color:theme.fontColor}}>
                {content.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
