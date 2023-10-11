import React, { useState } from 'react';
import Skills from './formComponents/skills';
import { PersonCheck, PersonSquare, CaretDownSquare, JournalBookmarkFill, PenFill, Trash3Fill, PlusLg, JournalCheck , Link45deg} from "react-bootstrap-icons";
import CustomSection from './formComponents/customSection';
export default function Form() {
  
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
  const [personalData, setPersonalData] = useState({
    jobTitle: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    city: '',
    address: '',
    postalCode: '',
    drivingLicense: '',
    nationality: '',
    placeOfBirth: '',
    country: '',
    photo: null,
    professionalSummary: '',
    employmentHistory: [
      {
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
        city: '',
        description: '',
      },
    ],
    educationHistory: [
      {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        city: '',
        description: '',
      },
    ],
    websitesAndLinks: [
      {
        name: '',
        url: '',
      },
    ],

  });

  const addWebsiteOrLink = () => {
    setPersonalData((prevData) => ({
      ...prevData,
      websitesAndLinks: [
        ...prevData.websitesAndLinks,
        {
          name: '',
          url: '',
        },
      ],
    }));
  };

  const removeWebsiteOrLink = (index) => {
    setPersonalData((prevData) => {
      const updatedWebsitesAndLinks = [...prevData.websitesAndLinks];
      updatedWebsitesAndLinks.splice(index, 1);
      return {
        ...prevData,
        websitesAndLinks: updatedWebsitesAndLinks,
      };
    });
  };

  const updateWebsiteOrLinkField = (index, field, value) => {
    setPersonalData((prevData) => {
      const updatedWebsitesAndLinks = [...prevData.websitesAndLinks];
      updatedWebsitesAndLinks[index][field] = value;
      return {
        ...prevData,
        websitesAndLinks: updatedWebsitesAndLinks,
      };
    });
  };

  const addEducationHistory = () => {
    setPersonalData((prevData) => ({
      ...prevData,
      educationHistory: [
        ...prevData.educationHistory,
        {
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
          city: '',
          description: '',
        },
      ]
    }));
  };

  const removeEducationHistory = (index) => {
    setPersonalData((prevData) => {
      const updatedEducationHistory = [...prevData.educationHistory];
      updatedEducationHistory.splice(index, 1);
      return {
        ...prevData,
        educationHistory: updatedEducationHistory,
      };
    });
  };

  const updateEducationField = (index, field, value) => {
    setPersonalData((prevData) => {
      const updatedEducationHistory = [...prevData.educationHistory];
      updatedEducationHistory[index][field] = value;
      return {
        ...prevData,
        educationHistory: updatedEducationHistory,
      };
    });
  };

  const addEmploymentHistory = () => {
    setPersonalData({
      ...personalData,
      employmentHistory: [
        ...personalData.employmentHistory,
        {
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          city: '',
          description: '',
        },
      ],
    });
  };

  const removeEmploymentHistory = (index) => {
    setPersonalData((prevData) => {
      const updatedEmploymentHistory = [...prevData.employmentHistory];
      updatedEmploymentHistory.splice(index, 1);
      return {
        ...prevData,
        employmentHistory: updatedEmploymentHistory,
      };
    });
  };

  const updateEmploymentField = (index, field, value) => {
    setPersonalData((prevData) => {
      const updatedEmploymentHistory = [...prevData.employmentHistory];
      updatedEmploymentHistory[index][field] = value;
      return {
        ...prevData,
        employmentHistory: updatedEmploymentHistory,
      };
    });
  };

  const handleLogDetails = () => {
    console.log('Form Input Details:', personalData);
  };


  const toggleAdditionalDetails = () => {
    setShowAdditionalDetails(!showAdditionalDetails);
  };


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      const photoFile = files[0];
      setPersonalData({
        ...personalData,
        [name]: photoFile,
      });


      // Display the uploaded photo
      if (photoFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const uploadedPhotoDataURL = e.target.result;
          setPersonalData({
            ...personalData,
            uploadedPhotoURL: uploadedPhotoDataURL,
          });
        };
        reader.readAsDataURL(photoFile);
      }
    } else {
      // Handle regular input fields
      setPersonalData({
        ...personalData,
        [name]: value,
      });
    }
  };


  return (
    <div>
      <h5 className='formSection'><PersonCheck color="#35b276" size={26} /> &nbsp;Personal Details</h5>
      <form>
        <div className='row'>
          <div className='col-md-6'>
            <label className='detailsInfoLabel'>
              Target Position
            </label>
            <br />
            <input className='detailsInfoInput' type="text" name="jobTitle" value={personalData.jobTitle} onChange={handleChange} />
          </div>

          <div className='col-md-6 uplouploadPictureBigDiv'>
            <label className='detailsInfoLabel uplouploadPictureDivLabel'>
              Upload Photo
            </label>
            <PersonSquare size={80} className="uplouploadPhotoDivIcon" />
            {personalData.uploadedPhotoURL && (
              <div className='uplouploadPhotoDiv'>
                <img src={personalData.uploadedPhotoURL} className="uploadedPicture" alt="Uploaded" width="90" />
              </div>
            )}
            <input type="file" className='detailsInfoInput uploadPictureInput' name="photo" accept="image/*" onChange={handleChange} />
          </div>

          <div className='col-md-6'>
            <label className='detailsInfoLabel'>
              First Name:
            </label>
            <br />
            <input type="text" className='detailsInfoInput' name="firstName" value={personalData.firstName} onChange={handleChange} />
          </div>

          <div className='col-md-6'>
            <label className='detailsInfoLabel'>
              Middle Name:
            </label>
            <br />
            <input type="text" className='detailsInfoInput' name="middleName" value={personalData.middleName} onChange={handleChange} />
          </div>

          <div className='col-md-6'>
            <label className='detailsInfoLabel'>
              Last Name:
            </label>
            <br />
            <input className='detailsInfoInput' type="text" name="lastName" value={personalData.lastName} onChange={handleChange} />
          </div>

          <div className='col-md-6'>
            <label className='detailsInfoLabel'>
              Email:
            </label>
            <br />
            <input className='detailsInfoInput' type="email" name="email" value={personalData.email} onChange={handleChange} />
          </div>

          <div className='col-md-6'>
            <label className='detailsInfoLabel'>
              Phone:
            </label>
            <br />
            <input className='detailsInfoInput' type="number" name="phone" value={personalData.phone} onChange={handleChange} />
          </div>

          <div className='col-md-6'>
            <label className='detailsInfoLabel'>
              Date of Birth:
            </label>
            <br />
            <input className='detailsInfoInput' type="date" name="dateOfBirth" value={personalData.dateOfBirth} onChange={handleChange} />
          </div>

          <div className='col-md-6'>
            <label className='detailsInfoLabel'>
              City:
            </label>
            <br />
            <input className='detailsInfoInput' type="text" name="city" value={personalData.city} onChange={handleChange} />
          </div>

          {/* Toggle button for additional details */}
          <button type="button" onClick={toggleAdditionalDetails} className="Sec1additionalDetails">
            {showAdditionalDetails ? 'Hide All Additional Details' : 'Edit Additional Details '}
          </button>
        </div>


        {/* Additional input fields */}
        {showAdditionalDetails && (
          <div className='row'>
            <div className='col-md-6'>
              <label className='detailsInfoLabel'>
                Address:
              </label>
              <br />
              <input className='detailsInfoInput' type="text" name="address" value={personalData.address} onChange={handleChange} />
            </div>

            <div className='col-md-6'>
              <label className='detailsInfoLabel'>
                Postal Code:
              </label>
              <br />
              <input className='detailsInfoInput' type="number" name="postalCode" value={personalData.postalCode} onChange={handleChange} />
            </div>

            <div className='col-md-6'>
              <label className='detailsInfoLabel'>
                Driving License:
              </label>
              <br />
              <input className='detailsInfoInput' type="text" name="drivingLicense" value={personalData.drivingLicense} onChange={handleChange} />
            </div>

            <div className='col-md-6'>
              <label className='detailsInfoLabel'>
                Nationality:
              </label>
              <br />
              <input className='detailsInfoInput' type="text" name="nationality" value={personalData.nationality} onChange={handleChange} />
            </div>

            <div className='col-md-6'>
              <label className='detailsInfoLabel'>
                Place of Birth:
              </label>
              <br />
              <input className='detailsInfoInput' type="text" name="placeOfBirth" value={personalData.placeOfBirth} onChange={handleChange} />
            </div>

            <div className='col-md-6'>
              <label className='detailsInfoLabel'>
                Country:
              </label>
              <br />
              <input className='detailsInfoInput' type="text" name="country" value={personalData.country} onChange={handleChange} />
            </div>
          </div>
        )}
        <br />

        <h5 className='formSection'><PenFill color="#35b276" size={24} /> &nbsp;Professional Summary</h5>
        <p className='detailsSubText'>Compose a professional summary to showcase your expertise. For instance: 'Results driven marketing professional with 8 years of experience,excelling in digital strategy and campaign optimization.'</p>
        <textarea
          name="professionalSummary"
          value={personalData.professionalSummary}
          onChange={handleChange}
          rows="6"
          cols="82"
          placeholder='Eg: Passionate Software Developer with 8+ years of Building High Enterprise Level Applications'
          className='detailsTextarea'
        ></textarea>


        <h5 className='formSection'><JournalBookmarkFill color="#35b276" size={26} /> &nbsp;Employment History</h5>
        <p className='detailsSubText'>Let's capture your last 10 years of work experience, ensuring your resume reflects your growth,skills and accomplishments effectively.</p>

        <div class="accordion myAccordian" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Add Employment
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">

                {personalData.employmentHistory.map((employment, index) => (
                  <div key={index} className="employmentHistoryDiv">
                    <h5 className='personalSubSubHeading'>Role {index + 1} :</h5>

                    <div className='row'>
                      <div className="col-md-6">
                        <label className='detailsInfoLabel'>
                          Job Title
                        </label>
                        <br />
                        <input
                          className='detailsInfoInput' type="text"
                          value={employment.jobTitle}
                          onChange={(e) => updateEmploymentField(index, 'jobTitle', e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className='detailsInfoLabel'>
                          Employer
                        </label>
                        <br />
                        <input
                          className='detailsInfoInput' type="text"
                          value={employment.employer}
                          onChange={(e) => updateEmploymentField(index, 'employer', e.target.value)}
                        />
                      </div>

                      <div className="col-md-3">
                        <label className='detailsInfoLabel'>
                          Start Date
                        </label>
                        <br />
                        <input
                          className='detailsInfoInput' type="date"
                          value={employment.startDate}
                          style={{ "font-size": "12px", "height": "38px", "marginTop": "10px" }}
                          onChange={(e) => updateEmploymentField(index, 'startDate', e.target.value)}
                        />
                      </div>

                      <div className="col-md-3">
                        <label className='detailsInfoLabel'>
                          End Date
                        </label>
                        <br />
                        <input
                          className='detailsInfoInput' type="date"
                          style={{ "font-size": "12px", "height": "38px", "marginTop": "10px" }}
                          value={employment.endDate}
                          onChange={(e) => updateEmploymentField(index, 'endDate', e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className='detailsInfoLabel'>
                          City
                        </label>
                        <br />

                        <input
                          className='detailsInfoInput' type="text"
                          value={employment.city}
                          onChange={(e) => updateEmploymentField(index, 'city', e.target.value)}
                        />

                      </div>
                    </div>

                    <label className='detailsInfoLabel'>
                      Description:
                    </label>

                    <p className='detailsSubText'>Provide an overview of your job duties and responsibilities in your previous position.This would help us gain a deeper understanding of your professional experience.</p>
                    <textarea
                      value={employment.description}
                      onChange={(e) => updateEmploymentField(index, 'description', e.target.value)}
                      rows="6 "
                      cols="76"
                      placeholder='Eg: I was provided with a range of responsibilities to levarage the digital landscape for brand promotion and lead generation.'
                      className='detailsTextarea'
                    />
                    <br />
                    <button type="button" onClick={() => removeEmploymentHistory(index)} className="DeleteEmp">
                      <Trash3Fill size={20} />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addEmploymentHistory} className="Sec1additionalDetails">
                  <PlusLg size={20} /> Add One More Employment
                </button>

              </div>
            </div>
          </div>
        </div>

        <h5 className='formSection'><JournalCheck color="#35b276" size={26} /> &nbsp;Education</h5>
        <p className='detailsSubText'>Share your educational journey,spanning your academic achievements and qualifications, making you an appealing candidate to potential employers. </p>

        <div class="accordion myAccordian" id="accordionExample3">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Add Education
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
              <div class="accordion-body">

                {personalData.educationHistory.map((education, index) => (
                  <div key={index} className="employmentHistoryDiv">
                    <h5 className='personalSubSubHeading'>Institute {index + 1} :</h5>

                    <div className='row'>
                      <div className="col-md-6">
                        <label className='detailsInfoLabel'>
                          School:
                        </label>
                        <br />
                        <input
                          className='detailsInfoInput' type="text"
                          value={education.school}
                          onChange={(e) => updateEducationField(index, 'school', e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className='detailsInfoLabel'>
                          Degree:
                        </label>
                        <br />
                        <input
                          className='detailsInfoInput' type="text"
                          value={education.degree}
                          onChange={(e) => updateEducationField(index, 'degree', e.target.value)}
                        />
                      </div>

                      <div className="col-md-3">
                        <label className='detailsInfoLabel'>
                          Start Date:
                        </label>
                        <input
                          className='detailsInfoInput' type="date"
                          value={education.startDate}
                          style={{ "font-size": "12px", "height": "38px", "marginTop": "10px" }}
                          onChange={(e) => updateEducationField(index, 'startDate', e.target.value)}
                        />
                      </div>

                      <div className="col-md-3">
                        <label className='detailsInfoLabel'>
                          End Date:
                        </label>

                        <input
                          className='detailsInfoInput' type="date"
                          value={education.endDate}
                          style={{ "font-size": "12px", "height": "38px", "marginTop": "10px" }}

                          onChange={(e) => updateEducationField(index, 'endDate', e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className='detailsInfoLabel'>
                          City:
                        </label>

                        <input
                          className='detailsInfoInput' type="text"
                          value={education.city}
                          onChange={(e) => updateEducationField(index, 'city', e.target.value)}
                        />

                      </div>
                    </div>

                    <label className='detailsInfoLabel'>
                      Description:
                    </label>

                    <p className='detailsSubText'>Provide an overview of your job duties and responsibilities in your previous position.This would help us gain a deeper understanding of your professional experience.</p>

                    <textarea
                      value={education.description}
                      onChange={(e) => updateEducationField(index, 'description', e.target.value)}
                      rows="6 "
                      cols="76"
                      placeholder='Eg: I was provided with a range of responsibilities to levarage the digital landscape for brand promotion and lead generation.'
                      className='detailsTextarea'
                    />
                    <br />
                    <button type="button" onClick={() => removeEducationHistory(index)} className="DeleteEmp">
                      <Trash3Fill size={20} />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addEducationHistory} className="Sec1additionalDetails">
                  <PlusLg size={20} /> Add One More Education
                </button>

              </div>
            </div>
          </div>
        </div>



        <h5 className='formSection'><Link45deg color="#35b276" size={26} /> &nbsp;Websites and Links</h5>
        <p className='detailsSubText'>Elevate your resume with real-world examples of your work. You can include Personal-websites, portfolios,and project repositories to demonstrate your skills and experience.  </p>

        <div class="accordion myAccordian" id="accordionExample4">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Add Your Links
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample4">
              <div class="accordion-body">

              {personalData.websitesAndLinks.map((websiteOrLink, index) => (
                <div key={index}>
                    <h5 className='personalSubSubHeading'>Site {index + 1} :</h5>

                    <div className='row'>
                      <div className="col-md-12">
                      <label className='detailsInfoLabel'>
              Name:
              </label>
              <input
                className='detailsInfoInput' type="text"
                value={websiteOrLink.name}
                onChange={(e) => updateWebsiteOrLinkField(index, 'name', e.target.value)}
              />
                      </div>

                      <div className="col-md-12">
                      <label className='detailsInfoLabel'>
              URL:
              </label>
              <input
                className='detailsInfoInput' type="url"
                value={websiteOrLink.url}
                onChange={(e) => updateWebsiteOrLinkField(index, 'url', e.target.value)}
              />
                      </div>                     
                    </div>
                    <button type="button" onClick={() => removeWebsiteOrLink(index)} className="DeleteEmp">
                      <Trash3Fill size={20} />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addWebsiteOrLink} className="Sec1additionalDetails">
                  <PlusLg size={20} /> Add One More Link
                </button>

              </div>
            </div>
          </div>
        </div>

        <Skills />
        <CustomSection />

        <button type="button" onClick={handleLogDetails}>
          Log Details
        </button>
      </form>
    </div>
  );
}


