function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', function(event){
        let percentage = Math.floor((event.offsetX / event.target.clientWidth) * 100);
        result.textContent = `${percentage}%`;
    });
}