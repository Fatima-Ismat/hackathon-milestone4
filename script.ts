// document.getElementById('resumeForm')?.addEventListener('submit', function (e) {
//      e.preventDefault();
 
//      // Get user input
//      const name = (document.getElementById('name') as HTMLInputElement).value;
//      const email = (document.getElementById('email') as HTMLInputElement).value;
//      const phone = (document.getElementById('phone') as HTMLInputElement).value;
//      const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).value;
 
//      // Education
//      const educationEntries = document.querySelectorAll('.education-entry');
//      let educationHTML = '';
//      educationEntries.forEach((entry) => {
//          const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
//          const institution = (entry.querySelector('.institution') as HTMLInputElement).value;
//          const year = (entry.querySelector('.year') as HTMLInputElement).value;
//          educationHTML += <li contenteditable="true">${degree} - ${institution} (${year})</li>;
//      });
 
//      // Skills
//      const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
//      const skillsArray = skills.split(',').map(skill => <li contenteditable="true">${skill.trim()}</li>).join('');
 
//      // Work Experience
//      const workEntries = document.querySelectorAll('.work-entry');
//      let workHTML = '';
//      workEntries.forEach((entry) => {
//          const jobTitle = (entry.querySelector('.job-title') as HTMLInputElement).value;
//          const company = (entry.querySelector('.company') as HTMLInputElement).value;
//          const years = (entry.querySelector('.years') as HTMLInputElement).value;
//          workHTML += <li contenteditable="true">${jobTitle} at ${company} (${years})</li>;
//      });
 
//      // Display resume
//      const displayName = document.getElementById('displayName') as HTMLHeadingElement;
//      const displayEmail = document.getElementById('displayEmail') as HTMLParagraphElement;
//      const displayPhone = document.getElementById('displayPhone') as HTMLParagraphElement;
//      const displayProfilePicture = document.getElementById('displayProfilePicture') as HTMLImageElement;
//      const displayEducation = document.getElementById('displayEducation') as HTMLUListElement;
//      const displaySkills = document.getElementById('displaySkills') as HTMLUListElement;
//      const displayWorkExperience = document.getElementById('displayWorkExperience') as HTMLUListElement;
 
//      displayName.textContent = name;
//      displayEmail.textContent = Email: ${email};
//      displayPhone.textContent = Phone: ${phone};
//      if (profilePicture) {
//          displayProfilePicture.src = profilePicture;
//          displayProfilePicture.style.display = 'block';
//      } else {
//          displayProfilePicture.style.display = 'none';
//      }
 
//      displayEducation.innerHTML = educationHTML;
//      displaySkills.innerHTML = skillsArray;
//      displayWorkExperience.innerHTML = workHTML;
 
//      document.getElementById('resumeDisplay')!.style.display = 'block';
//  });
 
//  // Add more education fields
//  document.getElementById('addEducation')?.addEventListener('click', function () {
//      const educationSection = document.getElementById('educationSection');
//      if (educationSection) {
//          const newEntry = document.createElement('div');
//          newEntry.className = 'education-entry';
//          newEntry.innerHTML = `
//              <input type="text" placeholder="Degree" class="degree" required>
//              <input type="text" placeholder="Institution" class="institution" required>
//              <input type="text" placeholder="Year" class="year" required>
//          `;
//          educationSection.appendChild(newEntry);
//      }
//  });
 
//  // Add more work experience fields
//  document.getElementById('addWorkExperience')?.addEventListener('click', function () {
//      const workExperienceSection = document.getElementById('workExperienceSection');
//      if (workExperienceSection) {
//          const newEntry = document.createElement('div');
//          newEntry.className = 'work-entry';
//          newEntry.innerHTML = `
//              <input type="text" placeholder="Job Title" class="job-title" required>
//              <input type="text" placeholder="Company" class="company" required>
//              <input type="text" placeholder="Years" class="years" required>
//          `;
//          workExperienceSection.appendChild(newEntry);
//      }
//  });

document.getElementById('resumeForm')?.addEventListener('submit', function (e) {
     e.preventDefault();
 
     // Get user input
     const name = (document.getElementById('name') as HTMLInputElement).value;
     const email = (document.getElementById('email') as HTMLInputElement).value;
     const phone = (document.getElementById('phone') as HTMLInputElement).value;
     const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).value;
 
     // Education
     const educationEntries = document.querySelectorAll('.education-entry');
     let educationHTML = '';
     educationEntries.forEach((entry) => {
         const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
         const institution = (entry.querySelector('.institution') as HTMLInputElement).value;
         const year = (entry.querySelector('.year') as HTMLInputElement).value;
         educationHTML += `<li contenteditable="true">${degree} - ${institution} (${year})</li>`;
     });
 
     // Skills
     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
     const skillsArray = skills.split(',').map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('');
 
     // Work Experience
     const workEntries = document.querySelectorAll('.work-entry');
     let workHTML = '';
     workEntries.forEach((entry) => {
         const jobTitle = (entry.querySelector('.job-title') as HTMLInputElement).value;
         const company = (entry.querySelector('.company') as HTMLInputElement).value;
         const years = (entry.querySelector('.years') as HTMLInputElement).value;
         workHTML += `<li contenteditable="true">${jobTitle} at ${company} (${years})</li>`;
     });
 
     // Display resume
     const displayName = document.getElementById('displayName') as HTMLHeadingElement;
     const displayEmail = document.getElementById('displayEmail') as HTMLParagraphElement;
     const displayPhone = document.getElementById('displayPhone') as HTMLParagraphElement;
     const displayProfilePicture = document.getElementById('displayProfilePicture') as HTMLImageElement;
     const displayEducation = document.getElementById('displayEducation') as HTMLUListElement;
     const displaySkills = document.getElementById('displaySkills') as HTMLUListElement;
     const displayWorkExperience = document.getElementById('displayWorkExperience') as HTMLUListElement;
 
     displayName.textContent = name;
     displayEmail.textContent = `Email: ${email}`;
     displayPhone.textContent = `Phone: ${phone}`;
     if (profilePicture) {
         displayProfilePicture.src = profilePicture;
         displayProfilePicture.style.display = 'block';
     } else {
         displayProfilePicture.style.display = 'none';
     }
 
     displayEducation.innerHTML = educationHTML;
     displaySkills.innerHTML = skillsArray;
     displayWorkExperience.innerHTML = workHTML;
 
     document.getElementById('resumeDisplay')!.style.display = 'block'; // Ensure to close the parenthesis here
 });
 