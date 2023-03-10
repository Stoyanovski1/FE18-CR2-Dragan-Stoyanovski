let books1 = `[
    {
        "taskName": "Time for Learn",
        "description": "I learn IT every day in CodeFactory",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/learnIT.png"
    },
    {
        "taskName": "Time for Lunch",
        "description": "I eat 3 times a Day",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/lunchtime.png"

    },
    {
        "taskName": "Day for Shopping",
        "description": "I go shopping once a month",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/shoping.png"

    }, {
        "taskName": "Reading time",
        "description": "I read a book every day 1 to 2 hours ",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/reading.png"

    }, {
        "taskName": "Time for watching a film",
        "description": "I watch film one a week",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/watchfilm.png"

    }, {
        "taskName": "Walk day",
        "description": "I go walking once a week(Sunday)",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/walking.png"

    }, {
        "taskName": "Family time",
        "description": "I eat every day with my family together",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/familytime.png"

    }, {
        "taskName": "Gym time",
        "description": "Every day i go to the gym, after Work",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/gymtime.png"

    }, {
        "taskName": "Friends time",
        "description": "Every weekend i go out with my friends",
        "importance": "0",
        "date": "10.02.2023",
        "image": "images/friendstime.png"

    }
]`
const tasks = JSON.parse(books1)


const result = document.querySelector("#result");
for (let i = 0; i < tasks.length; i++) {
    result.innerHTML += `<div class="card my-3" style="width: 23rem; box-shadow: 1px 1px 15px black; margin: 0 auto;">
    <p><a href="#" class="btn btn-primary float-start mt-3 align-self-center"  style="width: 4rem; height: 35px;">Task</a><svg xmlns="http://www.w3.org/2000/svg" width="16" style=" height: 35px;" fill="currentColor" class="bi bi-three-dots-vertical float-end mt-3" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg> 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill float-end mt-4" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
</svg></p>
    
    <img src="${tasks[i].image}" class="card-img-top p-1 border" height="250" width="200" alt="${tasks[i].taskName}">
    <div class="card-body">
      <h3 class="card-title text-center">${tasks[i].taskName}</h3>
      <p class="card-text text-center">${tasks[i].description}</p> <hr>
      <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg> Priority Level:  <button type="button" class="btn btn-success  nBtn"><p class="card-text numerBtn">${tasks[i].importance}</p></button>
      <p class="date"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg> Date: 10.02.2023</p> <hr>
      <button type="button" class="btn btn-danger float-end mx-1 card_Image"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
    </svg> Delete</button>
      <a href="#" class="btn btn-success float-end button_Done"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
    </svg> Done</a>
    </div>
  </div>`
}


const btn = document.getElementsByClassName('nBtn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        tasks[i].importance++;
        document.getElementsByClassName('numerBtn')[i].innerHTML = tasks[i].importance;

    })
}
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        if (tasks[i].importance === 0 || tasks[i].importance === 1) {
            this.style.backgroundColor = "green";
        } else if (tasks[i].importance === 2 || tasks[i].importance === 3) {
            this.style.backgroundColor = "yellow"
        } else if (tasks[i].importance === 4 || tasks[i].importance === 5) {
            this.style.backgroundColor = "red"
        }
    })
}

function removeImage() {
    this.remove()
}
const card = document.getElementsByClassName('card_Image')
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', removeImage)
}