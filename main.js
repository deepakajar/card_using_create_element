var profiledetails=[{
    name:"deepak",
    profile_image:"profile/2.jpg"
},
{
    name:"vishnu",
    profile_image:"profile/3.jpg"
},
{
    name:"kathir",
    profile_image:"profile/4.jpg"
},
{
    name:"deepak",
    profile_image:"profile/2.jpg"
},
{
    name:"vishnu",
    profile_image:"profile/3.jpg"
},
{
    name:"kathir",
    profile_image:"profile/4.jpg"
},
{
    name:"deepak",
    profile_image:"profile/2.jpg"
},
{
    name:"vishnu",
    profile_image:"profile/3.jpg"
},
{
    name:"kathir",
    profile_image:"profile/4.jpg"
},
{
    name:"deepak",
    profile_image:"profile/2.jpg"
},
{
    name:"vishnu",
    profile_image:"profile/3.jpg"
},
{
    name:"kathir",
    profile_image:"profile/4.jpg"
},

]

let row=document.getElementById('row');

profiledetails.forEach(function(e){
    let coldiv=document.createElement('div');
coldiv.classList.add('col-3');
row.appendChild(coldiv);
let box=document.createElement('div');
box.classList.add('box');
coldiv.appendChild(box);
let profile=document.createElement('h3');
profile.innerHTML="PROFILE";
box.appendChild(profile);
let imagetag=document.createElement('img');
let a=e.profile_image;
console.log(a);
imagetag.setAttribute('src',`${e.profile_image}`);
box.appendChild(imagetag);
let paratag=document.createElement('p');
paratag.innerText=`${e.name}`;
box.appendChild(paratag);

})







