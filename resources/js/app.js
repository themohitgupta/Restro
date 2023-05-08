import axios from 'axios'
import Noty from 'noty'
import { initAdmin } from './admin'
import moment from 'moment'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')
let removefromcart = document.querySelectorAll('.remove-from-cart')


function updateCart(food){
    axios.post('/update-cart', food).then(res =>{
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type:'success',
            timeout:1000,
            text: 'Item added to cart',
            progressBar:false,
        }).show();
    }).catch(err =>{
        new Noty({
            type:'error',
            timeout:1000,
            text: 'Something went wrong',
            progressBar:false,
        }).show();
    })
} 

addToCart.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        let food = JSON.parse(btn.dataset.food)
        updateCart(food)
    })
})

removefromcart.forEach((btn) =>{
    btn.removeEventListener('click', (e) =>{
        let food = JSON.parse(btn.dataset.food)
        updateCart(food)
    })
})

const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {
    setTimeout(() => {
        alertMsg.remove()
    }, 2000);
}



// Change order status
let statuses = document.querySelectorAll('.status_line')
let hiddenInput = document.querySelector('#hiddenInput')
let order = hiddenInput ? hiddenInput.value : null
order = JSON.parse(order)
let time = document.createElement('small')



function updateStatus(order) {
    statuses.forEach((status) => {
        status.classList.remove('step-completed')
        status.classList.remove('current')
    })
    let stepCompleted = true;
    statuses.forEach((status) => {
        let dataProp = status.dataset.status
        if(stepCompleted) {
            status.classList.add('step-completed')
        }
        if(dataProp === order.status){
            stepCompleted = false
            time.innerText = moment(order.updatedAt).format('hh:mm A')
            status.appendChild(time)
            if(status.nextElementSibling){
                status.nextElementSibling.classList.add('current')
            } 
        }
    })

}

updateStatus(order);

// Socket
let socket = io() 
// Join 
if(order){
socket.emit('join', `order_${order._id}`)
}

// admin real time without reloading

let adminAreaPath = window.location.pathname

if(adminAreaPath.includes('admin')){
    initAdmin(socket)
    socket.emit('join', 'adminRoom')
}


socket.on('orderUpdated', (data) => {
    const updateOrder = { ...order }
    updateOrder.updatedAt = moment().format()
    updateOrder.status = data.status
    updateStatus(updateOrder)
    new Noty({
        type:'success',
        timeout:1000,
        text: 'Order Updated',
        progressBar:false,
    }).show();
})