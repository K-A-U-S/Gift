const canvas = document.getElementById('f1Canvas');
const ctx = canvas.getContext('2d');

const carWidth = 100;
const carHeight = 50;
const carImage = new Image();
carImage.src = 'https://cdn.pixabay.com/photo/2013/03/22/23/37/ferrari-96052_960_720.png'; // Substitua pelo URL da imagem do carro

let carX = 0;
const carSpeed = 2;

carImage.onload = function() {
    function drawCar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
        ctx.drawImage(carImage, carX, canvas.height - carHeight - 10, carWidth, carHeight); // Desenha o carro
        carX += carSpeed; // Move o carro

        if (carX > canvas.width) {
            carX = -carWidth; // Reseta a posição do carro quando ele sai da tela
        }

        requestAnimationFrame(drawCar); // Chama a função novamente para criar o loop de animação
    }

    drawCar(); // Inicia a animação
};

