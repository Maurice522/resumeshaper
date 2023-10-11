import React, { useState ,useEffect} from 'react';
import '../../styleSheet/Form.css'
import {TrophyFill,Trash3Fill} from "react-bootstrap-icons";

export default function Skills(){

      const [options, setOptions] = useState(generateOptions()); // Replace this with your list of options
      const [searchText, setSearchText] = useState('');
      const [selectedOptions, setSelectedOptions] = useState([]);
      const [showDropdown, setShowDropdown] = useState(false);
    
      useEffect(() => {
        // Close the dropdown when an item is selected
        setShowDropdown(false);
      }, [selectedOptions]);
    
      const handleSearchTextChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        setShowDropdown(true); // Show dropdown when user types
      };
    
      const handleOptionClick = (option) => {
        if (!selectedOptions.includes(option)) {
          setSelectedOptions([...selectedOptions, option]);
          setSearchText('');
        }
      };
    
      const handleRemoveOption = (optionToRemove) => {
        const updatedSelectedOptions = selectedOptions.filter(
          (option) => option !== optionToRemove
        );
        setSelectedOptions(updatedSelectedOptions);
      };
    
      const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      );
    
      return (
        <div>
          <h5 className='formSection'><TrophyFill color="#35b276" size={24} /> &nbsp;Add your Skills</h5>
        <p className='detailsSubText'> Highlight your core strengths and expertise. Select upto 6 key skills that best suit your the position you want to apply to and  represent your capabilities,enhancing your resume.</p>
          <div>
            <input
              className='detailsInfoInput'
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchTextChange}
            />
            {showDropdown && (
              <div className="dropdown">
                <div className="scrollable-dropdown">
                  {filteredOptions.map((option, index) => (
                    <div
                      key={index}
                      className="dropdown-option"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div>
            <h6 className='formSection SkillsadditionalDetails'>Selected Skills:</h6>
            {selectedOptions.map((option, index) => (
              <div key={index} className="selected-option selectedOption ">
                {option}       
                <button onClick={() => handleRemoveOption(option)} className="DeleteSkill"> <Trash3Fill size={16} /></button>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

    
    // Helper function to generate a large list of options for testing
    function generateOptions() {
      const options = [];
      for (let i = 1; i <= 200; i++) {
        options.push(`Option ${i}`);
      }
      return options;
    }
    