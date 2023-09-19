const styledDiv = document.createElement('div');
styledDiv.textContent = 'Random Text';
styledDiv.classList.add('styled-div');

const styles = `
    .styled-div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        margin: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

function calculateWidth() {
    if (window.innerWidth <= 768) {
        return '100%';
    } else if (window.innerWidth <= 1199) {
        return '63.66%';
    } else {
        return '47%';
    }
}

styledDiv.style.width = calculateWidth();
window.addEventListener('resize', () => {
    styledDiv.style.width = calculateWidth();
});

const fourthProduct = document.querySelector('.product-item:nth-child(4)');

fourthProduct.insertAdjacentElement('afterend', styledDiv);

const productItems = document.querySelector('.products .product-items');

function changeFlexDirection() {
    productItems.style.flexDirection = 'row-reverse';
}

changeFlexDirection();