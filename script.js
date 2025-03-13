function display() {
    document.getElementById('textInfo').style.display='block';
    setTimeout(() => {
        document.getElementById('textInfo').style.display='none';
    }, 2000);
}