// document.getElementById('resumeForm')?.addEventListener('submit', function (e) {
//      e.preventDefault();
var _a, _b, _c;
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
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePicture = document.getElementById('profilePicture').value;
    // Education
    var educationEntries = document.querySelectorAll('.education-entry');
    var educationHTML = '';
    educationEntries.forEach(function (entry) {
        var degree = entry.querySelector('.degree').value;
        var institution = entry.querySelector('.institution').value;
        var year = entry.querySelector('.year').value;
        educationHTML += "<li contenteditable=\"true\">".concat(degree, " - ").concat(institution, " (").concat(year, ")</li>");
    });
    // Skills
    var skills = document.getElementById('skills').value;
    var skillsArray = skills.split(',').map(function (skill) { return "<li contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join('');
    // Work Experience
    var workEntries = document.querySelectorAll('.work-entry');
    var workHTML = '';
    workEntries.forEach(function (entry) {
        var jobTitle = entry.querySelector('.job-title').value;
        var company = entry.querySelector('.company').value;
        var years = entry.querySelector('.years').value;
        workHTML += "<li contenteditable=\"true\">".concat(jobTitle, " at ").concat(company, " (").concat(years, ")</li>");
    });
    // Display resume
    var displayName = document.getElementById('displayName');
    var displayEmail = document.getElementById('displayEmail');
    var displayPhone = document.getElementById('displayPhone');
    var displayProfilePicture = document.getElementById('displayProfilePicture');
    var displayEducation = document.getElementById('displayEducation');
    var displaySkills = document.getElementById('displaySkills');
    var displayWorkExperience = document.getElementById('displayWorkExperience');
    displayName.textContent = name;
    displayEmail.textContent = "Email: ".concat(email);
    displayPhone.textContent = "Phone: ".concat(phone);
    if (profilePicture) {
        displayProfilePicture.src = profilePicture;
        displayProfilePicture.style.display = 'block';
    }
    else {
        displayProfilePicture.style.display = 'none';
    }
    displayEducation.innerHTML = educationHTML;
    displaySkills.innerHTML = skillsArray;
    displayWorkExperience.innerHTML = workHTML;
    document.getElementById('resumeDisplay').style.display = 'block';
});
// Add more education fields
(_b = document.getElementById('addEducation')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var educationSection = document.getElementById('educationSection');
    if (educationSection) {
        var newEntry = document.createElement('div');
        newEntry.className = 'education-entry';
        newEntry.innerHTML = "\n             <input type=\"text\" placeholder=\"Degree\" class=\"degree\" required>\n             <input type=\"text\" placeholder=\"Institution\" class=\"institution\" required>\n             <input type=\"text\" placeholder=\"Year\" class=\"year\" required>\n         ";
        educationSection.appendChild(newEntry);
    }
});
// Add more work experience fields
(_c = document.getElementById('addWorkExperience')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var workExperienceSection = document.getElementById('workExperienceSection');
    if (workExperienceSection) {
        var newEntry = document.createElement('div');
        newEntry.className = 'work-entry';
        newEntry.innerHTML = "\n             <input type=\"text\" placeholder=\"Job Title\" class=\"job-title\" required>\n             <input type=\"text\" placeholder=\"Company\" class=\"company\" required>\n             <input type=\"text\" placeholder=\"Years\" class=\"years\" required>\n         ";
        workExperienceSection.appendChild(newEntry);
    }
});
