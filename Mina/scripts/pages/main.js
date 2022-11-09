var uid = null;


auth.onAuthStateChanged((user) => {
    if (user) {
        uid = user.uid
    } else {
        document.getElementById('myAccount').href = '/login/'
        document.getElementById('myAccountMobile').href = '/login/'
    }
});