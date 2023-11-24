let info1=[
    {
      "name": "John",
      "surname": "Doe",
      "age": 25,
      "info": "Some additional information about John."
    },
    {
      "name": "Mary",
      "surname": "Smith",
      "age": 30,
      "info": "Some additional information about Mary."
    },
    {
      "name": "Alex",
      "surname": "Johnson",
      "age": 22,
      "info": "Some additional information about Alex."
    },
    {
      "name": "Emily",
      "surname": "Brown",
      "age": 28,
      "info": "Some additional information about Emily."
    },
    {
      "name": "Michael",
      "surname": "Taylor",
      "age": 35,
      "info": "Some additional information about Michael."
    },
    {
      "name": "Sophia",
      "surname": "Miller",
      "age": 26,
      "info": "Some additional information about Sophia."
    },
    {
      "name": "William",
      "surname": "Jones",
      "age": 32,
      "info": "Some additional information about William."
    },
    {
      "name": "Olivia",
      "surname": "Davis",
      "age": 29,
      "info": "Some additional information about Olivia."
    },
    {
      "name": "Daniel",
      "surname": "Wilson",
      "age": 31,
      "info": "Some additional information about Daniel."
    },
    {
      "name": "Ava",
      "surname": "Anderson",
      "age": 27,
      "info": "Some additional information about Ava."
    },
    
  ]

let  div1=document.querySelector("#div1")





   let zz=info1.map(function(list,index){
    return `<div class="card" style="width: 18rem;">
              
    <div class="card-body">
      <h5 class="card-title text-primary">Name:${info1[index].name}</h5>
      <h5 class="card-text text-warning">Surname:${info1[index].surname}</h5>
      <h5 class="card-text text-info">Age:${info1[index].age}</h5>
      <h5 class="card-text">Info:${info1[index].info}</h5>
      
    </div>
  </div>
</div>`
  })
  

  div1.innerHTML=zz.join("")


  

  