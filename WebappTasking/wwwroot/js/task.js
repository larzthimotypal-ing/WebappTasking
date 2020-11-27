
// get index of the clicked button

const toggleHide = (i => {

    const details = document.querySelector("#dropdown--"+i);
    details.classList.toggle("hidden");
});

const state = document.querySelectorAll(".task-card--state");
const details = document.querySelectorAll(".task-card--details");
const stateColor = (_ => {
    for (i = 0; i < state.length; i++) {
        if (state[i].innerHTML === "Done") {
            stateToggler(state[i].parentNode,"done");
            stateToggler(details[i], "done");
        } else if (state[i].innerHTML === "To Do") {
            stateToggler(state[i].parentNode, "todo");
            stateToggler(details[i], "todo");
        } else if (state[i].innerHTML === "Doing") {
            stateToggler(state[i].parentNode, "doing");
            stateToggler(details[i], "doing");
        }
    }
});

const stateToggler = ((e,s) => {
    e.classList.remove("done");
    e.classList.remove("todo");
    e.classList.remove("doing");
    e.classList.add(s);
});

stateColor();