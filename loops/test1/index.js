const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

for (let i = 0; i > people.length; i++) {
    if (people[i] == "Phil" || people[i] == "Lola") {
        admitted.textContent += people[i];
    }
    else {
        refused.textContent += people[i];
    }
}

// refused.textContent += ;
// admitted.textContent += ;

