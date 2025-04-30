import React , {useEffect, useState} from 'react';
import '../styles/DropDown.css';
import FontAwesomeIcon from 'react';



const DropDown = ({options, ismultiple}) => {
    const [changeView, setChangeView] = useState(ismultiple)
    const [selectedItem, setSelectedItem] = useState('');
    const [isOpenMulti, setIsOpenMulti] = useState(false);
    const [selectedItems, setSelectedItems] = useState([])
    
    function handleChangeMulti(e){
        
        const {name, value, checked} = e.target;
        console.log(name, value, checked)
        
        if(selectedItems.includes(value)){
            setSelectedItems(selectedItems.filter(x => x != value))
        }
        else{
            setSelectedItems([...selectedItems,value])
        }
        

        }

    console.log(selectedItems)
    return(

            <>
            <button onClick={() => setChangeView((prev) => !prev)}>
            {`Click me to show ${changeView? 'Single Select Drop Down': 'Multi Select Drop Down'}`}
           </button>
            {!changeView  &&  <div>
                <select name = "Select Single" onChange = {(e) => setSelectedItem(e.target.value)}>
                    <option>Select</option>
                    {options.map((option) => (
                        <option key = {option} > {option} </option>
                    ))}
                </select>
            </div>}

        {changeView  && 
                <div name = "select multiple" id = "multiselect">
                        <button onClick={() => setIsOpenMulti((prev) => !prev)}> {selectedItems.length > 0 ? `Selected items: ${selectedItems.join(', ')}` : 'Select Items'}{ !isOpenMulti ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                </svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                }
                        </button>
                        { isOpenMulti &&
                            <div className='dropDownOptions' onChange={(e) => handleChangeMulti(e)}>
                                {
                                options.map((option) =>
                                
                                    <div key = {option} className={selectedItems.includes(option)? ' option optionsChecked': 'option'} >
                                    <input id = {option} name = {option} value = {option} type  = "checkbox"/>
                                    <label htmlFor= {option}> {option}</label>
                                    </div> 
                                
                                )
                                }

                            </div>
                        } 
                    </div>
            }
          
        </>
    )
}
export default DropDown;