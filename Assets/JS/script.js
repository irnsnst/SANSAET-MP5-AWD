document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.purchase-btn').forEach(button => {
        button.addEventListener('click', function () {
            const modal = bootstrap.Modal.getInstance(button.closest('.modal')); 
            modal.hide(); 
        });
    });

    var purchaseButton1 = document.getElementById('purchaseButton1');
    purchaseButton1.addEventListener('click', handlePurchase1);
    var purchaseButton2 = document.getElementById('purchaseButton2');
    purchaseButton2.addEventListener('click', handlePurchase2);
    var purchaseButton3 = document.getElementById('purchaseButton3');
    purchaseButton3.addEventListener('click', handlePurchase3);
});

function handlePurchase1() {
    alert('Thank you for your purchase of Product 1!');
    var modal = document.getElementById('product1-details-modal');
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.show();
}

function handlePurchase2() {

    alert('Thank you for your purchase of Product 2!');
    var modal = document.getElementById('product2-details-modal');
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.show();
}
function handlePurchase3() {
    alert('Thank you for your purchase of Product 3!');
    var modal = document.getElementById('product3-details-modal');
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.show();
}
