// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios'
// import Noty from 'noty'

// export function initStripe(){
//     const stripe = await loadStripe('pk_test_51L3o3sSDFnqfnj2uMdTwMOLRMNx9yYC75oXIaLtjPSBwiM3VOdPyXsYGabZ9S3PRBYF8eMPOAWTDKsrVsPN7N1gg00ctEH8gQc');
//     const paymentType = document.querySelector("#paymentType");
//     paymentType.addEventListener('change', (e)=> {
//         console.log(e.target.value);
//         if(e.target.value==='card'){
//             //Display Widget

//         }else{
//             // 
//         }
//     })
//     // Ajax Call
// const paymentForm = document.querySelector('#payment-form');
// if(paymentForm){
//     paymentForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         let formData = new FormData(paymentForm)
//         let formObject = {}
    
//         for(let [key, value] of formData.entries()){
//             formObject[key] = value
//         }
//         axios.post('/orders', formObject).then((res) => {
//             new Noty({
//                 type:'success',
//                 timeout:1000,
//                 text: res.data.message,
//                 progressBar:false,
//             }).show();
//             setTimeout(() => {
//                 window.location.href = '/customers/orders'
//             }, 1000);

//         }).catch((err) => {
//             new Noty({
//                 type:'error',
//                 timeout:1000,
//                 text: err.res.data.message,
//                 progressBar:false,
//             }).show();
//         })
//         console.log(formObject);
//     })
// }
// }