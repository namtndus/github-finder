// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keydown', (e) =>{
    const userText = e.target.value;

    if(e.key === 'Enter'){
        if(userText !== ''){
            github.getUser(userText)
                .then(data => {
                    if(data.profile.message === 'Not Found') {
                        ui.showAlert('User not found','alert alert-danger');
                    }else{
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos);
                        ui.showGreen(userText);
                    }
                })
        }else{
            ui.clearProfile();
        }
    }
    
});